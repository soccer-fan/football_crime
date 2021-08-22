import { useState } from "react";
import { PageHeader } from "./PageHeader"
import { TeamListContainer } from "./TeamListContainer"

const getDateLastFullMonth = () => {
    let date = new Date();
    // set to the first of the month so that we subtract months we don't get issues with eg 31st of Feb
    date.setDate(1);
    date.setMonth(date.getMonth() - 1);
    // Copy into new Date to strip of hours etc so our props don't constantly change
    return new Date(date.getFullYear(), date.getMonth());
}

export const FootballCrime = () => {
    const date = getDateLastFullMonth();
    return (
        <div>
            <PageHeader date={date}/>
            <TeamListContainer date={date}/>
        </div>
    )

}