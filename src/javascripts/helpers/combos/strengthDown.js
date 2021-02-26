// When Strength goes down energy, full, and fun go down

import { getEatTotal, unhealthy } from '../eat';
import { attack, getFightTotal } from '../fight';
import { funDown, getPlayTotal } from '../play';
import { energyDown, getSleepTotal } from '../sleep';

const strengthDown = () => {
  const strength = getFightTotal();
  attack();

  if (strength > 0) {
    energyDown();
    unhealthy();
    funDown();
  }

  document.querySelector('#eat-score').innerHTML = getEatTotal();
  document.querySelector('#play-score').innerHTML = getPlayTotal();
  document.querySelector('#sleep-score').innerHTML = getSleepTotal();
};

export default strengthDown;
