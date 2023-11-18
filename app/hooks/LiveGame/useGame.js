import { useState } from 'react';
const PLAYERS = [
  {
    id: 0,
    name: 'Jacob Jones',
    image: require('../../assets/ellipse-688.png'),
    number: 12,
  },
  {
    id: 1,
    name: 'Guy Hawkins',
    image: require('../../assets/ellipse-774.png'),
    number: 11,
  },
  {
    id: 2,
    name: 'Devon Lane',
    image: require('../../assets/ellipse-7576.png'),
    number: 90,
  },
  {
    id: 3,
    name: 'Albert Flores',
    image: require('../../assets/ellipse-7577.png'),
    number: 5,
  },
  {
    id: 4,
    name: 'Floyd Miles',
    image: require('../../assets/ellipse-7561.png'),
    number: 12,
  },
  {
    id: 5,
    name: 'Omar Bator',
    image: require('../../assets/ellipse-7576.png'),
    number: 8,
  },
  {
    id: 6,
    name: 'Davis Westervelt',
    image: require('../../assets/ellipse-7578.png'),
    number: 6,
  },
  {
    id: 7,
    name: 'Brandon Herwitz',
    image: require('../../assets/image-9.png'),
    number: 25,
  },
  {
    id: 8,
    name: 'Randy Philips',
    image: require('../../assets/ellipse-688.png'),
    number: 13,
  },
  {
    id: 9,
    name: 'Kadin Aminoff',
    image: require('../../assets/image-9.png'),
    number: 17,
  },
  {
    id: 10,
    name: 'Leo Torff',
    image: require('../../assets/ellipse-7561.png'),
    number: 19,
  },
  {
    id: 11,
    name: 'Zaire Calzoni',
    image: require('../../assets/image-9.png'),
    number: 44,
  },
  {
    id: 12,
    name: 'Davis Septimus',
    image: require('../../assets/image-9.png'),
    number: 21,
  },
  {
    id: 13,
    name: 'Jaylon Curtis',
    image: require('../../assets/image-9.png'),
    number: 33,
  },
];
const DEFAULT_LINEUP = [0, 1, 2, 3, 4];
export default function useGame() {
  const [conceded, setConceded] = useState([3]);
  const [players, setPlayers] = useState(
    PLAYERS.map(el => ({
      ...el,
      available: conceded.includes(el.id) ? false : true,
    })),
  );
  const [scores, setScore] = useState([]);
  const [lineup, setLineup] = useState(DEFAULT_LINEUP);
  return [
    players.filter(el => lineup.includes(el.id)),
    players.filter(el => !lineup.includes(el.id)),
    setLineup,
    scores,
    setScore,
  ];
}
