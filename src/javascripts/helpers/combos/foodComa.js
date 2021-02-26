// When Fullness goes up energy should go down (FOOD COMA)

import { getEatTotal, healthy } from '../eat';
import { funDown, getPlayTotal } from '../play';
import { energyDown, getSleepTotal } from '../sleep';

const foodComa = () => {
  const fullness = getEatTotal();
  healthy();
  if (fullness < 100) {
    energyDown();
    funDown();
  }

  document.querySelector('#sleep-score').innerHTML = getSleepTotal();
  document.querySelector('#play-score').innerHTML = getPlayTotal();
};

export default foodComa;
