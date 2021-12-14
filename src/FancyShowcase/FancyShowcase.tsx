import { useEffect, useState } from "react";
import { SortableContainer, SortableElement, SortEnd } from "react-sortable-hoc";
import { getMainShowcase } from "../api/api";
import { useAuth } from "../App"
import BaseContainer from "../BaseComponents/BaseContainer";
import { Card } from "../interfaces/Card";
import { Showcase } from "../interfaces/Showcase";
import './FancyShowcase.css';

export default function FancyShowcase() {
    const [showcase, setShowcase] = useState({} as Showcase);
    const auth = useAuth();

    useEffect(() => {
        getShowcase();
    });
    
    async function getShowcase() {
        const res: Showcase = await getMainShowcase(auth.user.jwt, auth.user.id);
        setShowcase(res);
    }

    const SortableItem = SortableElement(({value}: {value: Card}) => (
        <img src={value.images.size402} className='cardImage' alt='Showcase Item'/>
    ))

    const DraggableContainer = SortableContainer(({children}: {children: any}) => (
        <div className='showcaseContainer'>
            {children}
        </div>
    ))

    function arrayMoveMutate(array: any[], from: number, to:number) {
        array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0]);
    };

    function arrayMove(array: any[], from: number, to: number) {
        array = array.slice();
        arrayMoveMutate(array, from, to);
        return array;
    };

    function onSortEnd({oldIndex, newIndex}: SortEnd) {
        const newCards = arrayMove(showcase.cards, oldIndex, newIndex);
        setShowcase({...showcase, cards: newCards});
    }

    return(
        <div className='showcasePage'>
            <BaseContainer title='Showcase'>
                <div >
                    <DraggableContainer onSortEnd={onSortEnd} axis='x'>
                        {showcase.cards?.map((card: Card, idx: number) => (
                            <SortableItem key={card.id} value={card} index={idx} />
                        ))}
                    </DraggableContainer>
                </div>
            </BaseContainer>
        </div>
    )
}