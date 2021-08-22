import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import InfoIcon from '@material-ui/icons/Info';
import { Button, makeStyles } from '@material-ui/core';

export const TeamList = (props) => {
    const listContent = props.teamData && props.teamData.length > 0 ? props.teamData.map((team) => <li>{team.team} {team.totalCrimes}</li>) : <li>Placeholder</li>;
    return (
        <TableContainer component={Paper}>
            <Table>
            <TableHead>
                <TableRow>
                <TableCell>Team</TableCell>
                <TableCell align="right">Stadium</TableCell>
                <TableCell align="right">TotalCrimes</TableCell>
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
                        <TableCell align="right"><Button onClick={() => props.showModal(row.team)}><InfoIcon/></Button></TableCell>
                    </TableRow>
                    )
                })}
            </TableBody>
            </Table>
      </TableContainer>
    );
}