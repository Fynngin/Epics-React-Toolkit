import './BaseButton.css';
import { ReactNode } from "react"

type Props = {
    text?: string
    children?: ReactNode
    type?: 'button' | 'submit' | 'reset'
    className?: string
    onClick?: Function
}

export default function BaseButton({text, children, type, className, onClick}: Props) {
    function handleClick() {
        if (onClick)
            onClick();
    }

    return(
        <button className={`baseBtn ${className}`} type={type} onClick={handleClick}>
            <p>{text}</p>
            {children}
        </button>
    )
}