import './BaseContainer.css';
import { ReactNode } from "react"

type Props = {
    title?: string
    description?: string
    children?: ReactNode
}

export default function BaseContainer({title, description, children}: Props) {
    return(
        <div className='baseContainer'>
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