'use strict'
// const obj = {

// }
// obj.name = 'vasya';
// obj.age = 30;
// obj.name = 'lena';
// delete obj.name;
// console.log(obj);

// let num = 6542;
// console.log(num.toString(2));
// let n = 1.006 + Number.EPSILON;
// let numOne = Math.round(n * 100) / 100;
// console.log(numOne);
// console.log(+n.toFixed(3));

// let value = "135.58px";
// console.log(parseFloat(value));

// let v = 58 + "Фрилансер";
// if(isNaN(v)) {
//     console.log('nan');
// }

// console.log(Math.max(10,58,39,-150,0));
// console.log(Math.floor(58.858));

// console.log('hello \'dude\'');

// let text = 'sanyaOK';
// console.log(text.indexOf('O'));

// let t = 'frilancer';
// console.log(t[5]);

// let foo = "frilancer";
// console.log(foo.includes('lan',4));

// let divData = document.querySelector('div');
// console.log(divData.getAttribute('data-say-hi'));

// const list = document.querySelector('ul');
// list.insertAdjacentHTML(
//     'beforeend',
//     '<li>Text</li>'
// );

// const like = document.getElementsByClassName('like');
// console.log(like);

function makeWorker() {
    let name = "Pete";
  
    return function() {
      alert(name);
    };
  }
  
  let name = "John";
  
  // create a function
  let work = makeWorker();
  
  // call it
  work();