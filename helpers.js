function convertAndValidate(queryStringArray) {
    const result = [];
    for (let i = 0; i < queryStringArray.length; i++) {
        let convertedToNum = Number(queryStringArray[i])
        if (Number.isNaN(convertedToNum)) {
            return new Error(`The value of '${queryStringArray[i]}' at index ${i} is not a valid number`)
        }
        result.push(convertedToNum);
    }
    return result
}

function mean (nums) {
    if(!nums.length) return 0
    const sum = nums.reduce((acc,val)=> acc + val, 0)
    return sum / nums.length
}

function median (nums) {
    if(!nums.length) return 0
    nums.sort((a,b) => a - b)
    const middleInd = Math.floor(nums.length / 2)
    let median
    if (nums.length % 2 === 0) {
        median = (nums[middleInd-1] + nums[middleInd]) / 2;
    }
    else {
        median = nums[middleInd];
    }
    return median
}

function mode (nums) {
    if(!nums.length) return 0
    const freqCounter = {}
    for (let num of nums) {
        if (!freqCounter[num]) {
            freqCounter[num] = 1
        }
        else freqCounter[num] ++
    }
    let max = 0
    let mostFrequent
    for (let key in freqCounter) {
        if (freqCounter[key] > max) {
            mostFrequent = key;
            max = freqCounter[key];
        }
    }
    return +mostFrequent
}

module.exports = {
    convertAndValidate,
    mean,
    median,
    mode
}
