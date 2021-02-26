let fun = 50;

const superFun = () => {
  if (fun >= 50) {
    fun = 100;
    return fun;
  }
  fun += 50;
  return fun;
};

const littleFun = () => {
  if (fun >= 98) {
    fun = 100;
    return fun;
  }
  fun += 2;
  return fun;
};

const getPlayTotal = () => fun;

export { superFun, littleFun, getPlayTotal };
