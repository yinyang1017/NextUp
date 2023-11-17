import { useState } from 'react';
const PLAYERS = [
  {
    id: 0,
    name: 'Jacob Jones',
    image: require('../../assets/ellipse-688.png'),
  },
  {
    id: 1,
    name: 'Guy Hawkins',
    image: require('../../assets/ellipse-774.png'),
  },
  {
    id: 2,
    name: 'Devon Lane',
    image: require('../../assets/ellipse-7576.png'),
  },
  {
    id: 3,
    name: 'Albert Flores',
    image: require('../../assets/ellipse-7577.png'),
  },
  {
    id: 4,
    name: 'Floyd Miles',
    image: require('../../assets/ellipse-7561.png'),
  },
  {
    id: 5,
    name: 'Omar Bator',
    image: require('../../assets/ellipse-7576.png'),
  },
  {
    id: 6,
    name: 'Davis Westervelt',
    image: require('../../assets/ellipse-7578.png'),
  },
  {
    id: 7,
    name: 'Brandon Herwitz',
    image: require('../../assets/image-9.png'),
  },
  {
    id: 8,
    name: 'Randy Philips',
    image: require('../../assets/ellipse-688.png'),
  },
  {
    id: 9,
    name: 'Kadin Aminoff',
    image: require('../../assets/image-9.png'),
  },
  {
    id: 10,
    name: 'Leo Torff',
    image: require('../../assets/ellipse-7561.png'),
  },
  {
    id: 11,
    name: 'Zaire Calzoni',
    image: require('../../assets/image-9.png'),
  },
  {
    id: 12,
    name: 'Davis Septimus',
    image: require('../../assets/image-9.png'),
  },
  {
    id: 13,
    name: 'Jaylon Curtis',
    image: require('../../assets/image-9.png'),
  },
];
const DEFAULT_LINEUP = {
  active: [0, 1, 2, 3, 4],
  substitute: [5, 6, 7, 8, 9, 10, 11, 12, 13],
};
export default function useGame() {
  const [players, setPlayers] = useState(
    PLAYERS.map(el => ({ ...el, timeout: 0 })),
  );
  const [lineup, setLineup] = useState(DEFAULT_LINEUP);
  return [
    players.filter(el => lineup.active.includes(el.id)),
    players.filter(el => lineup.substitute.includes(el.id)),
  ];
}
