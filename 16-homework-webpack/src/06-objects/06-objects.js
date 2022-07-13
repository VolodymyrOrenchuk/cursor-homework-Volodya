const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
  }];

 
//1
const getSubjects = (students) => {
let keys = Object.keys(students.subjects)
    keys = keys.map(el => el.charAt(0).toUpperCase() + el.substring(1).toLowerCase().split('_').join(' '))
return keys
}
// console.log(getSubjects(students[0]));

//2
const getAverageMark = (students) => {

const [a, b, c] = Object.values(students.subjects)
  let combinedArr = [...a, ...b, ...c]
let sum = 0;
for (let number of combinedArr) {
  sum += number;
  }
const average = (sum / combinedArr.length).toFixed(2);
return average
}
// console.log(getAverageMark(students[0])); 
// // 3
const getStudentInfo = (student) => {
  let userInfo = {
    name: student.name,
      course: student.course,
        averageMark: getAverageMark(student)
  }
  return userInfo
}
// console.log(getStudentInfo(students[0]));

// //4
const getStudentsName = (student) => {
  student = students.map(studik => studik.name).sort()
  return student

}
// console.log(getStudentsName(students));

//5
const getBestStudent = students => {
  return students.map(studik => getStudentInfo(studik)).sort((a, b) => b.averageMark - a.averageMark).shift().name
 
}
// console.log(getBestStudent(students))

//6
export const calculateWordLetters = (string) => {
  return string.split('').reduce((total, letter) => {
    if (total[letter]) {
      total[letter]++
    } else 
      total[letter] = 1;
      return total;
    }, {});
  }
// console.log(calculateWordLetters('тест'));
