// When Strength goes up energy goes up.

import { getFightTotal, runAway } from '../fight';
import { deepSlumber, getSleepTotal } from '../sleep';

const strengthUp = () => {
  const strength = getFightTotal();
  runAway();

  if (strength < 100) {
    deepSlumber();
  }

  document.querySelector('#sleep-score').innerHTML = getSleepTotal();
};

export default strengthUp;
