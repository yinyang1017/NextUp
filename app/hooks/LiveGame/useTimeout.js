import React, { useState } from 'react';
export default function useTimeout() {
  const [isTimeout, showTimeout] = useState(false);
  const [remainingTime, setRemainingTime] = useState(80);
  return [isTimeout, showTimeout, remainingTime];
}
