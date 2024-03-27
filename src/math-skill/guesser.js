let counter = 0;
let sum = document.querySelector(".value");
let crt = document.querySelector("#gen");
sum.style.display = "none";
function generateNumbers() {
  let randomNum = Math.floor(Math.random() * 20) + 1;
  let mandomNum = Math.floor(Math.random() * 20) + 34;
  sum.innerHTML = `${randomNum} + ${mandomNum}`;
  return randomNum + mandomNum;
}

let b = generateNumbers();


let timer;
function startTimer() {
  timer = setTimeout(function () {
    let qba = document.querySelector("#rst");
let restart = `<div class="container flex justify-center items-center flex-col"><h1>Need a Calculator?</h1><button class="bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700" id="restart">Do A Plus Before Buzz</button></div>`;    qba.innerHTML = restart;
    counter = 0;
    let reload = document.querySelector("#restart");
    reload.addEventListener("click", function () {
      location.reload();
    });
  }, 10000);
}

let btn = document.querySelector("#conf");
btn.style.display = "none";
btn.addEventListener("click", function () {
  clearTimeout(timer);
  startTimer();

  let answer = document.querySelector("#ans");
  let userAnswer = parseInt(answer.value);
  if (!isNaN(userAnswer) && userAnswer === b) {
    console.log("You won");
    answer.value = "";
    counter++;
      let q = `<h3>Score: ${counter}</h3>`;
    let show = document.querySelector("#score");
    show.innerHTML = q;
    if (counter === 10) {
      let qba = document.querySelector("#rst");
      let restart = `<div class="container flex justify-center items-center flex-col"><h1>Luck favors the beginner</h1><button class="bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700" id="restart">Restart</button></div>`;
      qba.innerHTML = restart;
      counter = 0;
      let reload = document.querySelector("#restart");
      reload.addEventListener("click", function () {
        location.reload();
      });
    } else {
      b = generateNumbers();
    }
  } else {
    let qba = document.querySelector("#rst");
    let restart = `<div class="container flex justify-center items-center flex-col"><h1>Lol Poor Kid </h1><button class="bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700" id="restart">Retry</button></div>`;
    qba.innerHTML = restart;
    counter = 0;
    let reload = document.querySelector("#restart");
    reload.addEventListener("click", function () {
      location.reload();
    });
  }
});

let start = `<div class="container flex flex-col items-center"><button id="startgame" class="bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700">Start Game</button><div class="bg-yellow-200 border border-yellow-400 text-yellow-800 px-4 py-2 rounded-md shadow-md">
Tere Paas 10 Seconds Hoge har Answers Guess Karne Ke liye
</div><div class="bg-green-200 border border-red-400 text-yellow-800 px-4 py-2 rounded-md shadow-md">You'll Have 10 Seconds To guess The Answer
</div></div>
`;
let qba = document.querySelector("#rst");
qba.innerHTML = start;
let beta = document.querySelector("#startgame");

beta.addEventListener("click", function () {
  beta.style.display = "none";
  sum.style.display = "block";
  btn.style.display = "block";
  startTimer();
});
