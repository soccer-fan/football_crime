import { useState } from "react";
import { PageHeader } from "./PageHeader"
import { TeamListContainer } from "./TeamListContainer"

// Utility to return a list of the last 12 months' dates that will have data
const getLastTwelveMonthsWithData = () => {
    return [...Array(12).keys()].map(index => {
        let date = new Date();
        // set to the first of the month so that we subtract months we don't get issues with eg 31st of Feb
        date.setDate(1);
        // Data tends to take around 2 months to be uploaded to the system, so only allow data from two months ago or older
        date.setMonth(date.getMonth() - index - 2);
        // Copy into new Date to strip of hours etc so our props only change for a new month
        return new Date(date.getFullYear(), date.getMonth());
    });
}

/*
The top level component for the app - passes the date to get the data for through to the teamlist container, which will
fetch the relevant data from the police API and to the page header, which will display the month the data was fetched for.

This date is based on the month chosen in the Select item in the PageHeader, so state is maintained in this parent component
and a event handler is passed into the page header component to allow the chosen date index to be updated
*/
export const FootballCrime = () => {
    const dates = getLastTwelveMonthsWithData();
    const [chosenDateIndex, setChosenDateIndex] = useState(0);

    const updateChosenDate = (e) => {
        setChosenDateIndex(e.target.value)
    }

    return (
        <div>
            <PageHeader updateChosenDate={updateChosenDate} dates={dates} chosenDateIndex={chosenDateIndex} />
            <TeamListContainer date={dates[chosenDateIndex]} />
        </div>
    )

}