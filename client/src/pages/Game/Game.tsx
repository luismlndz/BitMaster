import * as C from './GameStyling';
import { useEffect, useState } from 'react';
import { Character } from '../../components/Character/Character';
import { Question } from '../../components/Question/Question';
import { useCharacter } from '../../hooks/useCharacter';

export default function Game() {
    const character = useCharacter('Luis')
    const [start, setStart] = useState(false);
    const [score, setScore] = useState<number>(0);
    const [difficulty, setDifficulty] = useState('Easy');

    useEffect(() => {
        //if(start)
        window.addEventListener('keydown', handleKeyDown);

        if(score >= 300 && score < 600) { 
            setDifficulty('Medium');
        }

        if(score >= 600) {
            setDifficulty('Hard');
        }
        console.log('useEffect');
    }, [score]);

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
        //else
            //end game
    }

    return (
        <C.container className='container'>
            <C.mapContainer>
                <C.map className='map'>
                    <Character 
                    x = {character.x}
                    y = {character.y}
                    side = {character.side}
                    name = {character.username} 
                    />
                </C.map>
                <C.textContainer>
                    <C.score>Score: {score}</C.score>
                    <C.difficulty>Difficulty: {difficulty}</C.difficulty>
                </C.textContainer>
            </C.mapContainer>
            <Question addScore={addScore}/>
        </C.container>
    );
}