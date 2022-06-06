//1 рандомні числа
const getRandomArray = (length, min, max) => {
    return Array.from({ length },() => Math.floor( Math.random() * (max-min+1))+ min )
}
console.log(getRandomArray(10,10,1));

//2 мода

function getModa(...arr){
    return  arr.filter (value => Number.isInteger(value)).sort((a,b) =>
        arr.filter(move => move===a).length - arr.filter(move => move===b).length).pop();
}
console.log(getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

//3 середнє арифметичне


const getAvarage = (...arr) => {
    const newArr = arr.filter(value => Number.isInteger(value) )
    let res = 0;
    for (let i = 0; i < newArr.length; i++){
         res += newArr[i]
       
    }
    return res / newArr.length
}
console.log(getAvarage(2,2,2,2.5,2.5,2,3));



//4 медіана

function median(...arr) {
    
    const newArr = arr.filter(value => Number.isInteger(value))
    const { length } = newArr
    
    newArr.sort((a, b) => a - b)
    
    
    if (length % 2 === 0) {
        return (newArr[length / 2 - 1] + 0.5);
    }
    return newArr[(length - 1) / 2 ]

}
console.log(median(1,2,3,4));


//5 фільтр парних чисел

const filterEvenNumbers = (...arr) => {
    return newArr = arr.filter(value => value % 2 !== 0)
}
console.log(filterEvenNumbers(1,2,3,4,5,6));

// 6 числа більші нуля

function countPositiveByFive(...arr) {
    const  newArr = arr.filter((value, index) => value > 0)
     return newArr.length
}
console.log(countPositiveByFive(1, -2, 3, -4, -5, 6));

//7

const getDividedByFive = (...arr) => {
    const newArr = arr.filter(value => value % 5 === 0)

    return newArr
}
console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

//8 bad words
const replaceBadWords = (string) => {
  let badWords = ['fuck', 'shit']
   badWords.forEach( el => string = string.split(el).join('****'))
return string
}
console.log(replaceBadWords('Are you fucking   kidding me,bullshit?'));


//9 кожне слова на скади по 3 буви

function devideByThree(str) {
    
    let arr = [];
  while(str !== '') {
    arr.push(str.toLowerCase().substring(0, 3));
    str = str.substring(3).split(' ').join('')
  }
  return arr;
}
console.log(devideByThree('Commander'));

