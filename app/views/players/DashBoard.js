import React from 'react';
import CoachDashboard from './CoachProfile';
import PlayerDashboard from './PlayerDashboard';
export default function DashBoard() {
  const isCoach = false;
  return isCoach ? <CoachDashboard /> : <PlayerDashboard />;
}
