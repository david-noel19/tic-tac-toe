import * as React from 'react';
import { BoardState } from './GameState';

type LogProps = {
    history: BoardState[],
    jumpTo: (step: number) => void,
}

/**
 * Log function to logs the history of each move
 * @param props who's turn it is and what step number
 * @returns who's turn it is to move
 */
function Log(props: LogProps) {
    return (
        <ol>
            {props.history.map((_, index) => {
                return(
                    <li key={index}>
                        <button onClick={() => props.jumpTo(index)}>
                            Go to {index === 0 ? 'start' : `move # ${index}`}
                        </button>
                    </li>
                )
            })}
            <li><button> Go to move</button></li>
        </ol>
    );
}

export default Log;