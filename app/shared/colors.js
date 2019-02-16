const colors = [
  '#f44336',
  '#e91e63',
  '#9c27b0',
  '#673ab7',
  '#3f51b5',
  '#2196f3',
  '#4fc3f7',
  '#4dd0e1',
  '#009688',
  '#4caf50',
  '#8bc34a',
  '#cddc39',
  '#ffeb3b',
  '#ffc107',
  '#ff9800',
  '#ff5722',
  '#795548',
];

const pickRandomProperty = obj => {
  let result;
  let count = 0;
  for (const prop in obj) if (Math.random() < 1 / ++count) result = prop;
  return result;
};

export const getRandomColor = () => {
  return colors[pickRandomProperty(colors)];
};

export default {
  colors,
};
