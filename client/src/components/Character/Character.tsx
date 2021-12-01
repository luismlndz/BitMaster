import * as C from './CharacterStyling';
import { CharacterSides } from './CharacterSides';

type Props = {
    x: number;
    y: number;
    side: CharacterSides;
    name: string;
}

export const Character = ({x, y, side, name}: Props) => {
    const size = 60;
    const sides = {
        down: 0,
        left: -60,
        right: -120,
        up: -180
    }

    return (
        <C.character className= 'character'
            size = {size}
            left = {x * size}
            top = {y * size}
            sidePosition = {sides[side] ?? 0}
        >
        </C.character>
    );
}