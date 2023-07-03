const express = require('express');
const app = express();

const ExpressError = require('./expressError');
const { convertAndValidate, mean, median, mode } = require('./helpers');


app.get('/mean', (req, res) => {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    }
    const queryStringArray = req.query.nums.split(',')
    
    const nums = convertAndValidate(queryStringArray)
    if (nums instanceof Error) {
        throw new ExpressError(nums.message, 400)
    }
    let result = {
        operation: 'mean',
        result: mean(nums)
    }

    res.send(result)
})

app.get('/median', (req, res) => {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    }
    const queryStringArray = req.query.nums.split(',')
    
    const nums = convertAndValidate(queryStringArray)
    if (nums instanceof Error) {
        throw new ExpressError(nums.message, 400)
    }
    let result = {
        operation: 'median',
        result: median(nums)
    }

    res.send(result)
})


app.get('/mode', (req, res) => {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    }
    const queryStringArray = req.query.nums.split(',')
    
    const nums = convertAndValidate(queryStringArray)
    if (nums instanceof Error) {
        throw new ExpressError(nums.message, 400)
    }
    let result = {
        operation: 'mode',
        result: mode(nums)
    }

    res.send(result)
})


app.listen(3000, () => {
    console.log('App on port 3000')
})



