import React, { createContext } from 'react';
import useGame from '../hooks/LiveGame/useGame';

export const GameContext = createContext(null);
export function GameProvider({ children }) {
  const [activePlayers, substitutePlayers] = useGame();
  return (
    <GameContext.Provider value={{ activePlayers, substitutePlayers }}>
      {children}
    </GameContext.Provider>
  );
}
