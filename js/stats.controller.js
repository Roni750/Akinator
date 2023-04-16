'use strict'

var gId = 1

$(onInit)

function onInit() {
    renderNewGuesses()
}

function onAddToStats(newQuest, newGuess) {
    addToStats(newQuest, newGuess)
}

function renderNewGuesses() {
    const stats = getStats()
    if (gIsNewGame) return
    else {
        var strHtml = `
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="question">Question</th>
                    <th scope="answer">Answer</th>
                </tr>
            </thead>
            <tbody>`
        strHtml += stats.map(guess => `
                <tr>
                    <th scope="row">${gId++}</th>
                    <td>${guess.question}</td>
                    <td>${guess.name}</td>
                </tr>`).join("")
        $('.data-wrapper').html(strHtml)
    }
}

function onAddToFrequencyCount(guess) {
    addToFrequencyCount(guess)
    renderFrequencies(guess)
}

function renderFrequencies(guess) {
    var freqCount = getFrequencyCount(guess)
    console.log("freqCount", freqCount)
}