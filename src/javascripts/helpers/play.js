import randomizer from './data/randomizer';

let fun = 50;

const superFun = () => {
  const rand = randomizer();
  if (fun >= 100 - rand) {
    fun = 100;
    return fun;
  }
  fun += rand;
  return fun;
};

const funDown = () => {
  const rand = randomizer();
  if (fun <= rand) {
    fun = 0;
    return fun;
  }
  fun -= rand;
  return fun;
};

const getPlayTotal = () => fun;

export {
  superFun, funDown, getPlayTotal
};
