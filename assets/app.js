let round1 = true
let round2 = false
let round3 = false
let round4 = false

const characters = {
  steven: {
    stamina: 100,
    deductPoints() {
      this.stamina -= Math.floor(Math.random() * 75)
    }
  },
  mia: {
    browniePoints: 0,
    questions: [
      {
        question: 'How many licks does it actually take to get to the center of a tootsie pop?',
        answers: ['Three', 'Just the right amount', 'Ask the owl', 'Three and a half', 'Exactly'],
        correctAnswer: 'Exactly',
        pointsToAdd: 3
      },
      {
        question: 'The FA (Football Association) founded on which year?',
        answers: ['1945', '1863', '1890', '1901', '1852'],
        correctAnswer: '1863'
      },
      {
        question: 'What is the area between the curve y=sun(x) and the x-axis from x=0 to x=pie?',
        answers: ['Two', 'One', 'Pie', 'Pie/Two', 'Nice try, how’s your Pollack-says-what index?'],
        correctAnswer: 'Two'
      },
      {
        question: 'What famous Tech mogal went to Northeastern before dropping out to start his company?',
        answers: ['Mark Zuckerburg', 'Jeff Howley', 'Shawn Fanning', 'Bill Gates', 'Elon Musk'],
        correctAnswer: 'Shawn Fanning'
      },
    ]
  }
}

$(window).load(function () {
  $('#game-modal').modal('show');
});

// Create variable to count which click you are on.
let nextClick = 0

//****************************************** Start of Game Instructions **************************************************//

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

  // if (nextClick > 4) {
  //   document.getElementById('game-modal')
  // }

  document.getElementById('game-modal-content').textContent = instructions[nextClick]

  if (nextClick === 4) {
    document.getElementById('hate-steven-btn-cont').innerHTML =`
    <button type="button" class="btn btn-secondary hate-steven-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
    
    document.getElementById('close-btn-cont').innerHTML = `
    <button type="button" class="btn btn-secondary decree-next-btn" id="close-btn" data-bs-dismiss="modal">Ready!</button>
    `
    let nextRemoved = document.getElementById('next-btn-cont')
    nextRemoved.remove()
  }

})

document.addEventListener('click', event => {
  // Place Steven character on screen afer ready is clicked for 6th time.
  if(event.target.classList.contains('decree-next-btn')) {
    nextClick++
    console.log(nextClick)
    if (nextClick === 6) {
      document.getElementById('game-message').innerHTML = `
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body tip">
                <h5 class="card-title">Tip!</h5>
                <p class="card-text">When a character has a green border, click on them to see what they have to say.</p>
                <a href="#" class="btn btn-primary remove-tip" id="remove-tip">Got It</a>
              </div>
            </div>
          </div>
        </div>
      `
      document.getElementById('steven-on-board').innerHTML = `
      <img src="./assets/characters/char-steven.jpeg" alt="Steven Character" class="char-in-play steven-position-round-1 rounded-circle say-something" id="steven-call-round-one">
      `
    }

    // Place Mia on screen on 7th click and queen message about next character on timeout.
    if (nextClick === 7) {
      document.getElementById('steven-on-board').innerHTML = `
      <img src="./assets/characters/char-steven.jpeg" alt="Steven Character" class="char-in-play steven-position-round-1 rounded-circle" id="steven-call-round-one">
      `
      document.getElementById('position-1').innerHTML = `
          <img src="./assets/characters/char-mia.png" alt="Mia Character" class="char-in-play mia-position rounded-circle" id="mia-appear">
      `
      setTimeout(() => {
        document.getElementById('game-prompt-header').innerHTML = `
        <img src="./assets/characters/char-lena.png" alt="Queen Character" class="rounded-circle"
        width="100" height="100">
        <h5 class="modal-title text-center pop-title" id="pop-title">Queenly Message!</h5>
        `
        document.getElementById('game-modal-content').textContent = "A Mia has appeared as Guardian of the first ring!  You must convince her that you are worthy to enter the outer ring."
        document.getElementById('close-btn').textContent = "Got It!"
        $('#game-modal').modal('show')
      }, 750)
    }
    
    if (nextClick === 8) {
      document.getElementById('position-1').innerHTML = `
          <img src="./assets/characters/char-mia.png" alt="Mia Character" class="char-in-play mia-position rounded-circle say-something mia-start" id="mia-start">
      `
    }

    if (nextClick === 9) {
      document.getElementById('dual').innerHTML = `
      <div class="modal" id="dual-modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content game-prompt-window">
            <div class="modal-header game-prompt-header" id="game-prompt-header">
              <img src="./assets/characters/char-lena.png" alt="Queen Character" class="rounded-circle"
                width="100" height="100">
                <h5 class="modal-title text-center pop-title" id="pop-title">The Queen's Decree!</h5>
              </div>
              <div class="modal-body" id="game-modal-body">
                <p id="game-modal-content">Queen Lena has issued an official decree.  In order to put a ring on it, one Steven Quintana must first survive the crucible of The Circle of Trust.</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      `
      $('#dual-modal').modal('show')
      
    }
  }
})

// When Steven is clicked show first prompt.
document.addEventListener('click', event => {
  if (event.target.classList.contains('say-something')) {
    document.getElementById('steven-on-board').innerHTML = `
      <img src="./assets/characters/char-steven.jpeg" alt="Steven Character" class="char-in-play rounded-circle" id="steven-call-round-one">
    `
    document.getElementById('game-message').innerHTML = ''

    document.getElementById('game-prompt-header').innerHTML = `
    <img src="./assets/characters/char-steven.jpeg" alt="Steven Character" class="rounded-circle"
    width="100" height="100">
    <h5 class="modal-title text-center pop-title" id="pop-title">Thanks For Your Help!</h5>
    `

    document.getElementById('game-modal-content').textContent = "Glad you are onboard.  It will take a team to get into the inner circle! Let's see who the first Guardian is."

    let hateBtn = document.getElementById('hate-steven-btn-cont')
    hateBtn.remove()

    document.getElementById('close-btn').textContent = "Let's See"

    $('#game-modal').modal('show')
  }
  
})

document.addEventListener('click', event => {
  if (event.target.classList.contains('remove-tip')) {
    document.getElementById('game-message').innerHTML = ''
  }
})


// Discussion
document.addEventListener('click', event => {
  charIndex = 1
  if (event.target.classList.contains('mia-start')) {
    document.getElementById('position-1').innerHTML = `
          <img src="./assets/characters/char-mia.png" alt="Mia Character" class="char-in-play mia-position rounded-circle">
      `
    document.getElementById('game-prompt-header').innerHTML = `
        <img src="./assets/characters/char-mia.png" alt="Mia Character" class="rounded-circle"
        width="100" height="100">
        <h5 class="modal-title text-center pop-title" id="pop-title">You sure about this buddy?</h5>
        `

    document.getElementById('game-modal-content').textContent = `Don't say I didn't warn ya!  Convince me you're worthy!`
    document.getElementById('close-btn').textContent = "Respond"
    $('#game-modal').modal('show')

  }
})

