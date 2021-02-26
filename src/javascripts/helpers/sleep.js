import randomizer from './data/randomizer';

let energy = 50;

const deepSlumber = () => {
  const rand = randomizer();
  if (energy >= 100 - rand) {
    energy = 100;
    return energy;
  }
  energy += rand;
  return energy;
};

const energyDown = () => {
  const rand = randomizer();
  if (energy <= rand) {
    energy = 0;
    return energy;
  }
  energy -= rand;
  return energy;
};

const getSleepTotal = () => energy;

export {
  deepSlumber, energyDown, getSleepTotal
};
