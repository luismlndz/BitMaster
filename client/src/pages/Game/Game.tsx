import * as C from './GameStyling';
import { useEffect, useState } from 'react';
import { Question } from '../../components/Question/Question';
import { HowToPlay } from '../../components/HowToPlay/HowToPlay';
import { useCharacter } from '../../hooks/useCharacter';
import { Leaderboard } from '../../components/Leaderboard/Leaderbaord';
import { UploadScore } from '../../components/UploadScore/UploadScore';
import { Map } from '../../components/Map/Map';

export default function Game() {
    const [start, setStart] = useState<boolean>(false);
    const [over, setOver] = useState<boolean>(false);
    const [score, setScore] = useState<number>(0);
    const [uploadScore, setUploadScore] = useState<boolean>(false);
    const [difficulty, setDifficulty] = useState<string>('Easy');
    const character = useCharacter();

    useEffect(() => {
        if(start) {
            if(score >= 300 && score < 600) { 
                setDifficulty('Medium');
            }

            if(score >= 600) {
                setDifficulty('Hard');
            }
        }
    }, [score, start]);

    const addScore = (arg: Boolean): void => {
        if(arg)
            setScore(score + 100);
        else {
            setTimeout(() => {
                setStart(false);
                setOver(true);
            }, 3000);
        }      
    }

    return (
        <C.container>
            <C.mapContainer>
                {start ?
                    <> 
                        <Map difficulty={difficulty} character={character}/>
                        <C.textContainer>
                            <C.score>Score: {score}</C.score>
                            <C.difficulty>Difficulty: {difficulty}</C.difficulty>
                        </C.textContainer>
                    </>
                    :
                    <>
                        {over ? 
                            <C.gameOver>
                                <h1>{`Score: ${score}`}</h1>
                                <C.button onClick={() => {window.location.reload()}}>Play Again</C.button>
                                <C.button onClick={() => {setOver(false); setUploadScore(true)}}>Upload Score</C.button>
                            </C.gameOver>
                            :
                            <>
                                {uploadScore ? 
                                    <>
                                    {(score > 0) ?
                                        <UploadScore score={score}/>
                                        :
                                        <C.gameOver>
                                            <h1>Score more than 0 to upload your score!</h1>
                                            <C.button onClick={() => {window.location.reload()}}>Play Again</C.button>
                                        </C.gameOver>
                                    }
                                    </>
                                    :
                                    <C.startMenu>
                                        <C.startButton onClick={() => {setStart(true)}}>Start</C.startButton>
                                    </C.startMenu>
                                }
                            </>
                        } 
                    </> 
                }
            </C.mapContainer>
            {start ?
                <Question addScore={addScore} difficulty={difficulty} trigger={character.trigger}/>
                :
                <>
                    {(over || uploadScore) ?
                        <Leaderboard/>
                        :             
                        <HowToPlay/>
                    }
                </>
            }
        </C.container>
    );
}