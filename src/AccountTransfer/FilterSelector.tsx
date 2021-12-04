import BaseContainer from "../BaseComponents/BaseContainer";

export default function FilterSelector() {
    const seasons = ["Founders", "2018", "2019", "2020", "2021"];

    return(
        <BaseContainer title='Filter Seasons / Collections' description='Change which Seasons you want to include in the transfer.'>
            <form>
                {seasons.map(season => (
                    <label key={season}>{season}
                        <input type="checkbox"/>
                        <span></span>
                    </label>
                ))}
            </form>
        </BaseContainer>
    )
}