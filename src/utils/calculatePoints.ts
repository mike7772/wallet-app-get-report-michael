export function calculateDailyPoints(date: Date): string | number {
  const month = date.getMonth();

  // Determine season start
  let seasonDay = 0;
  if (month >= 2 && month < 5) {
    // Spring (March-May)
    const springStart = new Date(date.getFullYear(), 2, 1);
    seasonDay = Math.floor((date.getTime() - springStart.getTime()) / (1000 * 60 * 60 * 24)) + 1;
  } else if (month >= 5 && month < 8) {
    // Summer (June-August)
    const summerStart = new Date(date.getFullYear(), 5, 1);
    seasonDay = Math.floor((date.getTime() - summerStart.getTime()) / (1000 * 60 * 60 * 24)) + 1;
  } else if (month >= 8 && month < 11) {
    // Fall (September-November)
    const fallStart = new Date(date.getFullYear(), 8, 1);
    seasonDay = Math.floor((date.getTime() - fallStart.getTime()) / (1000 * 60 * 60 * 24)) + 1;
  } else {
    // Winter (December-February)
    const winterStart = new Date(date.getFullYear(), 11, 1);
    seasonDay = Math.floor((date.getTime() - winterStart.getTime()) / (1000 * 60 * 60 * 24)) + 1;
  }

  let points = 0;
  if (seasonDay === 1) {
    points = 2;
  } else if (seasonDay === 2) {
    points = 3;
  } else if (seasonDay >= 3) {
    const prevDay = new Date(date);
    prevDay.setDate(date.getDate() - 1);
    const prevPoints = calculateDailyPoints(prevDay);
    const prevPointsNum = typeof prevPoints === 'string' ? parseFloat(prevPoints) * 1000 : prevPoints;
    points = Math.round(prevPointsNum * 1.0 + prevPointsNum * 0.6);
  }

  // Round to nearest K and display as "XK"
  if (points >= 1000) {
    const k = points / 1000;
    return `${Math.round(k)}K`;
  }
  return points;
}

