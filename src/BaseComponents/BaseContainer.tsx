import './BaseContainer.css';
import { ReactNode } from "react"

type Props = {
    title?: string
    description?: string
    className?: string
    children?: ReactNode
}

export default function BaseContainer({title, description, className, children}: Props) {
    return(
        <div className={`baseContainer ${className}`}>
            {title ?
                <h2 className='baseContainerTitle'>
                    {title}
                </h2>
            : <></>}
            {description ? 
                <p className='baseContainerDescription'>
                    {description}
                </p>
            : <></>}
            {title ? 
                <div className='dividerLine'/>
            : <></>}
            <div className='containerContents'>
                {children}
            </div>
        </div>
    )
}