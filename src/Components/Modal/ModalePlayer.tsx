import React from 'react';
import './ModalePlayer.scss'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface ModalPlayerProps {
    onePlayerStats: OnePlayer;
}

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
    Height: number;
    Weight: number;
    BirthDate: string;
    BirthCity: string;
    BirthState: string;
    BirthCountry: string;
    HighSchool: string | null;
    College: string;
    Salary: number;
    PhotoUrl: string;
    Experience: number;
    SportRadarPlayerID: string;
    RotoworldPlayerID: number;
    RotoWirePlayerID: number;
    FantasyAlarmPlayerID: number;
    StatsPlayerID: number;
    SportsDirectPlayerID: number;
    XmlTeamPlayerID: number;
    InjuryStatus: string;
    InjuryBodyPart: string;
    InjuryStartDate: string | null;
    InjuryNotes: string;
    FanDuelPlayerID: number;
    DraftKingsPlayerID: number;
    YahooPlayerID: number;
    FanDuelName: string;
    DraftKingsName: string;
    YahooName: string;
    DepthChartPosition: string;
    DepthChartOrder: number;
    GlobalTeamID: number;
    FantasyDraftName: string;
    FantasyDraftPlayerID: number;
    UsaTodayPlayerID: number;
    UsaTodayHeadshotUrl: string;
    UsaTodayHeadshotNoBackgroundUrl: string;
    UsaTodayHeadshotUpdated: string;
    UsaTodayHeadshotNoBackgroundUpdated: string;
    NbaDotComPlayerID: number;
}

const ModalPlayer: React.FC<ModalPlayerProps> = ({ onePlayerStats }) => {

    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/allPlayers');
    };

    return (

        <><h1 className="titleModal">Player Modal</h1>
        <div className='modalPlayer'>
            <p><span className="modalPlayer__span">Player Name:</span> {onePlayerStats.FirstName} {onePlayerStats.LastName}</p>
            {onePlayerStats.Team && <p><span className="modalPlayer__span">Team:</span> {onePlayerStats.Team}</p>}
            <img src={onePlayerStats.PhotoUrl} alt="" />
        </div>
        <Button variant="outlined" onClick={handleBackClick}>Retour</Button>
        </>
    );
};

export default ModalPlayer;
