import { Spinner } from "../interfaces/Spinner";

export default function SpinnerOddsTable({spinner}: {spinner: Spinner}) {
    return(
        <table className='divide-y'>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Chance</th>
                </tr>
            </thead>
            <tbody>
                {spinner.items.map(item => (
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.chance}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}