function People(){
  this.age = 0;

  const self = this;    
  setInterval(function(){
    self.age++;
    console.log(self.age);
  }/*.bind(this)*/, 1000);
}

new People;

/* with arrow Function

function People(){
  this.age = 0;

  setInterval(() => {
    this.age++;
    console.log(this.age);
  }, 1000);
}

new People;
*/