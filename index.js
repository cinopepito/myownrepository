// let count = document.getElementById('count-el');
// let count = 5;
// count = count + 1;
// console.log(count);

// let bonusPoint = 50;
// console.log(bonusPoint);

// bonusPoint = bonusPoint + 100;
// console.log(bonusPoint);

// bonusPoint = bonusPoint - 25;
// console.log(bonusPoint);

// bonusPoint = bonusPoint + 70;
// console.log(bonusPoint)
// function increment(){
//     console.log('the button was clicked')
// }
// function countDown(){
//     console.log(5);
//     console.log(4);
//     console.log(3);
//     console.log(2);
//     console.log(1);
//     console.log('fire!!!')
// }
// countDown();
// let lap1=34;
// let lap2=33;
// let lap3=36;
// function sumLap(){
//     console.log(lap1+lap2+lap3)
// }
// sumLap();

// let lapsCompleted = 0;
// function incrementLap(){
//     lapsCompleted = lapsCompleted + 1;
// }
// incrementLap();
// console.log(lapsCompleted);
let countEl = document.getElementById("count-el");
console.log(countEl);

let count = 0;
function increment() {
  count = count + 1;
  countEl.innerText = count;
  save();
}
//
function save() {
  console.log(count);
}

