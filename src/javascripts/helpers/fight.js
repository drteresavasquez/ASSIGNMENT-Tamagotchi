let strength = 100;

const runAway = () => {
  if (strength >= 99) {
    strength = 100;
    return strength;
  }
  strength += 1;
  return strength;
};

const attack = () => {
  if (strength <= 10) {
    strength = 0;
    return strength;
  }
  strength -= 10;
  return strength;
};

const getFightTotal = () => strength;

export { runAway, attack, getFightTotal };
