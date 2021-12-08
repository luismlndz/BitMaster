import * as C from './LeaderboardStyling';

interface props {
    leaderboard: [{
        username: string,
        score: number
    }]
}

export const Leaderboard = ({ leaderboard }: props) => {
    return (
        <C.container>
            <C.title>Leaderboard<C.trophy/></C.title>
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