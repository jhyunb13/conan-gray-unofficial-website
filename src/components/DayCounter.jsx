function DayCounter() {
  const oneDay = 24 * 60 * 60 * 1000;
  const releaseDay = new Date(2024, 3, 5);
  const today = new Date();

  const dayCount = Math.round(Math.abs(today - releaseDay) / oneDay);

  return <p>D + {dayCount}</p>;
}

export default DayCounter;
