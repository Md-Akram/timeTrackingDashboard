let conEl = document.getElementById('container')

function resetDom() {
  conEl.innerHTML = `      <div class="main-card card">
        <div class="card-top">
          <img id="jeremy" src="images/image-jeremy.png" alt="Jeremy" />
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
        <div class="card-bottom">
          <ul>
            <li onclick="dailyElClicked()" id="daily-el">Daily</li>
            <li onclick="weeklyElClicked()" id="weekly-el">Weekly</li>
            <li
              onclick="
            monthlyElClicked()"
              id="monthly-el"
            >
              Monthly
            </li>
          </ul>
        </div>
      </div>`
}

function dailyElClicked() {
  resetDom()
  getDailyData()
}
function weeklyElClicked() {
  resetDom()

  getWeeklyData()
}
function monthlyElClicked() {
  resetDom()
  getMonthlyData()
}

const info = []

fetch('./data.json')
  .then((blob) => blob.json())
  .then((data) => info.push(...data))

function getDailyData() {
  info.forEach((element, index) => {
    const timeFrames = element.timeframes
    conEl.innerHTML += `<div class="card card-${index + 1}">
        <div class="top-card"></div>
        <div class="bottom-card">
          <div class="top-of-bottom">
            <p>${element.title}</p>
            <img src="images/icon-ellipsis.svg" alt="ellipsis" />
          </div>
          <div class="bottom-of-bottom">
            <h1>${timeFrames.daily.current}hrs</h1>
            
            <p>last week - ${timeFrames.daily.previous}hrs</p>
          </div>
        </div>`
  })
}

function getWeeklyData() {
  info.forEach((element, index) => {
    const timeFrames = element.timeframes
    conEl.innerHTML += `<div class="card card-${index + 1}">
        <div class="top-card"></div>
        <div class="bottom-card">
          <div class="top-of-bottom">
            <p>${element.title}</p>
            <img src="images/icon-ellipsis.svg" alt="ellipsis" />
          </div>
          <div class="bottom-of-bottom">
            <h1>${timeFrames.weekly.current}hrs</h1>
            
            <p>last week - ${timeFrames.weekly.previous}hrs</p>
          </div>
        </div>`
  })
}

function getMonthlyData() {
  info.forEach((element, index) => {
    const timeFrames = element.timeframes
    conEl.innerHTML += `<div class="card card-${index + 1}">
        <div class="top-card"></div>
        <div class="bottom-card">
          <div class="top-of-bottom">
            <p>${element.title}</p>
            <img src="images/icon-ellipsis.svg" alt="ellipsis" />
          </div>
          <div class="bottom-of-bottom">
            <h1>${timeFrames.monthly.current}hrs</h1>
            
            <p>last week - ${timeFrames.monthly.previous}hrs</p>
          </div>
        </div>`
  })
}
