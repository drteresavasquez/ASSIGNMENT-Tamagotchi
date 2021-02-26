import death from '../../components/death';
import { getEatTotal } from '../eat';
import { getFightTotal } from '../fight';
import { getPlayTotal } from '../play';
import { getSleepTotal } from '../sleep';

const getAverage = () => {
  const progress = (getEatTotal() + getFightTotal() + getPlayTotal() + getSleepTotal()) / 4;

  const color = () => {
    let selectedColor = 'success';
    if (progress >= 70) {
      selectedColor = 'success';
    } else if (progress >= 50) {
      selectedColor = 'warning';
    } else {
      selectedColor = 'danger';
    }
    return selectedColor;
  };

  document.querySelector('#progress').innerHTML = `
  <div class="progress">
    <div class="progress-bar bg-${color()}" role="progressbar" style="width: ${progress}%" aria-valuenow="${progress}" aria-valuemin="0" aria-valuemax="100">${progress}%</div>
  </div>`;

  if (progress <= 0) {
    death();
  }
};

export default getAverage;
