export const propsToArray = <T>(obj: { [index: string]: T } | { [index: number]: T }) => {
  return Object.keys(obj).map((prop) => obj[prop]);
};

const Colors: { [key: string]: string } = {
  '1': 'red',
  '2': 'blue',
  '3': 'green',
};

export const getColorValue = (colorKey: string): string => {
  return Colors[colorKey];
};

export const getColorKeys = () => Object.keys(Colors);
