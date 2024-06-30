import React, { useState, useEffect } from 'react';
import { Pagination, PaginationItem } from '@mui/material';
import Header from '../Header/Header.tsx';
import axios from 'axios';
import { Link } from 'react-router-dom';

export interface OnePlayer {
    PlayerID: number;
    SportsDataID: string;
    Status: string;
    TeamID: number;
    Team: string;
    Jersey: number;
    PositionCategory: string;
    Position: string;
    FirstName: string;
    LastName: string;
    BirthDate: Date;
    BirthCity: string;
    BirthState: string;
    BirthCountry: string;
    GlobalTeamID: number;
    Height: number;
    Weight: number;
}

const alphabet = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

function AllPlayers() {
    const [allPlayers, setAllPlayers] = useState<OnePlayer[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const response = await axios.get('https://api.sportsdata.io/v3/nba/scores/json/PlayersActiveBasic?key=fc743b1b72a944988eb9ba96c6f84321');
                console.log(response.data);
                setAllPlayers(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching players:', error);
            }
        };

        fetchPlayers();
    }, []);

    const handleLetterClick = (letter: string) => {
        setSelectedLetter(letter);
    };

    const filteredPlayers = selectedLetter
        ? allPlayers.filter((player) => player.LastName.charAt(0).toUpperCase() === selectedLetter)
        : allPlayers;

    return (
        <>
            <Header />
            <Pagination
                        count={alphabet.length}
                        variant="outlined"
                        renderItem={(item) => (
                            <PaginationItem
                                {...item}
                                onClick={() => handleLetterClick(alphabet[item.page - 1])}
                                page={item.page !== null ? alphabet[item.page - 1] : undefined}
                            />
                        )}
                    />
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <div>
                        {filteredPlayers.map((player) => (
                            <div key={player.PlayerID}>
                                <Link to={`/onePlayer/${player.PlayerID}`}>
                                <span>{player.LastName} {player.FirstName} </span>
                                </Link>
                                {/* Ajoutez d'autres données du joueur ici si nécessaire */}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </>
    );
}

export default AllPlayers;
