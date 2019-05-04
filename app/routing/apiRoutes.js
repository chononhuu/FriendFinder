const friends = require('../data/friends')

const express = require('express')
const router = express.Router()

router.get('/api/friends', (req, res) => {
    res.json(friends)
})

router.post('/api/friends', (req, res) => {
    const userInput = req.body
    const userScores = userInput.surveyAnswers.map(x => parseInt(x))
    let bestScore = 40
    let newFriend
    
    for (let i = 0; i < friends.length; i++) {
        const currentScore = totalDifference(friends[i].scores, userScores)
        if (currentScore <= bestScore) {
            bestScore = currentScore
            newFriend = friends[i]
        }
    }
    res.send(newFriend)
})

function totalDifference(arr1, arr2) {
    arr1Sum = arr1.reduce((acc, cur) => acc + cur)
    arr2Sum = arr2.reduce((acc, cur) => acc + cur)
    return Math.abs(arr1Sum - arr2Sum)
}

module.exports = router