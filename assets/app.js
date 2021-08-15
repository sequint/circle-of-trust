let round1 = true
let round2 = false
let round3 = false
let round4 = false

let characters = [
  {
    charName: 'Steven',
    powers: [
      { name: 'charm', moodPoints: 1 },
      { name: 'programming', moodPoints: 3 },
      { name: 'surfing', moodPoints: 4 },
      { name: 'taking vacations', moodPoints: 6 },
      { name: 'bad-jokes', moodPoints: 2 },
      { name: 'drinking', moodPoints: 6 },
    ],
    stamina: 100,
    money: 50,
    level: 1,
    inCircle: false
  },

  {
    charName: 'Mia',
    powers: [
      { name: 'math', moodPoints: 2 },
      { name: 'guitar', moodPoints: 5 },
      { name: 'baking', moodPoints: 6 },
      { name: 'good-jokes', moodPoints: 7 }
    ],
    weaknesses: ['vacations', 'baked goods', 'hanging out with friends', 'charm', 'money'],
    dislikes: ['bad-jokes', 'misogynists', 'viking-fans'],
    mood: ['happy', 'neutral', 'angry'],
    moodPoints: 21,
    money: 0,
    unlocked: false
  },

  {
    charName: 'Hannah',
    powers: [
      { name: 'adapting', moodPoints: 2 },
      { name: 'sarcasm', moodPoints: 4 },
      { name: 'cooking', moodPoints: 5 },
      { name: 'nursing', moodPoints: 8 }
    ],
    weaknesses: ['zach', 'house-gifts', 'greys-anatomy', 'good-jokes'],
    dislikes: ['bad-jokes', 'misogynists', 'drunkeness'],
    mood: ['happy', 'neutral', 'angry'],
    moodPoints: 21,
    money: 50,
    unlocked: false
  },

  {
    charName: 'Zach',
    powers: [
      { name: 'golfing', moodPoints: 3 },
      { name: 'go-with-the-flow', moodPoints: 4 },
      { name: 'drinking-ipas', moodPoints: 6 },
      { name: 'viking-knowledge', moodPoints: 10 }
    ],
    weaknesses: ['vikings', 'hannah', 'ipa', 'greys-anatomy'],
    dislikes: ['chaos', 'packer-fans'],
    mood: ['happy', 'neutral', 'angry'],
    moodPoints: 21,
    money: 50,
    unlocked: false
  },

  {
    charName: 'Papa Bear',
    powers: [
      { name: 'bad-jokes', moodPoints: 1 },
      { name: 'bike-riding', moodPoints: 4 },
      { name: 'drinking', moodPoints: 8 },
      { name: 'cooking', moodPoints: 10 }
    ],
    weaknesses: ['sleep', 'whiskey', 'the-girls'],
    dislikes: ['american-sports', 'messy-house', 'ipas', 'steven', 'money', 'good-jokes', 'bad-service'],
    mood: ['happy', 'neutral', 'angry'],
    moodPoints: 21,
    money: 200,
    unlocked: false
  },

  {
    charName: 'Mama Bear',
    powers: [
      { name: 'finance', moodPoints: 5 },
      { name: 'herbal-knowledge', moodPoints: 6 },
      { name: 'organization', moodPoints: 8 },
      { name: 'mama-bear-ferocity', moodPoints: 10 }
    ],
    weaknesses: ['left-alone'],
    dislikes: ['american-sports', 'messy-house', 'bad-jokes', 'steven', 'money', 'bad-service', 'loud-music', 'long-hair'],
    mood: ['happy', 'neutral', 'angry'],
    moodPoints: 21,
    money: 300,
    unlocked: false
  }
]

$(window).load(function () {
  $('#instruction-start').modal('show');
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

  if (nextClick > 4) {
    document.getElementById('instruction-start')
  }

  document.getElementById('start-instructions-content').textContent = instructions[nextClick]

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
                <a href="#" class="btn btn-primary remove-tip">Got It</a>
              </div>
            </div>
          </div>
        </div>
      `
      
      document.getElementById('steven-on-board').innerHTML = `
      <img src="./assets/characters/char-steven.jpeg" alt="Steven Character" class="char-in-play rounded-circle say-something">
      `
    }
  }
})