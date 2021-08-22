import { useState, useEffect } from 'react'
import { TeamList } from './TeamList'
import { TeamInfo } from './TeamInfo';
import stadiumData from '../data/stadium_data.json';

import { groupBy } from '../utils/groupBy';

/*
This component deals with querying the Police API for the crime data for each of the grounds and formatting that data to pass
down to the child components that need it
*/
export const TeamListContainer = (props) => {
    const [teamData, setTeamData] = useState({});
    const [selectedTeam, setSelectedTeam] = useState(null);

    useEffect(() => {
        // If this gets re-called, it is because we've changed the month to get data for, so throw out the old data
        setTeamData(old => ({}));
        setSelectedTeam(old => null);
        stadiumData.forEach((stadium) => {
            // JS internally indexes months from 0, so we need to add one on to make the API work correctly
            fetch(`/api/crimes-street/all-crime?lat=${stadium.Latitude}&lng=${stadium.Longitude}&date=${props.date.getFullYear()}-${props.date.getMonth() + 1}`,
                { crossDomain: true, })
                .then((response) => {
                    if (response.ok) {
                        response.json()
                            .then((data) => {
                                setTeamData((t) => {
                                    return { ...t, [stadium.Team]: { stadium: stadium, crimeStats: data } };
                                });
                            });
                    }
                });
        })

    }, [props.date]);

    /*
     We store teamData in our state as a keyed object so that we can update without getting duplicates,
     but we need to convert it to a list to give the TeamList something it can map to table rows
    */
    const teamDataAsList = Object.keys(teamData).map(key => {
        let name = { team: key };
        Object.assign(name, teamData[key]);
        return name;
    });

    // Sorts data alphabetically and sets fields needed by TeamList
    const formatTeamDataForList = (data) => {
        if (data && data.length > 0) {
            const sortedData = data.sort((a, b) => {
                const teamA = a.team.toLowerCase();
                const teamB = b.team.toLowerCase();
                return teamA < teamB ? -1 : 1;
            });

            return sortedData.map((item) => {
                return {
                    team: item.team,
                    stadium: item.stadium.Stadium,
                    totalCrimes: item.crimeStats.length,
                }
            })
        }
        return [];
    }

    // Passed into the list to be used as event handler for info button clicks
    const showModal = (team) => {
        setSelectedTeam(team);
    }

    // Returns the crime data to be displayed in the pop up dialog when a team's info button is clicked
    const modalData = () => {
        if (selectedTeam) {
            const groupedData = groupBy(teamData[selectedTeam].crimeStats, 'category');
            return Object.keys(groupedData).map(key => ({ name: key, value: groupedData[key].length }));
        }
        return [];
    }

    return (
        <div>
            <TeamList teamData={formatTeamDataForList(teamDataAsList)} showModal={showModal} />
            {selectedTeam &&
                <TeamInfo
                    name={selectedTeam}
                    data={modalData()}
                    totalCrimes={teamData[selectedTeam].crimeStats.length}
                    handleClose={() => setSelectedTeam(null)}
                    open={selectedTeam != null}
                />}

        </div>

    )

}