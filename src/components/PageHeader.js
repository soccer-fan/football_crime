import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import SecurityIcon from '@material-ui/icons/Security';
import {Select, MenuItem} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    headerText: {
        display: "inline",
        color: 'white'
    },
    headerPadded: {
        paddingLeft: 24,
        paddingRight: 24,
    },
    headerBackground: {
        backgroundColor: "red"
    }
  });

/*
Displays a header for our page with information on the period the data was fetched for
*/
export const PageHeader = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.headerBackground}>
            <SportsSoccerIcon className={[classes.headerText, classes.headerPadded]}/>
            <h1 className={classes.headerText}>Football crime tracker</h1>
            <SecurityIcon className={[classes.headerText, classes.headerPadded]}/>
            <br/>
            <h3 className={classes.headerText}>Crimes committed at the grounds of the following clubs - Data for</h3>
            <Select className={classes.headerPadded}
         
          id="date=chooser"
          value={props.chosenDateIndex}
          onChange={props.updateChosenDate}
        >
        {
          props.dates.map((date, index) => {
              const dateStringParts = date.toDateString().split(" ");
              return <MenuItem value={index}>{dateStringParts[1]} {dateStringParts[3]}</MenuItem>
          })
        }
        </Select>

        </div>

    )
}