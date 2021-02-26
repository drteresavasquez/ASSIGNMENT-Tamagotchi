import randomizer from './data/randomizer';

let strength = 100;

const runAway = () => {
  const rand = randomizer();
  if (strength >= 100 - rand) {
    strength = 100;
    return strength;
  }
  strength += rand;
  return strength;
};

const attack = () => {
  const rand = randomizer();
  if (strength <= rand) {
    strength = 0;
    return strength;
  }
  strength -= rand;
  return strength;
};

const getFightTotal = () => strength;

export { runAway, attack, getFightTotal };
