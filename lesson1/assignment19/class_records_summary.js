let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

/*
1. Need to access exams value of each student to generate the exams property in the returned obj
2. Need to calculate each student's grades for the studentGrades property in the returned obj
- input: an object of students that have a scores property with an object value, within the scores object, we have an exams property with a value of a four-itemed array representing the four exam scores.
- output: an object with a studentGrades property (array value) and an exams property (value is array with object elements)
1.
- iterate through students and add each of the exam scores to a exam array
- generate an object with the average, min and max for each exam array
- add objects to return object's exams property
2.
- iterate through students
  - for current student:
  - grab all exam scores and exercise scores
  - calculate the weighted score
  - get the letter grade
  - add string to return objects studentGrades property
*/

const EXAM_WEIGHT = 0.65;
const EXERCISE_WEIGHT = 0.35;

function averageScore(scores) {
  let sum = scores.reduce((sum, score) => sum + score);
  return sum/scores.length;
}

function minimumScore(scores) {
  let min = scores.reduce((min, score) => min = score < min ? score : min);
  return min;
}

function maximumScore(scores) {
  let max = scores.reduce((max, score) => max = score > max ? score : max);
  return max;
}

function letterGrade(score) {
  let letter = '';
  switch (true) {
    case (score > 92):
      letter = 'A';
      break;
    case (score > 84):
      letter = 'B';
      break;
    case (score > 76):
      letter = 'C';
      break;
    case (score > 68):
      letter = 'D';
      break;
    case (score > 59):
      letter = 'E';
      break;
    default:
      letter = 'F';
  }
  return letter;
}

function getGrade(exams, exercises) {
  let examAve = averageScore(exams);
  let sumExercises = exercises.reduce((sum, score) => sum + score);
  let score = Math.round((examAve * EXAM_WEIGHT) + (sumExercises * EXERCISE_WEIGHT));
  return `${score} (${letterGrade(score)})`;
}

function generateClassRecordSummary(scores) {
  let summary = { studentGrades: [], exams: []};
  let exam1 = [];
  let exam2 = [];
  let exam3 = [];
  let exam4 = [];
  let allExams = [];
  allExams.push(exam1, exam2, exam3, exam4);

  // iterate through all student objects to gather info:
  let len = Object.keys(scores).length;
  for (let index = 1; index <= len; index += 1) {
    // add exam scores for each exam into allExams for exam info:
    let examScores = scores['student' + String(index)]['scores']['exams'];
    exam1.push(examScores[0]);
    exam2.push(examScores[1]);
    exam3.push(examScores[2]);
    exam4.push(examScores[3]);

    // get exam and exercise scores for each student to calculate student grade:
    let studentExercises = scores['student' + String(index)]['scores']['exercises'];
    let studentExams = scores['student' + String(index)]['scores']['exams'];
    let studentGrade = getGrade(studentExams, studentExercises);
    // add student grade to summary:
    summary.studentGrades.push(studentGrade);
  }

  // calculate exam info and add to summary:
  summary.exams = allExams.map(scores => {
    return { average: averageScore(scores),
             minimum: minimumScore(scores),
             maximum: maximumScore(scores),
    };
  })

  return summary;
}

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }