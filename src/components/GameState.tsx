import { useState } from "react";

export type Value = 'X' | 'O' | null;

export type BoardState = Value[];
const createBoardState = () => Array<Value>(9).fill(null);

/**
 * function to calculate the winner of the game
 * @param boardState to identify if the game has been won
 * @returns winning value either X or O
 */
function calculateWinner(boardState: BoardState){
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    /**
     * If each value in the winning combination is X or O return them as the winner
     */
    for (let i = 0; i < winningCombinations.length; i++){
        const [a, b, c] = winningCombinations[i];
        if(boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            return boardState[a];
        }
    }
    return null;
}

export type GameState = {
    history: BoardState[],
    step: number, 
}
/**
 * This function returns the game history, who is next,
 * if there is a winner, and the jump to functionality 
 * to go back to a previous move in the game history
 * @returns the game functionality
 */
export function useGameState() {
    const [gameState, setGameState] = useState<GameState>({
        history: [createBoardState()],
        step: 0,
    });

    const current = gameState.history[gameState.step];
    const xIsNext = (gameState.step % 2) === 0;
    const winner = calculateWinner(current);

    function handleClick(square: number) {
        const history = gameState.history.slice(0, gameState.step + 1);
        const boardState = history[history.length - 1];
        if(calculateWinner(boardState) || boardState[square]) {
            return;
        }
        const newBoardState = boardState.slice();
        newBoardState[square] = (gameState.step %2) === 0 ? 'X' : 'O';
        history.push(newBoardState);
        setGameState({
            history: history,
            step: history.length - 1
        });
    }
    
    function jumpTo(step: number) {
        setGameState({
            history: gameState.history,
            step,
        });
    }

    return {
        gameState,
        current,
        xIsNext,
        winner,
        handleClick,
        jumpTo
    };

}