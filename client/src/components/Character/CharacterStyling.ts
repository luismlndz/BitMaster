import styled from 'styled-components';

export const character = styled.div<{size: number, left: number, top: number, sidePosition: number}> `
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    position: absolute;
    left: ${props => props.left}px;
    top: ${props => props.top}px;
    background-image: url('/assets/character.png');
    background-size: cover;
    background-position: 0px ${props => props.sidePosition}px;
`