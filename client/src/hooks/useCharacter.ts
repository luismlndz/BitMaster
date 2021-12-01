import { CharacterSides } from "../components/Character/CharacterSides";
import { useState } from "react"
import { mapSpots } from "../maps/maps";

export const useCharacter = (prop: string) => {
    const [username, setUsername] = useState(prop);
    const [position, setPosition] = useState({x: mapSpots.length/2, y: mapSpots.length/2});
    const [side, setSide] = useState<CharacterSides>('down');

    const moveLeft = () => {
        setPosition((position) => ({
            x: canMove(position.x - 1, position.y) ? position.x - 1 : position.x,
            y: position.y
        }));
        setSide('left');
    }

    const moveRight = () => {
        setPosition((position) => ({
            x: canMove(position.x + 1, position.y) ? position.x + 1 : position.x,
            y: position.y
        }));
        setSide('right');
    }

    const moveUp = () => {
        setPosition((position) => ({
            x: position.x,
            y: canMove(position.x, position.y - 1) ? position.y - 1 : position.y
        }));
        setSide('up')
    }

    const moveDown = () => {
        setPosition((position) => ({
            x: position.x,
            y: canMove(position.x, position.y + 1) ? position.y + 1 : position.y
        }));
        setSide('down')
    }

    const canMove = (x: number, y: number) => {
        if(mapSpots[y] !== undefined && mapSpots[y][x] !== undefined) {
            if(mapSpots[y][x] === 1) {
                return true;
            }
        }
        return false;
    }

    return {
        username,
        x: position.x,
        y: position.y,
        side,
        moveLeft,
        moveRight,
        moveUp,
        moveDown
    }

}