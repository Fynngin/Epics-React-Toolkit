import BaseContainer from "../BaseComponents/BaseContainer";
import './FilterSelector.css';

export default function FilterSelector() {
    const seasons = ["Founders", "2018", "2019", "2020", "2021"];

    return(
        <BaseContainer title='Filter Seasons / Collections' description='Change which Seasons you want to include in the transfer.'>
            <div className='seasonsContainer'>
                {seasons.map(season => (
                    <label key={season} className="checkbox">
                        <input type="checkbox" name="checkbox" />
                        {season}
                  </label>
                ))}
            </div>
        </BaseContainer>
    )
}