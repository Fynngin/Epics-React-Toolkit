import './BaseButton.css';
import { ReactNode } from "react"

type Props = {
    text?: string
    children?: ReactNode
    type?: 'button' | 'submit' | 'reset'
    className?: string
    onClick: Function
}

export default function BaseButton({text, children, type, className, onClick}: Props) {
    return(
        <button className={`baseBtn ${className}`} type={type} onClick={() => onClick()}>
            <p>{text}</p>
            {children}
        </button>
    )
}