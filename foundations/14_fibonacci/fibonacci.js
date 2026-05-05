const fibonacci = function(index) {
    index = Number(index)
    let sequence = [0, 1, 1]
    
    if(index < 0) {
        return "OOPS"
    }
    else {
        for(i = 0; i < index - 2; i++) {
        const nextNum = sequence[sequence.length-2] + sequence[sequence.length-1]
    sequence.push(nextNum)
    }
    return sequence[index]
    }
};

// Do not edit below this line
module.exports = fibonacci;
