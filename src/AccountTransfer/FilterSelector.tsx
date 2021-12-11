import BaseCheckbox from "../BaseComponents/BaseCheckbox";
import BaseContainer from "../BaseComponents/BaseContainer";
import './FilterSelector.css';

type Props = {
    onChange: Function
}

export default function FilterSelector({onChange}: Props) {
    const seasons = ["Founders Edition", "2018", "2019", "2020", "2021"];

    function handleSeasonSelect() {
        let inputs: HTMLInputElement[] = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'));
        onChange(inputs.map((input: HTMLInputElement) => input.value));
    }

    return(
        <BaseContainer title='Filter Seasons' description='Change which Seasons you want to include in the transfer.'>
            <div className='seasonsContainer'>
                {seasons.map(season => (
                    <BaseCheckbox
                        key={season}
                        type='checkbox'
                        label={season}
                        onChange={handleSeasonSelect}
                    />
                //     <label key={season} className="checkbox">
                //         <input 
                //             type="checkbox" 
                //             defaultChecked
                //             onChange={handleSeasonSelect}
                //             value={season}
                //             name={season}
                //         />
                //         {season}
                //   </label>
                ))}
            </div>
        </BaseContainer>
    )
}