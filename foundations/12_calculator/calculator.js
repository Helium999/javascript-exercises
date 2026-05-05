const add = function(a, b) {
  return a+b
};

const subtract = function(a, b) {
	return a-b
};

const sum = function(arr) {
	const total = arr.reduce(((acc, num) => acc + num), 0)
  return total
};

const multiply = function(arr) {
  const multiplytotal = arr.reduce(((acc, num) => acc * num), 1)
  return multiplytotal
};

const power = function(base, exponent) {
	return base ** exponent
};

const factorial = function(number) {
	let factorialresult = 1
  for(let i = 1 ; i <= number ; i++) {
    factorialresult = factorialresult * i
  }
  return factorialresult
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
