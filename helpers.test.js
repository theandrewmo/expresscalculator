const {mean,
       median,
       mode} = require('./helpers')

describe('#mean', function() {
    it('finds the mean of an array of numbers', function() {
        expect(mean([0,1,2,3,4])).toEqual(2)
    })
    it('finds the mean of an empty array', function() {
        expect(mean([])).toEqual(0)
    })
})

describe('#median', function() {
    it('finds the median of an odd array of numbers', function() {
        expect(median([0,1,2,3,4])).toEqual(2)
    })
    it('finds the median of an even array of numbers', function() {
        expect(median([0,1,2,3,4,5])).toEqual(2.5)
    })
    it('finds the median of an empty array', function() {
        expect(median([])).toEqual(0)
    })
})

describe('#mode', function() {
    it('finds the mode of an array of numbers', function() {
        expect(mode([0,1,2,2,3,4])).toEqual(2)
    })
    it('finds the mode of an empty array', function() {
        expect(mode([])).toEqual(0)
    })
})