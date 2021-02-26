import { getPlayTotal, littleFun, superFun } from '../play';
import { deepSlumber, getSleepTotal, nap } from '../sleep';
import { getEatTotal, healthy, unhealthy } from '../eat';
import { runAway, attack, getFightTotal } from '../fight';

const quadrantData = [
  {
    title: 'Play',
    btns: [
      { type: 'increment-1', text: 'One', cb: superFun },
      { type: 'increment-2', text: 'Two', cb: littleFun },
    ],
    getTotal: getPlayTotal
  },
  {
    title: 'Eat',
    btns: [
      { type: 'increment', text: 'One', cb: healthy },
      { type: 'decrement', text: 'Two', cb: unhealthy },
    ],
    getTotal: getEatTotal
  },
  {
    title: 'Sleep',
    btns: [
      { type: 'increment-1', text: 'One', cb: nap },
      { type: 'increment-2', text: 'Two', cb: deepSlumber },
    ],
    getTotal: getSleepTotal
  },
  {
    title: 'Fight',
    btns: [
      { type: 'increment', text: 'One', cb: runAway },
      { type: 'decrement', text: 'Two', cb: attack },
    ],
    getTotal: getFightTotal
  },
];

export default quadrantData;
