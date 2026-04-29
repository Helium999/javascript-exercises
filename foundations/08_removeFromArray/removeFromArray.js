//use rest parameters (...arguments) to include multiple
//arguments in one array
const removeFromArray = function(arr, ...otherArguments) {
    filteredArray = arr.filter(n => !otherArguments.includes(n))
    return filteredArray
};

// Do not edit below this line
module.exports = removeFromArray;
