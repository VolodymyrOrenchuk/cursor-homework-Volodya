import { firstLetterToUpperCase } from "./03-functions/03-functions.js";
console.log(firstLetterToUpperCase("vOlodya")); 
import { getAvarage } from "./05-array-methods/05-array-method.js";
console.log(getAvarage(1,2,3,4,5,6,60,100));
import { calculateWordLetters } from "./06-objects/06-objects.js";
console.log(calculateWordLetters('test'));
import { mySalary,ukraine } from "./07-functional-programming/07-functional-programming.js";
mySalary(ukraine)

import { Student } from "./08-es6-prototypes/08-es6-prototypes.js";
const ivan = new Student(
  "Національний університет Львівська Політехніка",
  4,
  "Іван Васильович",
  [5, 4, 4, 5]
);
console.log(ivan.getInfo()); 
import "./img/webpack.png"
import "./14-server-star-wars-api/style.css"


import { createIdGenerator } from "./15-symbols-generator-iterator/main.js";
const idGenerator2 = createIdGenerator();
console.log(idGenerator2.next().value);
console.log(idGenerator2.next('up').value);