import { ReactNode, useEffect, useState } from "react"
import './ProgressBar.css'

type Props = {
    max: number
    progress: number
    children?: ReactNode
    className?: string
}

export default function ProgressBar({max, progress, children, className}: Props) {
    const [barWidth, setBarWidth] = useState(`${(progress/max)*100}`);
    useEffect(() => {
        setBarWidth(`${(progress/max)*100}%`);
    }, [max, progress])

    return(
        <>
        <div className={`progressContainer ${className}`}>
            <div style={{width: barWidth}} id='progressBar'>
                {children}
            </div>
        </div>
        </>
    )
}