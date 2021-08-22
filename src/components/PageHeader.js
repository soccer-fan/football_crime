import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import SecurityIcon from '@material-ui/icons/Security';

const divStyles = {
    backgroundColor: "red"
};

const headerTextStyles = {
    display: "inline",
    color: 'white'
};

const iconStyles = {
    paddingLeft: 24,
    paddingRight: 24,
    color: "white"
};

/*
Displays a header for our page with information on the period the data was fetched for
*/
export const PageHeader = (props) => {
    const dateStringParts = props.date.toDateString().split(" ");

    return (
        <div style={divStyles}>
            <SportsSoccerIcon style={iconStyles}/>
            <h1 style={headerTextStyles}>Football crime tracker</h1>
            <SecurityIcon style={iconStyles}/>
            <br/>
            <h3 style={headerTextStyles}>Crimes committed at the grounds of the following clubs - Data for {dateStringParts[1]} {dateStringParts[3]} (the full month before last)</h3>

        </div>

    )
}