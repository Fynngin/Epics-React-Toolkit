import BaseCheckbox from "../BaseComponents/BaseCheckbox";
import BaseContainer from "../BaseComponents/BaseContainer";
import './ModeSwitcher.css';

type Props = {
    onChange: Function
}

export enum TransferMode {
    SEND,
    ACCEPT
}

export default function ModeSwitcher({onChange}: Props) {
    function handleModeSelect(evt: any) {
        onChange(evt.target.value === 'Send' ? TransferMode.SEND : TransferMode.ACCEPT);
    }

    return(
        <BaseContainer title='Change Mode' description='Do you want to send or accept Trades?'>
            <div className='modeContainer'>
                <BaseCheckbox type='radio' onChange={handleModeSelect} label='Send' name='mode'/>
                <BaseCheckbox type='radio' onChange={handleModeSelect} label='Accept' name='mode'/>
            </div>
        </BaseContainer>
    )
}