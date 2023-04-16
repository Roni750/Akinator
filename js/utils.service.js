'use strict'

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
}

function validateInput(txt, priority) {
    // If either text or priority is empty, return false
    var isEmpty = (!txt || !priority ) ? true : false
    return isEmpty
}

function tempModal(msg) {
    const elSideModal = document.querySelector('.user-msg')
    elSideModal.innerText = msg
    elSideModal.classList.add('open')
    setTimeout(() => {
        elSideModal.classList.remove('open')
    }, 3000)
}

function makeLorem(wordCount = 50) {
    const words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn']
    var txt = ''
    while (wordCount > 0) {
        wordCount--
        txt += words[Math.floor(Math.random() * words.length)] + ' '
    }
    return txt
}

function getId() {
    var id = Date.now() + Math.random() + ''
    id = id.slice(15)
    return parseInt(id)
}