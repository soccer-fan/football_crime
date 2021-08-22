import { useState } from "react";
import { PageHeader } from "./PageHeader"
import { TeamListContainer } from "./TeamListContainer"

const getLastTwelveMonthsWithData = () => {
    return [...Array(12).keys()].map(index => {
        let date = new Date();
        // set to the first of the month so that we subtract months we don't get issues with eg 31st of Feb
        date.setDate(1);
        date.setMonth(date.getMonth() - index - 2);
        // Copy into new Date to strip of hours etc so our props only change for a new month
        return new Date(date.getFullYear(), date.getMonth());
    });
}

/*
The top level component for the app - passes the date to get the data for through to the teamlist container, which will
fetch the relevant data from the police API and to the page header, which will display the month the data was fetched for
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
            <TeamListContainer date={dates[chosenDateIndex]}/>
        </div>
    )

}