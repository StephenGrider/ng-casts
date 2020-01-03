import { map } from 'lodash';

const strings = map([1, 2, 3], value => {
  return `Value is: ${value}`;
});

console.log(strings);
