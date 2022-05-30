const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];

const marks = [4, 5, 5, 3, 4, 5];
const boys = []
const girls = []

const sortPeople = () => {
    students.forEach(function (person) {
        person.slice(-1) === 'а' || person.slice(-1) === 'я' ? girls.push(person) : boys.push(person)
    })

}
sortPeople()


const pairs = girls.map( (pers, index) => [boys[index],girls[index]]);

console.log(pairs);

const groupsThemes = boys.map((pers, index) => [`${boys[index]} і ${girls[index]}`, themes[index]])

console.log(groupsThemes)

const boysandgirlsMarks = students.map((pers, index) => [students[index], marks[index]])
console.log(boysandgirlsMarks);


const groupsThemesMarks = boys.map((pers, index) => {
    return [
        `${boys[index]} і ${girls[index]}`,
        themes[index],
        marks[Math.floor(Math.random() * marks.length)]
    ]
})

console.log(groupsThemesMarks);








