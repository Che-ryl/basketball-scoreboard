const homeScoreEl = document.getElementById("home-score")
const guestScoreEl = document.getElementById("guest-score")
let homescore = 0
let guestscore = 0

const homeoneBtn = document.getElementById("home1btn")
const hometwoBtn = document.getElementById("home2btn")
const homethreeBtn = document.getElementById("home3btn")

const guestoneBtn = document.getElementById("guest1btn")
const guesttwoBtn = document.getElementById("guest2btn")
const guestthreeBtn = document.getElementById("guest3btn")

const displayEl = document.getElementById("display")

let totalTime = 40 * 60 * 1000 // converting 40mins to milliseconds
let isRunning = false
let timeLeft = totalTime
let timer = null
let lastUpdate = 0

homeoneBtn.addEventListener("click", function() {
    homescore += 1
    homeScoreEl.textContent = homescore
})
hometwoBtn.addEventListener("click", function() {
    homescore += 2
    homeScoreEl.textContent = homescore
})
homethreeBtn.addEventListener("click", function() {
    homescore += 3
    homeScoreEl.textContent = homescore
})

guestoneBtn.addEventListener("click", function() {
    guestscore += 1
    guestScoreEl.textContent = guestscore
})
guesttwoBtn.addEventListener("click", function() {
    guestscore += 2
    guestScoreEl.textContent = guestscore
})
guestthreeBtn.addEventListener("click", function() {
    guestscore += 3
    guestScoreEl.textContent = guestscore
})

function resetScore() {
    homescore = 0
    homeScoreEl.textContent = homescore
    guestscore = 0
    guestScoreEl.textContent = guestscore
}

function start() {
    if (!isRunning) {
        lastUpdate = Date.now()
        timer = setInterval(update, 10)
        isRunning = true
    }
}

function stop() {
    clearInterval(timer)
    isRunning = false
}

function resetTimer() {
    stop()
    timeLeft = totalTime
    updateDisplay(timeLeft)
}

function update() {
    const now = Date.now()
    const delta = now - lastUpdate
    lastUpdate = now

    timeLeft -= delta

    if (timeLeft <= 0) {
        timeLeft = 0
        stop()
    }
    updateDisplay(timeLeft)
}

function updateDisplay(ms) {


    let minutes = Math.floor(ms / 60000)
    let seconds = Math.floor((ms % 60000) / 1000)
    let milliseconds = Math.floor((ms % 1000) /10 )

    displayEl.textContent =
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`
}