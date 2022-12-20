const ratio = require("../ratio/index");
const factoial = require("../factorial/index");

function ratioAndFactorial(num1, num2, num3) {
  let ratioOfTwo = ratio(num1, num2);
  let FactorialOfnum = factoial(num3);

  return {
    ratio: ratioOfTwo,
    factorial: FactorialOfnum,
  };
}

module.exports = ratioAndFactorial;
