const NO_ARG_MESSAGE = "Unable to determine the time of year!";
const SEASONS = [
  ["spring", [2, 3, 4]],
  ["summer", [5, 6, 7]],
  ["autumn", [8, 9, 10]],
  ["winter", [11, 0, 1]]
];

function getSeasonByMonth(month) {
  for (let season of SEASONS) {
    if (season[1].includes(month)) {
      return season[0];
    }
  }
  throw new Error(`No season found by month ${month}.`);
}

function hasGetTime(obj) {
  try {
    obj.getTime();
  } catch (e) {
    return false;
  }
  return true;
}

module.exports = function getSeason(date) {
  if (date === undefined) return NO_ARG_MESSAGE;
  if (!date || date.constructor !== Date || !hasGetTime(date)) throw new Error("Invalid input argument.");

  return getSeasonByMonth(date.getMonth());
};