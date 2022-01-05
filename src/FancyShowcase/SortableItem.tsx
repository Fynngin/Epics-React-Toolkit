import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card } from "../interfaces/Card";
import CardImage from "./CardImage";
import './SortableItem.css';

type Props = {
    id: string
    card: Card
}

export default function SortableItem(props: Props) {
    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({
        id: props.id
    });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    };

    return(
        <div style={style} ref={setNodeRef} className='sortableItemContainer'>
            <CardImage card={props.card} />
            {/* <button {...listeners} className='dragHandle'></button> */}
            <div {...attributes} {...listeners} className='dragHandle'>
                <div className='dot'/>
            </div>
        </div>
    )
}