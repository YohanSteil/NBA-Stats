import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export interface Player {
    id: number;
    first_name: string;
    last_name: string;
    position: string;
    height: string;
    weight: string;
    jersey_number: string;
    college: string;
    country: string;
    draft_year: number | null;
    draft_round: number | null;
    draft_number: number | null;
    team: {
        id: number;
        conference: string;
        division: string;
        city: string;
        name: string;
        full_name: string;
        abbreviation: string;
    };
}


const OneTeam = () => {
    const {id} = useParams<{ id: string }>()
    const [players, setPlayers] = useState<Player[]>([]);
    const [loading, setLoading] = useState(true);

   useEffect(() => {
    const fectOneTeam = async () => {
        try {
            const response = await axios.get(`https://api.balldontlie.io/v1/players?team_ids[]=${id}`, {
                headers : {
                    'Authorization' : 'ff1614c7-1af4-43d3-88ac-690a341eceaa'
                }
            })
            console.log(response.data.data);
            setPlayers(response.data.data)
            setLoading(false); 
        } catch (error)
        {
            console.error('error', error)
            setLoading(false); 
        }
    }
    

    fectOneTeam()
   }, [id])

    return (
        <div>
        {loading ? (
            <p>Loading...</p>
        ) : (
              <div>
                    {players.map((player) => (
                        <div key={player.id}>
                            <Link to={`/onePlayer/${player.id}`}>{player.first_name} {player.last_name}</Link>
                            <p>Position: {player.position}</p>
                            <p>Height: {player.height}</p>
                            <p>Weight: {player.weight}</p>
                            <p>Jersey Number: {player.jersey_number}</p>
                            <p>College: {player.college}</p>
                            <p>Country: {player.country}</p>
                            <p>Draft Year: {player.draft_year || 'N/A'}</p>
                            <p>Team: {player.team.full_name}</p>
                            <hr />
                        </div>
                    ))}
                </div>
        )}
    </div>
    );
};

export default OneTeam;