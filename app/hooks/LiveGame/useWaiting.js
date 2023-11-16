import React, { useState } from 'react';
export default function useWaiting() {
  const [isVisible, setVisible] = useState(false);
  const [nextQuater, setNextQuater] = useState(2);
  const [remainingTime, setRemainingTime] = useState(142);
  return [isVisible, setVisible, remainingTime, nextQuater];
}
