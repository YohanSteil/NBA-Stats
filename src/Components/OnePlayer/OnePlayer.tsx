import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ModalPlayer from '../Modal/ModalePlayer.tsx';

const OnePlayer = () => {
    const { id } = useParams<{ id: string }>();
    const [onePlayerStats, setOnePlayerStats] = useState<any | null>(null);
    const [showModal, setShowModal] = useState(false) ;

    useEffect(() => {
        const fetchOnePlayerStats = async () => {
            try {
                const response = await axios.get(`https://api.sportsdata.io/v3/nba/scores/json/Player/${id}?key=fc743b1b72a944988eb9ba96c6f84321`);
                console.log('API Response:', response.data);

                // Vérifie si la réponse contient les données attendues
                if (response.data && response.data.PlayerID) {
                    setOnePlayerStats(response.data);
                } else {
                    console.error('Invalid API response format.');
                }
            } catch (error) {
                console.error('Error fetching player stats:', error);
            }
        };

        fetchOnePlayerStats();
    }, [id]);


    return (
        <div>
            {onePlayerStats ? (
                <ModalPlayer onePlayerStats={onePlayerStats} />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default OnePlayer;
