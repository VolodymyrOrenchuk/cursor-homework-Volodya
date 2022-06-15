class Student {
  isDismissed = false;

  constructor(university, course, fullName, marks) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks = marks;
  }

  getInfo() {
    return `Студент ${this.course}-го курсу ${this.university}, ${this.fullName}`;
  }
  get getMarks() {
    if (this.isDismissed) {
      return null;
    }
    return this.marks;
  }
  set pushMarks(mark) {
    if (this.isDismissed) return;
    this.marks.push(mark);
  }
  getAvarageMark() {
    if (this.marks.length === 0) {
      return 0;
    }
    return this.marks.reduce((acc, cur) => acc + cur, 0) / this.marks.length;
  }

  dismiss() {
    this.isDismissed = true;
    console.log(`${this.fullName} виключено`);
  }
  recover() {
    this.isDismissed = false;
    console.log(`${this.fullName} поновлено`);
  }
}

const volodya = new Student(
  "Націаональний університет Львівська Політехніка",
  4,
  "Оренчук Володимир",
  [5, 4, 4, 5]
);
console.log(volodya.getInfo());
console.log(volodya.getMarks);
volodya.pushMarks = 5;
console.log(volodya.getMarks);
console.log(volodya.getAvarageMark());
volodya.dismiss();
console.log((volodya.pushMarks = 6));
volodya.recover();
console.log((volodya.pushMarks = 6));

console.log(volodya.getMarks);

class BudgetStudent extends Student {
  constructor(university, course, fullName, marks) {
    super(university, course, fullName, marks);
    setInterval(() => {
      this.getScholarship()
    }, 30000);
  }
  getScholarship() {
    console.log(this.getAvarageMark());
    if (this.getAvarageMark() >= 4) {
      console.log(`${this.fullName} отримав 1400грн. стипендії`);
    } else {
      console.log(`Нажаль стипендії не буде`);
    }
    if (this.isDismissed) {
      console.log(`${this.fullName} виключено,тому стипендії не буде`);
    }
  }
}
const budgetstud = new BudgetStudent(
  "Львіська політехніка",
  3,
  "Оренчук Володимир",
  [5, 1, 4, 5]
);
// console.log(budgetstud);
// console.log(volodya.getAvarageMark());

// budgetstud.getScholarship();
// console.log(budgetstud.getAvarageMark());
// getScholarship()
// budgetstud.getScholarship();
// budgetstud.dismiss();
// budgetstud.getScholarship();
// // console.log(budgetstud);
// budgetstud.recover()
// budgetstud.getScholarship()
