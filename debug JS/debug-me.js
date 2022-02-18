function Bike( colour ){
  this.colour = colour;
}

Bike.prototype.describe = function(){
  console.log('My bike is ' + this.colour );
}

Bike.prototype.calculateNumberOfGears = function(frontGears, rearGears){
  let numberOfGears = frontGears * rearGears;

  return numberOfGears;
}

const myBike = new Bike( 'yellow' );

myBike.describe();

const numberOfGears = myBike.calculateNumberOfGears(3, 7);
console.log('The bike has ' + numberOfGears + ' gears');
