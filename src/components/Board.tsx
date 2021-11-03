import * as React from 'react';
import { BoardState } from './GameState';
import {Square, SquareProps} from './Square';
import {Row, Column} from './Layout';

type BoardProps = {
    board: BoardState,
    onClick: (square: number) => void,
}

function Board({board, onClick }: BoardProps){
    const createProps = (square: number): SquareProps => {
        return {
            value: board[square],
            onClick: () => onClick(square),
        }
    }
    return (
        <Column gap={1}>
            <Row gap={0}>
                <Square {...createProps(0)}/>
                <Square {...createProps(1)}/>
                <Square {...createProps(2)}/>
            </Row>
            <Row gap={0}>
                <Square {...createProps(3)}/>
                <Square {...createProps(4)}/>
                <Square {...createProps(5)}/>
            </Row>
            <Row gap={0}>
                <Square {...createProps(6)}/>
                <Square {...createProps(7)}/>
                <Square {...createProps(8)}/>
            </Row>
        </Column>
    );
}

export default Board;