import * as React from 'react';
import styled from 'styled-components'; 
import { Value } from './GameState';

const StyledSquare = styled.button`
    width: 100px;
    height: 100px;
    background: #D6C679;
    border: 5px solid #FFF;
    padding: 0;
    font-size: 50px;
    font-weight: bold;
`;

export type SquareProps = {
    value: Value,
    onClick: () => void,
}

export function Square(props: SquareProps) {
    return (
        <StyledSquare onClick={props.onClick}>
            {props.value}
        </StyledSquare>
    );
}
