import React, { useContext } from 'react';
import VSCard1 from '../../../components/games/LiveGame/VSCard1';
import VSCard2 from '../../../components/games/LiveGame/VSCard2';
import { LiveGameContext, GAME } from '.';
export default function GameHeader() {
  const status = useContext(LiveGameContext);
  return status === GAME.BEFORE ? (
    <VSCard1 title="MPL D-League Aug 09,13:03" />
  ) : (
    <VSCard2 title="MPL D-League Aug 09,13:03" />
  );
}
