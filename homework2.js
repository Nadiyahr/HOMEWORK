//------HOMEWORK 2------//

//------Task 1-------//


let x = 1;
let y = 2;

let res1 = '' + x + y;
console.log(res1);
console.log(typeof res1);

let res2 = !!x + '' + y;
console.log(res2);
console.log(typeof res2);

let res3 = !!x;
console.log(res3);
console.log(typeof res3);

let res4 = x + NaN;
console.log(res4);
console.log(typeof res4);


//------Task 2------//


let num = prompt('Enter a number here.', 'Enter here a number');

if ( +num > 0 && num % 2 === 0 && +num % 7 === 0 ) {
  console.log('This number is a multiple of 7, positive and even.');
}
else if ( +num > 0 && num % 2 === 0 ) {
  console.log('This number is positive and even, but not a multiple of 7.');
}
else if ( +num > 0 ) {
  console.log('This number is positive, but not even and not a multiple of 7.');
}
else {
  console.log('Not a number..');
}


//------Task 3------//


const arr = [];

arr[0] = 3;
arr[1] = 'Ciao';
arr[2] = true;
arr[3] = null;

document.write(`${arr.length} `)

arr[4] = prompt('Enter a value here', '');

document.write(`${arr[4]} `);

arr.shift();

document.write(`${arr} `)


//------Task 4------//


const cities = ['Rome','Lviv','Warsaw'];

document.write(`<br>${cities.join(' * ')}<br>`);


//------Task 5------//



let isAdult1 = +prompt('How old are you?', 'Enter here your age');

if ( isAdult1 < 10 ) {
  document.write('You are still too yong.<br>');
}
else if ( isAdult1 >= 10 && isAdult1 < 18 ) {
  document.write('You are not yet an adult.<br>');
}
else if ( isAdult1 >= 18 && isAdult1 < 100 ) {
  document.write('You have reached the age of majority.<br>');
}
else {
  document.write('Incorrect data.<br>');
}


//------Task 6------//


let a = +prompt('Enter the value of the first side of the triangle', 'Side A');
let b = +prompt('Enter the value of the second side of the triangle', 'Side B');
let c = +prompt('Enter the value of the third side of the triangle', 'Side C');
console.log(isNaN(a));
 if (a === 0 || isNaN(a) || b === 0 || isNaN(b) || c === 0 || isNaN(c)) {
   console.log('Incorect data');
 }
 else {

   let p = (a + b + c) / 2;
   let s = Math.sqrt( p * (p - a) * (p - b) * (p - c) );

   console.log(`The area of this triangle is ${s.toFixed(3)}.`);

//    let i, c1, c2;

//    if ( a > b && a > c ) {
//      i = a;
//     c1 = b;
//     c2 = c;
//    }
//    else if ( b > a && b > c) {
//      i = b;
//      c1 = c;
//      c2 = a;
//    }
//    else {
//      i = c;
//      c1 = a;
//      c2 = b;
//    }

//    i ** 2 === c1 ** 2 + c2 ** 2
//     ? console.log('It\'s a right triangle')
//      : console.log('It is not a right triangle');


   if (a*a === b*b + c*c || b*b === a*a + c*c || c*c === a*a + b*b) {
      console.log('It\'s a right triangle');
    } else {
      console.log('It is not a right triangle');
     }

 }


//------Task 7------//


let now = new Date();
let getHour = now.getHours();

switch (true) {
    case getHour >= 5 && getHour < 11:
      document.write('Доброго ранку.');
      break;

    case getHour >= 11 && getHour < 17:
      document.write('Доброго дня.');
      break;

      case getHour >= 17 && getHour < 23:
      document.write('Доброго вечора.');
      break;

      case getHour >= 23 && getHour < 5:
      document.write('Доброї ночі.');
}

if (getHour >= 5 && getHour < 11) {
  document.write('Доброго ранку.');
}
else if (getHour >= 11 && getHour < 17) {
  document.write('Доброго дня.');
}
else if (getHour >= 17 && grtHour < 23) {
  document.write('Доброго вечора.');
}
else {
  document.write('Доброї ночі.');
}
