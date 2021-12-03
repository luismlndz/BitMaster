import * as C from './MapStyling';
import { useEffect } from 'react';
import { Character } from '../Character/Character';
import { CharacterSides } from "../Character/CharacterSides";

type props = {
    difficulty: string,
    character: {
        trigger: boolean,
        x: number,
        y: number,
        side: CharacterSides,
        moveLeft(): void,
        moveRight(): void,
        moveUp(): void,
        moveDown(): void
    }
}

export const Map = ({ difficulty, character }: props) => {

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

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
    }, [])

    return (
        <C.map difficulty={difficulty}>
            <Character 
            x = {character.x}
            y = {character.y}
            side = {character.side}
            />
        </C.map>
    );
}