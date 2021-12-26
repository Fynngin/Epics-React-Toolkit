import { useEffect, useState } from "react";
import { DndContext, DragEndEvent, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { getMainShowcase } from "../api/api";
import { useAuth } from "../App"
import BaseContainer from "../BaseComponents/BaseContainer";
import { Showcase } from "../interfaces/Showcase";
import './FancyShowcase.css';
import SortableItem from "./SortableItem";
import CardImage from "./CardImage";
import { arrayMove, SortableContext, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { restrictToHorizontalAxis } from '@dnd-kit/modifiers';

export default function FancyShowcase() {
    const [showcase, setShowcase] = useState<Showcase>();
    const [showcaseIndices, setShowcaseIndices] = useState<string[]>([]);
    const auth = useAuth();

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    useEffect(() => {
        const getShowcase = async () => {
            let res: Showcase = await getMainShowcase(auth.user.jwt, auth.user.id);
            setShowcaseIndices(res.cards.map((_, idx: number) => idx.toString()))
            setShowcase(res);
        }
        getShowcase();
    }, [auth]);

    function handleDragEnd(event: DragEndEvent) {
        const {active, over} = event;
        
        if (over && over.id && active.id !== over.id) {
            setShowcaseIndices((indices: string[]) => {
                const oldIndex = indices.indexOf(active.id);
                const newIndex = indices.indexOf(over.id);
                
                return arrayMove(indices, oldIndex, newIndex);
            });
        }
    }

    return(
        <div className='showcasePage'>
            <BaseContainer title='Showcase'>
                {showcase ?
                <DndContext onDragEnd={handleDragEnd} sensors={sensors} modifiers={[restrictToHorizontalAxis]}>
                    <SortableContext items={showcaseIndices}>
                        <div className='showcaseContainer'>
                            {showcaseIndices?.map((idx: string) => (
                                <SortableItem id={idx} key={idx}>
                                    <CardImage card={showcase.cards[Number.parseInt(idx)]} />
                                </SortableItem>
                            ))}
                        </div>
                    </SortableContext>
                </DndContext>
                : <></>}
            </BaseContainer>
        </div>
    )
}