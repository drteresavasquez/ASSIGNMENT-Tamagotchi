let full = 100;

const healthy = () => {
  if (full >= 90) {
    full = 100;
    return full;
  }

  full += 10;
  return full;
};

const unhealthy = () => {
  if (full <= 3) {
    full = 0;
    return full;
  }

  full -= 3;
  return full;
};

const getEatTotal = () => full;

export { healthy, unhealthy, getEatTotal };
