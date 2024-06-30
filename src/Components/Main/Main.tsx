import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Main.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import Header from '../Header/Header.tsx';

export interface OneTeam {
    TeamID:               number;
    Key:                  string;
    Active:               boolean;
    City:                 string;
    Name:                 string;
    LeagueID:             number;
    StadiumID:            number;
    Conference:           string;
    Division:             string;
    PrimaryColor:         string;
    SecondaryColor:       string;
    TertiaryColor:        string;
    QuaternaryColor:      string;
    WikipediaLogoUrl:     string;
    WikipediaWordMarkUrl: null;
    GlobalTeamID:         number;
    NbaDotComTeamID:      number;
    HeadCoach:            string;
}




const Main = () => {
    const [teams, setTeams] = useState<OneTeam[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const response = await axios.get('https://api.sportsdata.io/v3/nba/scores/json/teams?key=fc743b1b72a944988eb9ba96c6f84321', {

                });

                // Assuming the API response structure is { data: { response: [...] } }
                const teamsData = response.data;
                // const filteredTeams = teamsData.filter((team: any) => team.nbaFranchise)
                console.log(teamsData);
                
                setTeams(teamsData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching teams:', error);
                setLoading(false);
            }
        };

        fetchTeams();
    }, []);

    return (
        <><Header />
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="teams-list">
                    {teams && teams.map((team) => (
                        <Card key={team.TeamID} className="team-card">
                            <CardActionArea>
                                <CardMedia
                                    className='image'
                                    component="img"
                                    alt={team.WikipediaLogoUrl}
                                    max-height="60%"
                                    image={team.WikipediaLogoUrl} // Example logo URL
                                    title={team.City} />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {team.City} {team.Name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Nickname: {team.Name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        City: {team.City}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Link to={`/oneTeam/${team.Key}`} className="team-link">
                                    View Players
                                </Link>
                            </CardActions>
                        </Card>
                    ))}
                </div>
            )}
        </div></>
    );
};

export default Main;
