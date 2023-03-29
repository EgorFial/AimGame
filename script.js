const startButton = document.getElementById('start');
const timeList = document.getElementById('time-list');
const timer = document.getElementById('time');
const board = document.getElementById('board');
var time=0;
var score=0;

const screens = document.querySelectorAll('.screen');



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
    event.target.remove();
    createRndomCircle();
  }

})






function startGame(){
    timer.innerHTML = `00:${time}`;
    setInterval(changeTime,1000);//таймер, прверка времени
    createRndomCircle();

    screens[1].classList.add('up'); //смена страниц

}


function changeTime(){//таймер, прверка времени
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
    
}



function createRndomCircle(){//создание круга рандомного размера в рандомных координатах 
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
}




function finishGame(){
   board.innerHTML= `<h1> Cчёт: ${score}</h1>`;
   timer.parentNode.remove();
}







function getRandomArbitrary(min, max) { // рандомоне число от min до max 
    return Math.round(Math.floor(Math.random() * (max - min) + min));
  }