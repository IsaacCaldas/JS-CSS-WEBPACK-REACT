function sayAfter(sec, phrase){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(phrase);
    }, sec * 1000);
  });
}

sayAfter(3, 'Hello World')
  .then(phrase => phrase.concat('!!!'))
  .then(otherPhrase => console.log(otherPhrase))
  .catch(e => console.log(e));