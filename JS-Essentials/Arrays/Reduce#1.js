const students = [
  { name: 'Anna', testGrade: 6.5, scolarship: false },
  { name: 'John', testGrade: 7.5, scolarship: true  },
  { name: 'Maria', testGrade: 8.3, scolarship: false  },
  { name: 'Tito', testGrade: 5.2, scolarship: false  },
  { name: 'Zack', testGrade: 9.0, scolarship: true  },
]

const result = students.map
(a => a.testGrade).reduce(function(acc, actual){
  console.log(acc, actual);
  return acc + actual;
}, 0);

console.log(result);