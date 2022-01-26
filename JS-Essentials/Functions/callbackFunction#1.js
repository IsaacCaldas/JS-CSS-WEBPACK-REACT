const manufactures = ['Mercedes', 'Audi', 'BMW', 'Ferrari', 'Lamborguini'];

function show(name, index){
  console.log(`${index + 1}. ${name}`);
}

manufactures.forEach(show);
/*
manufactures.forEach(function(manufactures){
  console.log(manufactures);
});*/
manufactures.forEach(manufactures => console.log(manufactures));