import * as C from './GameStyling';
import { useEffect, useState } from 'react';
import { Character } from '../../components/Character/Character';
import { Question } from '../../components/Question/Question';
import { HowToPlay } from '../../components/HowToPlay/HowToPlay';
import { useCharacter } from '../../hooks/useCharacter';
import { Leaderboard } from '../../components/Leaderboard/Leaderbaord';

export default function Game() {
    const [start, setStart] = useState<boolean>(false);
    const [over, setOver] = useState<boolean>(false);
    const [score, setScore] = useState<number>(0);
    const [difficulty, setDifficulty] = useState<string>('Easy');
    const character = useCharacter();

    useEffect(() => {
        if(start) {
            window.addEventListener('keydown', handleKeyDown);

            if(score >= 300 && score < 600) { 
                setDifficulty('Medium');
            }

            if(score >= 600) {
                setDifficulty('Hard');
            }
        }
    }, [score, start]);

    const handleKeyDown = (event: KeyboardEvent) => {
        switch(event.code) {
            case 'KeyW':
                character.moveUp();
                break;
            case 'KeyA':
                character.moveLeft();
                break;
            case 'KeyS':
                character.moveDown();
                break;
            case 'KeyD':
                character.moveRight();
                break;
        }
    }

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
                        <C.map difficulty={difficulty}>
                            <Character 
                            x = {character.x}
                            y = {character.y}
                            side = {character.side}
                            />
                        </C.map>
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
                                <C.playAgain onClick={() => {window.location.reload()}}>Play Again</C.playAgain>
                            </C.gameOver>
                            :
                            <C.startMenu>
                                <C.startButton onClick={() => {setStart(true)}}>Start</C.startButton>
                            </C.startMenu>
                        } 
                    </> 
                }
            </C.mapContainer>
            {start ?
                <Question addScore={addScore} difficulty={difficulty} trigger={character.trigger}/>
                :
                <>
                    {over ?
                        <Leaderboard/>
                        :
                        <HowToPlay/>
                    }
                </>
            }
        </C.container>
    );
}