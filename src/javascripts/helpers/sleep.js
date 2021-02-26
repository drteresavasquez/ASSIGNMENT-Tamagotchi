import randomizer from './data/randomizer';

let energy = 50;

const nap = () => {
  const rand = randomizer();
  if (energy >= 100 - rand) {
    energy = 100;
    return energy;
  }
  energy += rand;
  return energy;
};

const deepSlumber = () => {
  const rand = randomizer();
  if (energy >= 100 - rand) {
    energy = 100;
    return energy;
  }
  energy += rand;
  return energy;
};

const getSleepTotal = () => energy;

export { nap, deepSlumber, getSleepTotal };
