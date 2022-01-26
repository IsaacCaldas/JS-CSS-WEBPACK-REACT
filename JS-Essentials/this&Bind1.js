const people = {
  salutation: 'Good Morning!',
  say(){
    console.log(this.salutation);
  }
}

people.say();
const say = people.say;
say() // conflict between paradigms: procedural & OO

const sayOfPeople = people.say.bind(people);
sayOfPeople();