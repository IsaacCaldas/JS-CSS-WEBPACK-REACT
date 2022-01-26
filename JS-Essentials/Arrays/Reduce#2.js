const students = [
  { name: 'Anna', testGrade: 6.5, pass: false },
  { name: 'John', testGrade: 7.5, pass: true  },
  { name: 'Maria', testGrade: 8.3, pass: false  },
  { name: 'Tito', testGrade: 5.2, pass: false  },
  { name: 'Zack', testGrade: 9.0, pass: true  },
]

//All students pass to next year
const allPass = (result, pass) => result && pass;
console.log(students.map(a => a.pass).reduce(allPass));

// did any student pass
const anyPass = (result, pass) => result || pass;
console.log(students.map(a => a.pass).reduce(anyPass)); 