import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Pack } from "../interfaces/Pack";
import StorePack from "./StorePack";
import './Transitions.css';

export default function StorePackDisplay({ packs }: {packs: Pack[]}) {
    return(
        <TransitionGroup className='transition-enter transition-enter-active grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 grid-rows-5 gap-4 justify-items-center'>
            {packs.map(pack => (
                <CSSTransition key={pack.id} addEndListener={(() => {})} classNames='transition'>
                    <StorePack key={pack.id} pack={pack}/>
                </CSSTransition>
            ))}
        </TransitionGroup>
    )
}