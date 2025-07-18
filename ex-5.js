function calculateStudentGrade(score) {
  // Start coding here
  if (score >= 90 && score <= 100) {
    return "A";
  } else if (score >= 80 && score < 90) {
    return "B";
  } else if (score >= 70 && score < 80) {
    return "C";
  } else if (score >= 60 && score < 70) {
    return "D";
  } else {
    return "F";
  }
}

// Example case
let johnGrade = calculateStudentGrade(30);
let lisaGrade = calculateStudentGrade(73);
let janeGrade = calculateStudentGrade(80);
let jjGrade = calculateStudentGrade(60);
let alexGrade = calculateStudentGrade(90);

console.log(`John grade is ${johnGrade}`);//F
console.log(`Lisa grade is ${lisaGrade}`);//C
console.log(`Jane grade is ${janeGrade}`);//B
console.log(`JJ grade is ${jjGrade}`);//D
console.log(`Alex grade is ${alexGrade}`);//A
