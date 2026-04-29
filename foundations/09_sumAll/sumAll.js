const sumAll = function(a, b) {
    if(Number.isInteger(a) && Number.isInteger(b) && a >= 0 && b >=0) {
        numbers = []
        const start = Math.min(a, b);
        const end = Math.max(a, b);
        for(let i = start; i <= end; i++) {
            numbers.push(i)
        }
        sumOfNumbers = numbers.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);
        return sumOfNumbers
    }
    else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;
