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
    <button type="button" class="btn btn-primary hate-steven-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
      I Hate Steven
    </button>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content middle-finger">
          <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/96/reversed-hand-with-middle-finger-extended_1f595.png" alt="Middle finger emoji">
        </div>
      </div>
    </div>
    `
    document.getElementById('decree-next-btn').textContent = "Let's Do This!"
  }
  else {
    nextClick++
  }

})