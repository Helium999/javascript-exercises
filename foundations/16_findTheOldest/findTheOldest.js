const findTheOldest = function(arr) {
    const currentYear = new Date().getFullYear()
    let sorted = arr.sort((a,b) => ((b.yearOfDeath ?? currentYear) - b.yearOfBirth) - ((a.yearOfDeath ?? currentYear) - a.yearOfBirth))
    return sorted[0]
};

// Do not edit below this line
module.exports = findTheOldest;
