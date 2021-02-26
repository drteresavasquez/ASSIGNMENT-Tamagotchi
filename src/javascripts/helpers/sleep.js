let energy = 50;

const nap = () => {
  if (energy >= 50) {
    energy = 100;
    return energy;
  }
  energy += 50;
  return energy;
};

const deepSlumber = () => {
  if (energy >= 40) {
    energy = 100;
    return energy;
  }
  energy += 60;
  return energy;
};

const getSleepTotal = () => energy;

export { nap, deepSlumber, getSleepTotal };
