import * as React from 'react';
import styled from 'styled-components'; 
import { Value } from './GameState';

const StyledSquare = styled.button`
    width: 34px;
    height: 34px;
    background: #fff;
    border: 1px solid #999;
    padding: 0;
    font-size: 24px;
    font-weight: bold;
`;

type SquareProps = {
    value: Value,
    onClick: () => void,
}

function Square(props: SquareProps) {
    return (
        <StyledSquare onClick={props.onClick}>
            {props.value}
        </StyledSquare>
    );
}

export default Square;