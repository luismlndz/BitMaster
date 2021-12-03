import * as C from './CharacterStyling';
import { CharacterSides } from './CharacterSides';

type Props = {
    x: number;
    y: number;
    side: CharacterSides;
}

export const Character = ({x, y, side}: Props) => {
    const size = 60;
    const sides = {
        down: 0,
        left: -60,
        right: -120,
        up: -180
    }

    return (
        <C.character
            size = {size}
            left = {x * size}
            top = {y * size}
            sidePosition = {sides[side] ?? 0}
        />
    );
}