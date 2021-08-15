let round1 = true
let round2 = false
let round3 = false
let round4 = false


$(window).load(function () {
  $('#instruction-start').modal('show');
});

// Create variable to count which click you are on.
let nextClick = 0

// Create array of the instruction messages.
const instructions = [
  'The circle of trust is complex, it has 3 outer rings surrounding the inner circle.  Each ring is guarded, as well as the inner circle.',
  'Steven must pass the test of each guardian in order to progress into the next ring.',
  "Use Steven's powers to to try winning over each guardian.  If the guardian is won over, they will allow you safe passage and will become your alley.  When a guardian becomes your alley you can access their powers up to 3 times.",
  "But be warned, Steven only has a limited amount of stamina until he disovles into perfect entropy.  Each guardians verbal attacks can damage Steven's stamina.",
  'Are you ready to play?'
]

document.getElementById('decree-next-btn').addEventListener('click', event => {
  event.preventDefault()

  document.getElementById('start-instructions-content').textContent = instructions[nextClick]

  if (nextClick === 4) {
    document.getElementById('close-btn-cont').innerHTML = `
    <button type="button" class="btn btn-secondary hate-steven-btn" id="hate-steven-btn" data-bs-dismiss="modal">I Hate Steven</button>
    `
    document.getElementById('decree-next-btn').textContent = "Let's Do This!"
  }
  else {
    nextClick++
  }

})

// Event listener for hate steven button to throw up a middle finger and close on click.
document.addEventListener('click', event => {
  if (event.target.classList.contains('hate-steven-btn')){
    console.log('Middle finger')

    document.getElementById('middle-finger-pic').innerHTML = `
    <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/96/reversed-hand-with-middle-finger-extended_1f595.png" alt="Middle finger emoji">
    `
    
  }
})