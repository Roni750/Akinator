'use strict'
var statsDB = 'statsDB'
var gIsNewGame
var gGuessId
var gNewGuesses = []
var gAllGuesses = []

function getStats() {
    gGuessId = 1
    if(!loadFromStorage(statsDB)) {
        console.log("Local storage doesn't exist")
        gIsNewGame = true
        return null
    }
    var newGuessues = loadFromStorage(statsDB)
    return newGuessues
}

function addToStats(quest, guess) {
    var insertGuess = addNewGuess(quest, guess)
    gNewGuesses = loadFromStorage(statsDB)
    if (!gNewGuesses || gNewGuesses.length === 0) {
        gNewGuesses = [insertGuess]
    } else {
        gNewGuesses.unshift(insertGuess)
    }
    saveToStorage(statsDB, gNewGuesses)
    console.log("gNewGuesses", gNewGuesses)
}

function addNewGuess(quest, guess) {
    var newGuess
    return newGuess = {
        name: guess,
        question: quest,
    }
}

function addToFrequencyCount(guess) {
    gAllGuesses.push(guess)
    console.log("guess was", guess)
}

function getFrequencyCount(value) {
    var guessesFrequency = gAllGuesses.splice()
    return guessesFrequency.reduce((acc, value) => {
        acc[value] = ++acc[value] || 1
        return acc
    }, {})
}