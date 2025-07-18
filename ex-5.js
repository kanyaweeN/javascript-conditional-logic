function calculateStudentGrade(score) {
  // Start coding here
  let grade;
  if (score < 60) {
    grade = "F";
  } else if (score < 70) {
    grade = "D";
  } else if (score < 80) {
    grade = "C";
  } else if (score < 90) {
    grade = "B";
  } else {
    grade = "A";
  }
  return grade;
}

// Example case
let johnGrade = calculateStudentGrade(30);
let lisaGrade = calculateStudentGrade(73);
let janeGrade = calculateStudentGrade(80);
let jjGrade = calculateStudentGrade(60);
let alexGrade = calculateStudentGrade(90);

console.log(`John grade is ${johnGrade}`);
console.log(`Lisa grade is ${lisaGrade}`);
console.log(`Jane grade is ${janeGrade}`);
console.log(`JJ grade is ${jjGrade}`);
console.log(`Alex grade is ${alexGrade}`);
