// query selector variables go here 👇
var posterTitle = document.querySelector('.poster-title');
var posterQuote = document.querySelector('.poster-quote');
var posterImg = document.querySelector('.poster-img');
var myPosterImgURL = document.getElementById('poster-image-url');
var myPosterTitle = document.getElementById('poster-title');
var myPosterQuote = document.getElementById('poster-quote');
var savedPostersGrid = document.querySelector('.saved-posters-grid');
const buttonRandom = document.querySelector('.show-random');
const showMakePoster = document.querySelector('.poster-form');
const buttonMakePoster = document.querySelector('.show-form');
const mainPoster = document.querySelector('.main-poster');
const buttonShowMain = document.querySelector('.show-main');
const buttonShowSaved = document.querySelector('.show-saved');
const savedPosters = document.querySelector('.saved-posters');
const miniPoster = document.querySelector('.mini-poster');
const buttonBackToMain = document.querySelector('.back-to-main');
const buttonSavePoster = document.querySelector('.save-poster');
const buttonShowPoster = document.querySelector('.make-poster');
var makeForm = document.querySelector('form');
const body = document.querySelector('body');

// we've provided you with some data to work with 👇
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];


var mySavedTitles = JSON.parse(localStorage.getItem("titles"));
if (localStorage.getItem('titles') == null) {
  localStorage.setItem('titles', JSON.stringify(titles));
};

var mySavedQuotes = JSON.parse(localStorage.getItem('quotes'));
if (localStorage.getItem('quotes') == null) {
  localStorage.setItem('quotes', JSON.stringify(quotes))
};

var mySavedImages = JSON.parse(localStorage.getItem('images'));
if (localStorage.getItem('images') == null) {
  localStorage.setItem('images', JSON.stringify(images));
};

var mySavedPosters = JSON.parse(localStorage.getItem('items') || "[]");

localStorage.setItem('items', JSON.stringify(mySavedPosters));

  // makePoster(
  //   "https://i.giphy.com/media/5LU6ZcEGBbhVS/giphy.gif",
  //   "Optimism",
  //   "Keep a joyful heart!"
  // )

// event listeners go here 👇
document.addEventListener('DOMContentLoaded', randomPoster());


buttonRandom.addEventListener('click',randomPoster);

buttonMakePoster.addEventListener('click', makePoster);

buttonShowMain.addEventListener('click', showMainPage);

buttonShowSaved.addEventListener('click', displaySavedGrid);

buttonShowSaved.addEventListener('click', showSavedPosters);

buttonBackToMain.addEventListener('click', backToMain);

buttonSavePoster.addEventListener('click', savePoster);
// buttonSavePoster.addEventListener('click', displaySavedGrid);

savedPosters.addEventListener('click', removeSavedItem);

makeForm.addEventListener('submit', showNewPoster);
// functions and event handlers go here 👇
// (we've provided one for you to get you started)!
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function randomPoster() {
  debugger;
  posterImg.src = mySavedImages[getRandomIndex(mySavedImages)];
  posterTitle.innerHTML = mySavedTitles[getRandomIndex(mySavedTitles)];
  posterQuote.innerHTML = mySavedQuotes[getRandomIndex(mySavedQuotes)];
};

function makePoster() {
  showMakePoster.classList.remove('hidden');
  mainPoster.style.display = 'none';
};

function showMainPage() {
  mainPoster.style.display = 'block';
  showMakePoster.classList.add('hidden');
};



function backToMain() {
  savedPosters.classList.add('hidden');
  mainPoster.style.display = 'block';
};


function showNewPoster(e) {
  e.preventDefault();
  debugger;
  posterImg.src = myPosterImgURL.value;
  posterTitle.innerHTML = myPosterTitle.value;
  posterQuote.innerHTML = myPosterQuote.value;
  showMakePoster.classList.add('hidden');
  mainPoster.style.display = 'block';
  makeForm.reset();
};
var myNewPoster;
function savePoster() {
  debugger;
  myNewPoster = new Poster(posterImg.src, posterTitle.innerHTML, posterQuote.innerHTML);
  if (!mySavedImages.includes(myNewPoster['imageURL']))
    mySavedImages.push(myNewPoster['imageURL']);
    localStorage.setItem('images', JSON.stringify(mySavedImages));
  if (!mySavedTitles.includes(myNewPoster['title']))
    mySavedTitles.push(myNewPoster['title']);
    localStorage.setItem('titles', JSON.stringify(mySavedTitles));
  if (!mySavedQuotes.includes(myNewPoster['quote']))
    mySavedQuotes.push(myNewPoster['quote']);
    localStorage.setItem('quotes', JSON.stringify(mySavedQuotes));
  var isIncluded = false;
  for (var i = 0; i < mySavedPosters.length; i++) {
    if(mySavedPosters[i]['imageURL'] == myNewPoster['imageURL'] && mySavedPosters[i]['title'] == myNewPoster['title'] && mySavedPosters[i]['quote'] == myNewPoster['quote']) {
      isIncluded = true;
      break;
    }
  }
  if (!isIncluded) {
    mySavedPosters.push(myNewPoster);
    localStorage.setItem('items', JSON.stringify(mySavedPosters));
  }
};

function displaySavedGrid() {
  debugger;
  savedPostersGrid.innerHTML = '';
  mySavedPosters.forEach(Poster => {
    let newItem = document.createElement('div');
    newItem.classList.add('mini-poster', 'saved-posters', 'saved-poster-grid');
    var newImg = document.createElement('img');
    var newTitle = document.createElement('h2');
    var newQuote = document.createElement('h4');
    newQuote.innerHTML = Poster['quote']
    newTitle.innerHTML = Poster['title']
    newImg.src = Poster['imageURL']
    newItem.appendChild(newImg)
    newItem.appendChild(newTitle)
    newItem.appendChild(newQuote)
    savedPostersGrid.appendChild(newItem)
  })
};

function showSavedPosters() {
  debugger;
  savedPosters.classList.remove('hidden');
  mainPoster.style.display = 'none';

};

function removeSavedItem(e) {
  debugger;
  console.log(e.target);
  if (e.target.matches('div')) {
      var myNewPoster = new Poster(e.target.children[0].src, e.target.children[1].innerHTML, e.target.children[2].innerHTML);
      console.log(myNewPoster);
      for (i = 0; i < mySavedPosters.length; i++) {
        if (myNewPoster.imageURL == mySavedPosters[i].imageURL && myNewPoster.title == mySavedPosters[i].title && myNewPoster.quote == mySavedPosters[i].quote) {
          console.log(`Found it at ${i}`);
          let index = i;
          console.log(index);
          mySavedPosters.splice(index, 1);
          localStorage.setItem('items', JSON.stringify(mySavedPosters));
          break;
        }
      }
      // console.log(e.target.children[0].src)
      // console.log(e.target.children[1].innerHTML)
      // console.log(e.target.children[2].innerHTML)
    e.target.remove(e.target);
  } else {
    return;
  }
};
