import { useEffect, useState } from "react";
import { DndContext, DragEndEvent, DragOverlay, DragStartEvent, KeyboardSensor, PointerSensor, useSensor, useSensors, closestCenter } from "@dnd-kit/core";
import { getAllShowcases } from "../api/api";
import { useAuth } from "../App"
import BaseContainer from "../BaseComponents/BaseContainer";
import { Showcase } from "../interfaces/Showcase";
import './FancyShowcase.css';
import SortableItem from "./SortableItem";
import CardImage from "./CardImage";
import { arrayMove, SortableContext, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { Card } from "../interfaces/Card";

interface ObjectLiteral {
    [key: string]: Showcase
}

export default function FancyShowcase() {
    const [showcases, setShowcases] = useState<ObjectLiteral>({});
    const [activeElement, setActiveElement] = useState<Card | null>(null);
    const divider = ':;:';
    const auth = useAuth();

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    useEffect(() => {
        const getShowcase = async () => {
            let res: Showcase[] = await getAllShowcases(auth.user.jwt, auth.user.id);
            for (const shelve of res) {
                setShowcases(s => ({...s, [shelve.name]: shelve}))
            }
        }
        getShowcase();
    }, [auth]);

    function handleDragEnd(event: DragEndEvent) {
        const {active, over} = event;
        
        if (!over)
            return;

        if (active.id === over.id)
            return;
        
        const [activeShowcaseKey, activeItemId] = active.id.split(divider);
        const [overShowcaseKey, overItemId] = over.id.split(divider);
        const oldIndex = showcases[activeShowcaseKey].cards.findIndex(el => el.id.toString() === activeItemId);
        const newIndex = showcases[overShowcaseKey].cards.findIndex(el => el.id.toString() === overItemId);
        
        let oldShowcase = showcases[activeShowcaseKey];
        if (activeShowcaseKey === overShowcaseKey) {
                oldShowcase.cards = arrayMove(oldShowcase.cards, oldIndex, newIndex);
                setShowcases(s => ({...s, [overShowcaseKey]: oldShowcase}));
        } else {
            let newShowcase = showcases[overShowcaseKey];
            newShowcase.cards.splice(newIndex, 0, oldShowcase.cards[oldIndex]);
            oldShowcase.cards.splice(oldIndex, 1);
            setShowcases(s => ({...s, [activeShowcaseKey]: oldShowcase, [overShowcaseKey]: newShowcase}));
        }

        setActiveElement(null);
    }

    function handleDragStart(event: DragStartEvent) {
        const {active} = event;
        const element = getItemById(active.id);
        if (element)
            setActiveElement(element);
    }

    function getItemById(id: string) {
        const [showcaseKey, itemId] = id.split(divider);
        return showcases[showcaseKey].cards.find(el => el.id.toString() === itemId);
    }

    return(
        <div className='showcasePage'>
            <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart} sensors={sensors} collisionDetection={closestCenter}>
                {Object.entries(showcases).map(([title, showcase]) => (
                    <BaseContainer title={title} key={title}>
                            <SortableContext items={showcase.cards.map(c => `${title}${divider}${c.id}`)}>
                                <div className='showcaseContainer'>
                                    {showcase.cards?.map((card: Card) => (
                                        <SortableItem card={card} id={`${title}${divider}${card.id}`} key={card.id} />
                                    ))}
                                </div>
                            </SortableContext>
                            <DragOverlay dropAnimation={{ easing: 'ease', duration: 250, dragSourceOpacity: 1 }}>
                                {activeElement ? <CardImage id={`${title}${divider}${activeElement.id}`} card={activeElement} /> : null}
                            </DragOverlay>
                    </BaseContainer>
                ))}
            </DndContext>
        </div>
    )
}