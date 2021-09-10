// Thinking in Abstractions
// This problem may feel overwhelming at first, especially if you try to solve
// everything at once. Instead, looking at the desired return value, we know we
// need two pieces of data:

// An array of student grades, in a specific format. We must compute the student
// percentage grade from the student's exam and exercise scores, then combine it
// with the equivalent letter grade. An array of exam summary objects. We
// calculate each exam summary object from all students scores for the
// respective exam. For instance, we determine the second exam summary object
// from each student's second exam. We can use these insights to write out the
// skeleton of our solution:

function generateClassRecordSummary(scores) {
  // an array of score objects, with both exams and exercises
  // arr = [ {}, {}, {} ...]
  let scoreData = Object.keys(scores).map(student => scores[student].scores);
  // each element of array will be:
  // { exams: [...], exercises: [...] }

  // transform the above score objects into an array of arrays for exam scores
  let examData = scoreData.map(score => score.exams);
  // returned array:
  // [ [exam scores for student1],
  //  [exam scores for student2],
  //  [exam scores for student3] ...]

  return {
    // each score object of scoreData array transformed to score string:
    studentGrades: scoreData.map(scoreObj => getStudentScore(scoreObj)),
    exams: getExamSummary(examData),
  };
}

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

// scoreData is array of objects for each student:
//   // each element of array will be:
//   // { exams: [...], exercises: [...] }
// getStudentScore transforms a score object to a string:

function getStudentScore(scoreObj) {
  let examAve = averageScore(scoreObj.exams);
  let sumExercises = scoreObj.exercises.reduce((sum, score) => sum + score);
  let score = Math.round((examAve * EXAM_WEIGHT) + (sumExercises * EXERCISE_WEIGHT));
  return `${score} (${letterGrade(score)})`;
}

// examData is array of arrays
//   // returned array:
//   // [ [exam scores for student1],
//   //  [exam scores for student2],
//   //  [exam scores for student3] ...]
// getExamSummary returns a new array of objects
// each object is constructed from a row of elements from the Examdata subarrays
function getExamSummary(examData) {
  let maxIteration = examData[0].length;
  let examScores = [];

  for (let iteration = 0; iteration < maxIteration; iteration += 1) {
    examScores[iteration] = [];
    examData.forEach(studentScores => {
      examScores[iteration].push(studentScores[iteration]);
    })
  }

  let examSpecs = examScores.map(scores => {
    return { average: averageScore(scores),
             minimum: minimumScore(scores),
             maximum: maximumScore(scores),
    };
  })

  return examSpecs;
}

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