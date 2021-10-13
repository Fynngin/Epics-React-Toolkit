import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Spinner } from "../interfaces/Spinner";

export default function SpinnerOddsTable({spinner}: {spinner: Spinner}) {
    return(
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Item</TableCell>
                        <TableCell>Chance</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {spinner.items.map(item => (
                        <TableRow key={item.id}>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.chance}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}