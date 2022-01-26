function Car(maxSpeed = 200, delta = 5){
  // private attribute
  let velNow = 0

  // private method example
  const wheel = function(){
    console.log('The wheel its running');
  }

  // public method
  this.speed = function() {
    if(velNow + delta <= maxSpeed){
      velNow += delta;
    } else {
      velNow = maxSpeed;
    }
  }

  // public method
  this.getVelNow = function() {
    return velNow;
  }
}

const corolla = new Car;
corolla.speed();
console.log(corolla.getVelNow());

const ferrari = new Car(350, 20);
ferrari.speed();
console.log(ferrari.getVelNow());