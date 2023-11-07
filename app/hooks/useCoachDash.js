import { useState } from 'react';

const _teams = [
  {
    id: 0,
    name: 'Rotary AAU 17',
    img: require('../assets/frame8.png'),
  },
  {
    id: 1,
    name: "O'Dea HS",
    img: require('../assets/frame9.png'),
  },
//   {
//     id: 2,
//     name: "O'Dea HS",
//     img: require('../assets/frame9.png'),
//   },
];
export default function useCoachDash({ userId }) {
  // team is current index of the selected Team in the array [teams]
  const [teamIndex, selectTeam] = useState(0);
  const [teams, setTeams] = useState(_teams);
  return [teamIndex, selectTeam, teams];
}
