export function convertNumberToTime(time) {
  const hr = Math.floor(time / 3600);
  const min = Math.floor((time - hr * 3600) / 60);
  const sec = time - hr * 3600 - min * 60;
  console.log(hr, min, sec);
  return (
    (hr > 0 ? `${hr}:` : '') +
    (min > 0 ? `${min >= 10 ? min : '0' + min}:` : '00:') +
    (sec > 0 ? `${sec >= 10 ? sec : '0' + sec}` : '00')
  );
}
