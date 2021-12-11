import { MouseEventHandler } from "react";
import './BaseCheckbox.css';

type Props = {
    type: 'checkbox' | 'radio'
    label: string
    name?: string
    onChange: MouseEventHandler<HTMLInputElement>
}

export default function BaseCheckbox({type, onChange, label, name}: Props) {
    return(
        <label key={label} className="checkbox" htmlFor={`check-${label}`}>
            <input 
                id={`check-${label}`}
                type={type}
                defaultChecked
                onClick={onChange}
                value={label}
                name={name}
            />
            {label}
        </label>
    )
}