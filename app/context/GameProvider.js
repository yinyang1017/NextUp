import React, { createContext } from 'react';
import useGame from '../hooks/LiveGame/useGame';

export const GameContext = createContext({
  activePlayers: null,
  substitutePlayers: null,
  setLineup: null,
  scores: null,
  setScore: null,
});
export function GameProvider({ children }) {
  const [activePlayers, substitutePlayers, setLineup, scores, setScore] =
    useGame();
  return (
    <GameContext.Provider
      value={{ activePlayers, substitutePlayers, setLineup, scores, setScore }}>
      {children}
    </GameContext.Provider>
  );
}
