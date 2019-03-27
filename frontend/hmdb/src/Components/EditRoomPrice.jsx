import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ButtonAppBar from './ButtonAppBar';
import RoomPriceModalWrapped from './RoomPriceModal';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

const roomTypes = [
    {
        name: 'Suite',
        price: 100,
        numPeople: '2',
        numBeds: '2'
    },
    {
        name: 'Deluxe',
        price: 200,
        numPeople: '8',
        numBeds: '4'
    },
    {
        name: 'Penthouse',
        price: 500,
        numPeople: '10',
        numBeds: '8'
    },
    {
        name: 'Single',
        price: 50,
        numPeople: '1',
        numBeds: '1'
    },
]


class EditMenuPrice extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <div>
                <ButtonAppBar />
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Room Type</TableCell>
                                <TableCell align="right">Number of People</TableCell>
                                <TableCell align="right">Number of Beds</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Edit Price</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {roomTypes.map(roomType => (
                                <TableRow key={roomType.name}>
                                    <TableCell component="th" scope="row">
                                        {roomType.name}
                                    </TableCell>
                                    <TableCell component="th" align="right" scope="row">
                                        {roomType.numPeople}
                                    </TableCell>
                                    <TableCell component="th" align="right" scope="row">
                                        {roomType.numBeds}
                                    </TableCell>
                                    <TableCell align="right">${roomType.price}</TableCell>
                                    <TableCell align="right"><RoomPriceModalWrapped /></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}


export default withStyles(styles)(EditMenuPrice);
