export const randomInt = toExclude => {
  return Math.floor(Math.random() * toExclude);
};

export const randomIntArray = (size, bound) => {
  return Array(size)
    .fill(null)
    .map(() => randomInt(bound));
};

export const findMostFrequent = array => {
  const count = array.reduce((acc, value) => ({ ...acc, [value]: (acc[value] ?? 0) + 1 }), {});
  const values = Object.keys(count);
  return values.reduce((mostFrequent, value) => (count[mostFrequent] < count[value] ? value : mostFrequent), values[0]);
};
