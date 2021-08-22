import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import InfoIcon from '@material-ui/icons/Info';
import { Button } from '@material-ui/core';

/*
Displays a list of teams with their total crime stats. Each entry has an info button that can be clicked
to display a popup dialog with a brekdown of types of crime for that team's stadium
*/
export const TeamList = (props) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Team</TableCell>
                        <TableCell align="right">Stadium</TableCell>
                        <TableCell align="right">Total Crimes</TableCell>
                        <TableCell align="right">Info</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.teamData.map((row) => {
                        return (
                            <TableRow key={row.team}>
                                <TableCell component="th" scope="row">
                                    {row.team}
                                </TableCell>
                                <TableCell align="right">{row.stadium}</TableCell>
                                <TableCell align="right">{row.totalCrimes}</TableCell>
                                <TableCell align="right"><Button onClick={() => props.showModal(row.team)}><InfoIcon /></Button></TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}