'use strict'

// NOTE: This is a global used only in the controller
var gLastRes = null

$(init)

// $(document).ready(
//   init()
// )

function init() {
  createQuestsTree()
  addEventListeners()
}

function addEventListeners() { 
  $('.btn-primary').click(onStartGuessing)
  $('.btn-success').click({ ans: 'yes' }, onUserResponse)
  $('.btn-danger').click({ ans: 'no' }, onUserResponse)
  $('.btn-warning').click(onAddGuess)
}

function onStartGuessing() {
  // DONE: hide the game-start section
  $('.game-start').hide()
  renderQuest()
  // DONE: show the quest section
  $('.quest').show()
}

function renderQuest() {
  // DONE: select the <h2> inside quest and update
  // its text by the currQuest text
  // console.log("gCurrQuest", gCurrQuest)
  const currQuest = getCurrQuest()
  $('.quest h2').text(currQuest.txt)
}

function onUserResponse(ev) {
  var res = ev.data.ans
  // Check if this node has no children
  if (isChildless(getCurrQuest())) {
    if (res === "yes") {
      // Done: improve UX
      // console.log("Yes, I knew it!")
      $('.quest').hide('slow')
      // * This is a call to a function on the stats controller!
      onAddToFrequencyCount(gCurrQuest.txt)
      handleGameOver(true)
      onRestartGame()
    } else {
      // Executed if answer is no && it's the last child
      handleGameOver(false)
      // Done: hide and show new-quest section
      $('.quest').hide('slow')
      $('.new-quest').show('slow')
      $('.ending-form').show('slow')
    }
  } else {
    // Done: update the lastRes global var
    // gAttempts++
    incrementAttempts()
    gLastRes = res
    moveToNextQuest(res)
    renderQuest()
  }
}

function handleGameOver(isWin) {
  // Calling to this func, injects the modal to the html
  modalContent(isWin)
  // This will pop up the modal
  $('#exampleModal').modal('show')
}

function modalContent(isCorrectGuess) {
  var msg
  const attempts = getAttempts()
  if (isCorrectGuess) {
    msg = `I knew it! And it only took me ${attempts} questions!`
  } else {
    msg = `Sheesh! Another day another guess, huh?<br/>
    Please go ahead and make me smarter!`
  }
  const modalHtml = `
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ${msg}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`
  $('.modal-wrapper').html(modalHtml)
}

function onAddGuess(ev) {
  ev.preventDefault()
  var newGuess = $('#newGuess').val()
  var newQuest = $('#newQuest').val()

  // Done: Get the inputs' values
  // Done: Call the service addGuess
  addGuess(newQuest, newGuess, gLastRes)
  // * This is a call to a function on the stats controller!
  onAddToStats(newQuest, newGuess)
  onRestartGame()
}

function onRestartGame() {
  $('.new-quest').hide()
  $('.game-start').show()
  gLastRes = null
  resetQuestions()
  resetAttempts()
}