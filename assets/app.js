let round1 = true
let round2 = false
let round3 = false
let round4 = false

let charSteven = {
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
}

let charMia = {
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
}

let charHannah = {
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
}

let charZach = {
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
}

let charPapaBear = {
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
}

let charMamaBear = {
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