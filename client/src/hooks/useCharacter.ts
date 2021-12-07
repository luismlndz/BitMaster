import { CharacterSides } from "../components/Character/CharacterSides";
import { useState } from "react"
import { map } from "../maps/maps";

export const useCharacter = () => {
    const [position, setPosition] = useState({x: 7, y: 6});
    const [side, setSide] = useState<CharacterSides>('down');
    const [trigger, setTrigger] = useState<boolean>(false);

    const moveLeft = () => {
        setPosition((position) => ({
            x: checkMove(position.x - 1, position.y) ? position.x - 1 : position.x,
            y: position.y
        }));
        setSide('left');
    }

    const moveRight = () => {
        setPosition((position) => ({
            x: checkMove(position.x + 1, position.y) ? position.x + 1 : position.x,
            y: position.y
        }));
        setSide('right');
    }

    const moveUp = () => {
        setPosition((position) => ({
            x: position.x,
            y: checkMove(position.x, position.y - 1) ? position.y - 1 : position.y
        }));
        setSide('up')
    }

    const moveDown = () => {
        setPosition((position) => ({
            x: position.x,
            y: checkMove(position.x, position.y + 1) ? position.y + 1 : position.y
        }));
        setSide('down')
    }

    const checkMove = (x: number, y: number) => {
        if(map[y] !== undefined && map[y][x] !== undefined) {
            if(map[y][x] === 1) {
                setTrigger(false);
                return true;
            }
            else if(map[y][x] === 2) {
                setTrigger(true);
                return false;
            }
        }
        setTrigger(false);
        return false;
    }

    return {
        trigger,
        x: position.x,
        y: position.y,
        side,
        moveLeft,
        moveRight,
        moveUp,
        moveDown
    }

}