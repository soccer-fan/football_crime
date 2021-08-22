import { useState, useEffect } from 'react'
import {TeamList} from './TeamList'
import { TeamInfo } from './TeamInfo';
import stadiumData from '../data/stadium_data.json';

import { groupBy } from '../utils/groupBy';

export const TeamListContainer = (props) => {
    const [teamData, setTeamData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [queriesResolved, setQueriesResolved] = useState(0);
    const [selectedTeam, setSelectedTeam] = useState(null);
    
    useEffect(() => {
        stadiumData.forEach((stadium) => {
            fetch(`/api/crimes-street/all-crime?lat=${stadium.Latitude}&lng=${stadium.Longitude}&date=${props.date.getFullYear()}-${props.date.getMonth()}`,
             { crossDomain:true,})
            .then((response) => {
                if(response.ok) {
                    response.json()
                    .then((data) => {
                        setTeamData((t) => {
                            return {...t, [stadium.Team]: {stadium: stadium, crimeStats: data}};
                        });
                        setQueriesResolved(prev => prev + 1);
                        if(queriesResolved === stadiumData.length) {
                            setIsLoading(false);
                            //alert('all loaded');
                        }
                    });
                } else {
                    // error case here
                    setQueriesResolved(prev => prev + 1);
                    if(queriesResolved === stadiumData.length) {
                        setIsLoading(false);
                        //alert('all loaded');
                    }
                }
            });
        })

    }, []);

    const teamDataAsList = Object.keys(teamData).map(key => {
        let name = {team: key};
        Object.assign(name, teamData[key]);
        return name;
    });

    const formatTeamData = (data) => {
        if(data && data.length > 0) {
            const sortedData =  data.sort((a,b) => {
                const teamA = a.team.toLowerCase();
                const teamB = b.team.toLowerCase();
                return teamA < teamB ? -1: 1;
            });

            return sortedData.map((item) => {
                return {
                    team: item.team,
                    stadium: item.stadium.Stadium,
                    totalCrimes: item.crimeStats.length,
                    groupedCrimes: groupBy(item.crimeStats, 'category')
                }
            })


        }
        return [];   
    }

    const showModal = (team) => {
        setSelectedTeam(team);
    }

    console.log(selectedTeam);

    const modalData = () => {
        if(selectedTeam) {
            const groupedData = groupBy(teamData[selectedTeam].crimeStats, 'category');
            return  Object.keys(groupedData).map(key => ({name: key, value: groupedData[key].length}));
        }
        return [];
    }

    return(

        <div>
            <TeamList teamData={formatTeamData(teamDataAsList)} isLoading={isLoading} showModal={showModal} />
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