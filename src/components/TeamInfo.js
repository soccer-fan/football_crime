import { Dialog, DialogTitle, DialogContent, DialogContentText } from '@material-ui/core';
import React from 'react';
import { CrimeBreakdown } from './CrimeBreakdown';

/*
This component displays the dialog with a more detailed breakdown of crimes at a selected team's ground
*/
export const TeamInfo = (props) => {
    return (
        <Dialog onClose={props.handleClose} aria-labelledby="simple-dialog-title" open={props.open}>
            <DialogTitle id="simple-dialog-title">{props.name}</DialogTitle>
            <DialogContent>
                <DialogContentText>Total Crimes: {props.totalCrimes}</DialogContentText>
                <CrimeBreakdown data={props.data} />
            </DialogContent>

        </Dialog>
    )
}