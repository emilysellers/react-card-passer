import React from 'react';
import { useGameContext } from '../context/GameContext.js';
import Card from './Card';

// export default function ExecutePassButton({
//   passCard,
//   setFrom,
//   from,
//   to,
//   selectedCard,
//   setSelectedCard,
export default function ExecutePassButton({ passCard }) {
  const { selectedCard, from, to, setSelectedCard, setFrom } = useGameContext();
  return (
    <div className="execute-button" onClick={() => passCard(selectedCard)}>
      Pass <Card card={selectedCard} setSelectedCard={setSelectedCard} setFrom={setFrom} /> from{' '}
      {from} to {to}
    </div>
  );
}
