import randomizer from './data/randomizer';

let full = 100;

const healthy = () => {
  const rand = randomizer();
  if (full >= (100 - rand)) {
    full = 100;
    return full;
  }

  full += rand;
  return full;
};

const unhealthy = () => {
  const rand = randomizer();
  if (full <= rand) {
    full = 0;
    return full;
  }

  full -= rand;
  return full;
};

const getEatTotal = () => full;

export { healthy, unhealthy, getEatTotal };
