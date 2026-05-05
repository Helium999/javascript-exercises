const palindromes = function (str) {
    let cleanStr = str.replaceAll(' ', '')
                        .toLowerCase()
                        .replace(/[\p{P}\p{S}]/gu, "") 
    let reverseStr = cleanStr.split('')
                                .reverse()
                                .join('')
    return cleanStr === reverseStr
};

// Do not edit below this line
module.exports = palindromes;
