import { getPlayTotal, superFun } from '../play';
import { deepSlumber, getSleepTotal } from '../sleep';
import { getEatTotal } from '../eat';
import { getFightTotal } from '../fight';
import foodComa from '../combos/foodComa';
import strengthUp from '../combos/strengthUp';
import weakening from '../combos/weakness';
import strengthDown from '../combos/strengthDown';

const quadrantData = [
  {
    title: 'Play',
    btns: [
      { type: 'increment', text: 'Play Time!', cb: superFun },
    ],
    getTotal: getPlayTotal
  },
  {
    title: 'Eat',
    btns: [
      { type: 'increment', text: 'Healthy', cb: foodComa },
      { type: 'decrement', text: 'Treat', cb: weakening },
    ],
    getTotal: getEatTotal
  },
  {
    title: 'Sleep',
    btns: [
      { type: 'increment', text: 'Take a Nap', cb: deepSlumber },
    ],
    getTotal: getSleepTotal
  },
  {
    title: 'Fight',
    btns: [
      { type: 'increment', text: 'Run', cb: strengthUp },
      { type: 'decrement', text: 'Attack', cb: strengthDown },
    ],
    getTotal: getFightTotal
  },
];

export default quadrantData;
