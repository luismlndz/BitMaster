import * as C from './GameStyling';
import { useEffect, useState } from 'react';
import { Character } from '../../components/Character/Character';
import { useCharacter } from '../../hooks/useCharacter';

export default function Game() {
    const character = useCharacter('Luis')
    const [start, setStart] = useState(false);

    useEffect(() => {
        //if(start)
        window.addEventListener('keydown', handleKeyDown);
    }, []);

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

    return (
        <C.Container className='container'>
            <C.Map className='map'>
                <Character 
                x = {character.x}
                y = {character.y}
                side = {character.side}
                name = {character.username} 
                />
            </C.Map>
        </C.Container>
    );
}