import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

interface Team {
    id: number;
    full_name: string;
    conference: string;
    division: string;
    city: string;
    name: string;
    abbreviation: string;
}

const Main = () => {

    const [teams, setTeams] = useState<Team[]>([])

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const response = await axios.get ('https://api.balldontlie.io/v1/teams', {
                    headers : {
                        'Authorization' : 'ff1614c7-1af4-43d3-88ac-690a341eceaa'
                    }
                }) ;
                setTeams(response.data.data)
                console.log(response.data.data);
                
            } catch (error) {
                console.error('Error', error)
            }
        }; 

        fetchTeams()
    }, [])
    return (
        <div>
            <ul>
                {teams.map(team => (
                    <li key={team.id}>
                       <Link to="#">{team.full_name}</Link>
                       <p>{team.abbreviation}</p>
                </li>
                ))}
            </ul>
        </div>
    );
};

export default Main;