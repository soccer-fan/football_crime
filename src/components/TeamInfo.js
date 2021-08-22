import { Dialog, DialogTitle, DialogContent,DialogContentText } from '@material-ui/core';
import React from 'react';
import { CrimeBreakdown } from './CrimeBreakdown';

export const TeamInfo = (props) => {
    console.log(props);
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