import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card } from "../interfaces/Card";
import CardImage from "./CardImage";

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
        <CardImage card={props.card} ref={setNodeRef} style={style} {...listeners} {...attributes}/>
    )
}