'use strict'
const KEY = 'questionsDB'

var gQuestsTree
var gCurrQuest
var gPrevQuest = null
var gAttempts = 0

function createQuestsTree() {
  gQuestsTree = loadFromStorage(KEY)

  if (!gQuestsTree) {
    gQuestsTree = createQuest('Male?')
    gQuestsTree.yes = createQuest('Gandhi')
    gQuestsTree.no = createQuest('Rita')
  }
  gCurrQuest = gQuestsTree
  gPrevQuest = null
}

function resetQuestions() {
  gCurrQuest = gQuestsTree
}

function createQuest(txt) {
  return {
    txt,
    yes: null,
    no: null,
  }
}

function isChildless(node) {
  return node.yes === null && node.no === null
}

function moveToNextQuest(res) {
  // Done: update the gPrevQuest, gCurrQuest global vars
  gPrevQuest = gCurrQuest
  gCurrQuest = gCurrQuest[res]
  // if(res === 'yes') gCurrQuest = gCurrQuest.yes
  // console.log('gCurrQuest', gCurrQuest)
}

function addGuess(newQuestTxt, newGuessTxt, lastRes) {
  // Done: Create and Connect the 2 Quests to the quetsions tree

  const newQuest = createQuest(newQuestTxt)
  newQuest.yes = createQuest(newGuessTxt)
  newQuest.no = gCurrQuest

  // Initial - 
  // Male?
  // yes - Gandy
  // no - null

  // To add - 

  // Male?
  // yes - Relative?
  // no - Gandy?

  gPrevQuest[lastRes] = newQuest
  _saveToStorage(gQuestsTree)
}

function getCurrQuest() {
  return gCurrQuest
}

function incrementAttempts() {
  gAttempts++
}

function getAttempts() {
  return gAttempts
}

function resetAttempts() {
  gAttempts = 0
}

function _saveToStorage(value) {
  saveToStorage(KEY, value)
}