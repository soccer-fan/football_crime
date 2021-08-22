import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import SecurityIcon from '@material-ui/icons/Security';

const divStyles = {
    backgroundColor: "red"
};

const headerTextStyles = {
    display: "inline"
};

const iconStyles = {
    spacing: 16
};

export const PageHeader = (props) => {
    const dateStringParts = props.date.toDateString().split(" ");

    return (
        <div style={divStyles}>
            <SportsSoccerIcon styles={iconStyles}/>
            <h1 style={headerTextStyles}>Football crime tracker</h1>
            <SecurityIcon styles={iconStyles}/>
            <h3>Crimes committed at the grounds of the following clubs - Data for {dateStringParts[1]} {dateStringParts[3]} (last full month)</h3>

        </div>

    )
}