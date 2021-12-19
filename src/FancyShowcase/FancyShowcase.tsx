import { useEffect, useState } from "react";
import { DndContext, DragEndEvent, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { getMainShowcase } from "../api/api";
import { useAuth } from "../App"
import BaseContainer from "../BaseComponents/BaseContainer";
import { Card } from "../interfaces/Card";
import { Showcase } from "../interfaces/Showcase";
import './FancyShowcase.css';
import SortableItem from "./SortableItem";
import CardImage from "./CardImage";
import { arrayMove, SortableContext, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

export default function FancyShowcase() {
    // const [showcase, setShowcase] = useState({} as Showcase);
    const [cardIds, setCardIds] = useState([] as string[]);
    const auth = useAuth();

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    useEffect(() => {
        getShowcase();
    });
    
    async function getShowcase() {
        let res: Showcase = await getMainShowcase(auth.user.jwt, auth.user.id);
        setCardIds(res.cards.map(el => el.id.toString()));
    }

    function handleDragEnd(event: DragEndEvent) {
        const {active, over} = event;
        console.log(active)
        
        // if (active.id !== over.id) {
        //     setShowcase((showcase: Showcase) => {
        //         const oldIndex = showcase.cards.indexOf(active.id);
        //         const newIndex = showcase.cards.indexOf(over.id);
                
        //         return {...showcase, cards: arrayMove(showcase.cards, oldIndex, newIndex)};
        //     });
        // }
    }

    return(
        <div className='showcasePage'>
            <BaseContainer title='Showcase'>
                {showcase.cards ?
                <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
                    <div className='showcaseContainer'>
                        <SortableContext items={showcase.cards?.map((_, idx) => idx.toString())}>
                            {showcase.cards?.map((card: Card, idx: number) => (
                                <SortableItem id={card.id.toString()}>
                                    <CardImage card={card} />
                                </SortableItem>
                            ))}
                        </SortableContext>
                    </div>
                </DndContext>
                : <></>}
            </BaseContainer>
        </div>
    )
}