// When Fullness goes down strength should down

import { getEatTotal, unhealthy } from '../eat';
import { attack, getFightTotal } from '../fight';

const weakening = () => {
  const fullness = getEatTotal();
  unhealthy();
  if (fullness > 0) {
    attack();
  }

  document.querySelector('#fight-score').innerHTML = getFightTotal();
};

export default weakening;
