import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { ReactNode } from "react";

type Props = {
    id: string
    children: ReactNode
}

export default function SortableItem(props: Props) {
    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({
        id: props.id
    });

    const style = transform ? {
        transform: CSS.Transform.toString(transform),
        transition
    } : undefined;

    return(
        <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
            {props.children}
        </button>
    )
}