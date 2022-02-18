// Debugging

function Circle( diameter ){
  this.diameter = diameter;
}

Circle.prototype.getRadius = function(){
  return this.diameter / 2;
}

Circle.prototype.logCircumference = function(){
  const radius = this.getRadius();
  console.log('The circumference is ' + (Math.PI * 2 * radius));
}

Circle.prototype.logArea = function() {
  const radius = this.getRadius();
  console.log('The area of a circle is ' + Math.PI * Math.pow(radius, 2));
}

const circle = new Circle(10);

circle.logCircumference();
circle.logArea();

// Code above has at least 7 bugs. Please find them using the debugger and fix them

// Callbacks
function delay( callback ){
    setTimeout( callback, 2000 );
}

function generateRandom(){
    const randomNumber = Math.round( Math.random() * 10);
    return randomNumber;
}

function logRandom(randomNumber){
  console.log( 'my random number is: ' + randomNumber );
}

delay(logRandom(generateRandom()));
// Use callbacks to get logRandom to log the random number generated in generateRandom


// Pure functions
function square( arr ){
  for( var i = 0; i < arr.length; i++ ){
    arr[ i ] = arr[ i ] * arr[ i ];
  }

  return arr;
}

function pureSquare( arr ){
  let copy = arr.slice();
  for( var i = 0; i < copy.length; i++ ){
    copy[ i ] = copy[ i ] * copy[ i ];
  }

  return copy;
}

let arr = [4, 3, 5];
let squared = square(arr)
console.log(arr, squared);

arr = [4, 3, 5];
let pureSquared = pureSquare(arr); 
console.log(arr, pureSquared);


function addCitrusFruit( arr ){
  var citrus = [ 'lemon', 'orange', 'grapefruit' ];

  citrus.forEach( function( fruit){
    arr.push( fruit );
  })
  return arr;
}

function pureAddCitrusFruit( arr ){
  let copy = arr.slice()
  var citrus = [ 'lemon', 'orange', 'grapefruit' ];

  citrus.forEach( function( fruit){
    copy.push( fruit );
  })
  return copy;
}

let fruits = ['pastèque', 'banane']; 
let more = addCitrusFruit(fruits);
console.log(fruits, more)

fruits = ['pastèque', 'banane'];
let pureMore = pureAddCitrusFruit(fruits);
console.log(fruits, pureMore);


function removeFirstAndLast( arr ){
  const mid = arr.splice( 1, arr.length - 2 );

  return mid;
}

function pureRemoveFirstAndLast( arr ){
  let copy = arr.slice();
  const mid = copy.splice( 1, copy.length - 2 );

  return mid;
}

let nums = [1, 2, 3, 4];
let middle = removeFirstAndLast(nums);
console.log(nums, middle); 

nums = [1, 2, 3, 4];
let pureMiddle = pureRemoveFirstAndLast(nums);
console.log(nums, pureMiddle)

// Rewrite above 3 functions as pure functions. They should perform the same
// operations without mutating the input arguments. Include code to demonstrate
// that the functions you have written perform same task as previous functions
// but without mutations
