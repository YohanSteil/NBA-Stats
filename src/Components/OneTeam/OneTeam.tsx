import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import './OneTeam.scss'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

export interface AllPlayersByTeam {
    PlayerID:                            number;
    SportsDataID:                        string;
    Status:                              string;
    TeamID:                              number;
    Team:                                string;
    Jersey:                              number;
    PositionCategory:                    string;
    Position:                            string;
    FirstName:                           string;
    LastName:                            string;
    Height:                              number;
    Weight:                              number;
    BirthDate:                           Date;
    BirthCity:                           string;
    BirthState:                          string;
    BirthCountry:                        string;
    HighSchool:                          null;
    College:                             string;
    Salary:                              number;
    PhotoUrl:                            string;
    Experience:                          number;
    SportRadarPlayerID:                  string;
    RotoworldPlayerID:                   number;
    RotoWirePlayerID:                    number;
    FantasyAlarmPlayerID:                number;
    StatsPlayerID:                       number;
    SportsDirectPlayerID:                number;
    XmlTeamPlayerID:                     number;
    InjuryStatus:                        string;
    InjuryBodyPart:                      string;
    InjuryStartDate:                     null;
    InjuryNotes:                         string;
    FanDuelPlayerID:                     number;
    DraftKingsPlayerID:                  number;
    YahooPlayerID:                       number;
    FanDuelName:                         string;
    DraftKingsName:                      string;
    YahooName:                           string;
    DepthChartPosition:                  string;
    DepthChartOrder:                     number;
    GlobalTeamID:                        number;
    FantasyDraftName:                    string;
    FantasyDraftPlayerID:                number;
    UsaTodayPlayerID:                    number;
    UsaTodayHeadshotUrl:                 string;
    UsaTodayHeadshotNoBackgroundUrl:     string;
    UsaTodayHeadshotUpdated:             Date;
    UsaTodayHeadshotNoBackgroundUpdated: Date;
    NbaDotComPlayerID:                   number;
}



const OneTeam = () => {
    const {slug} = useParams<{ id: string }>()
    const [players, setPlayers] = useState<AllPlayersByTeam[]>([]);
    const [loading, setLoading] = useState(true);

   useEffect(() => {
    const fectOneTeam = async () => {
        try {
            const response = await axios.get(`https://api.sportsdata.io/v3/nba/scores/json/Players/${slug}?key=fc743b1b72a944988eb9ba96c6f84321`, {
                // params: {
                    
                //     per_page: 100,
                // },
                // headers : {
                //     'Authorization' : 'ff1614c7-1af4-43d3-88ac-690a341eceaa'
                // }
            })
            console.log(response.data);
            setPlayers(response.data)
            setLoading(false); 
        } catch (error)
        {
            console.error('error', error)
            setLoading(false); 
        }
    }
    

    fectOneTeam()
   }, [slug])

    return (
        <><div>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <><h1 className='title'>Tous les joueurs</h1><div className='onePlayer'>
                        {players.map((player) => (
                            <Link key={player.PlayerID} className='onePlayer__link' to={`/onePlayer/${player.PlayerID}`}>
                                <Card>
                                    <CardActionArea>
                                        {/* <CardMedia
                component="img"
                height="140"
                image={player.UsaTodayHeadshotUrl}
                alt="green iguana" /> */}
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                <h3 className='titleh3'>{player.FirstName} {player.LastName}</h3>
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Maillot numéro {player.Jersey}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Link>
                        ))}
                    </div></>
                )}
            </div></>
    );
};

export default OneTeam;