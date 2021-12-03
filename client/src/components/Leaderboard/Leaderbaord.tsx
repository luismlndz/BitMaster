import * as C from './LeaderboardStyling';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const Leaderboard = () => {
    const [leaderboard, setLeaderboard] = useState<null | [{username: string, score: string}]>(null);

    useEffect(() => {
        axios.get('http://localhost:8080/leaderboard')
        .then((response) => {
            setLeaderboard(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [])

    return (
        <C.container>
            <C.title>Leaderboard</C.title>
            <C.header>
                <C.headerText>Username</C.headerText>
                <C.headerText>Score</C.headerText>
            </C.header>
            {(leaderboard && leaderboard.map((user, index) => (
                <C.row key={index}>
                    <C.rowData>{`${user.username}`}</C.rowData>
                    <C.rowData>{`${user.score}`}</C.rowData>
                </C.row>
            )))}
        </C.container>
    );
}