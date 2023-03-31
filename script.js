const startButton = document.getElementById('start');
const timeList = document.getElementById('time-list');
const timer = document.getElementById('time');
const meter = document.getElementById('meter');
const board = document.getElementById('board');
const bottomText = document.getElementById('score');
const screens = document.querySelectorAll('.screen');

var time=0;
var score=0;

startButton.addEventListener('click', startButtonProcess);
timeList.addEventListener('click', selectTimeProcess);

function startButtonProcess(event){
event.preventDefault();
console.log(event);
screens[0].classList.add('up'); //смена страниц
};

function selectTimeProcess(event){
    if(event.target.classList.contains('time-btn')){
        time = +event.target.getAttribute('data-time'); // таргет на елементе(записываем атрибут значение data-time)      
       startGame();
    }
};

board.addEventListener('click',(event)=> {
  if(event.target.classList.contains('circle')){
    score++;
    meter.innerHTML = `${score}`;
    event.target.remove();
    createRndomCircle();
  }
});

function startGame(){
    timer.innerHTML = `00:${time}`;
    meter.innerHTML = `${score}`;
    setInterval(changeTime,1000);//таймер, прверка времени
    createRndomCircle();
    screens[1].classList.add('up'); //смена страниц
};

//таймер, прверка времени
function changeTime(){
    if(time==0){
        timer.innerHTML = `00:00`;
        finishGame();
    }else{
    valueTime = --time;
    if(valueTime<10){
        valueTime=`0${valueTime}`;
    }
    timer.innerHTML = `00:${valueTime}`; 
}
};

//создание круга рандомного размера в рандомных координатах 
function createRndomCircle(){
const circle =document.createElement('div');
circle.classList.add('circle');
const {width,height}= board.getBoundingClientRect();// размеры board
const size = getRandomArbitrary(10,60); // рандомное число(размер) для круга
let x = getRandomArbitrary(0,width-size), y = getRandomArbitrary(0,height-size)// top left значения для положение круга

circle.style.width =`${size}px`;
circle.style.height  =`${size}px`;
circle.style.top =`${y}px`;
circle.style.left  =`${x}px`;
board.append(circle);
};

// рандомоне число от min до max 
function getRandomArbitrary(min, max) { 
    return Math.round(Math.floor(Math.random() * (max - min) + min));
  }

//вывод счета и кнопки рестарт
function finishGame(){
   board.innerHTML= `<div id="final-block">
   <h1>Score: ${score}</h1>
   <button id="restart-btn" class="res-btn">Restart Game</button>
 </div>`;
   meter.parentNode.remove();
   timer.parentNode.remove();
   restartGame();
}


function restartGame(){
    document.getElementById('restart-btn').addEventListener('click', ()=>{
        window.location.reload();
    });

}













/*     ****Restart without reloading pages (in progress)****
function restartGame(){
 document.getElementById('restart-btn').addEventListener('click', ()=>{
    time=0;
    score=0;
    screens[1].classList.remove('up');
 });


}


function printLastDiv(){
getElementById(last-screen).innerHTML=`<h3>Осталось <span id="time">00:00</span></h3>
<div class="board" id="board"></div>
<h3 id="score">Score <span id="meter">0</span></h3>`    
};
*/


