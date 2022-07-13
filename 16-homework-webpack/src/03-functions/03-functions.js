//1 найбільше значення
const getMaxDigit = function (number) {
  number = number.toString();

  let current = number[0];
  for (let i = 0; i < number.length; i++) {
    if (current > number[i]) {
      continue;
    } else {
      current = number[i];
    }
  }
  return current;
};

// //2 підведення до степеня
const powFunc = function (a, b) {
  let num = a;
  for (let i = 1; i < b; i++) {
    num = num * a;
  }

  return num;
};

//3Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);

export const firstLetterToUpperCase = function (string) {
  string = string.toLowerCase();
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// 4 Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805

const salery = function (number) {
  return number - (19.5 * number) / 100;
};

//5 Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5

const getRandomNumber = function (n, m) {
  return Math.floor(Math.random() * (m - n)) + n;
};

//6Створити функцію, яка рахує скільки разів певна буква повторюється в слові. Приклад: countLetter("а", "Асталавіста") -> 4

const countLetter = function (letter, string) {
  string = string.toLowerCase();
  return string.split(letter).length - 1;
};

// 7Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку. Приклад: convertCurrency("100$") -> 2500 грн. або convertCurrency("2500UAH") -> 100$

const convertCurrency = function (currency) {
  if (currency.includes("$")) {
    return (
      currency
        .split("")
        .splice(0, currency.length - 1)
        .join("") *
        32 +
      "грн"
    );
  } else if (currency.includes("uan")) {
    return (
      currency
        .split("")
        .splice(0, currency.length - 3)
        .join("") /
        32 +
      "$"
    );
  } else {
    return `incorrect value`;
  }
};

// 8 Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.

const getRandomPassword = function (n = 8) {
  let randomNumber = Math.floor(Math.random(1000000) * Math.pow(10, n));

  return randomNumber;
};

// //9Створіть функцію, яка видаляє всі букви з речення. Приклад: deleteLetters('a', "blablabla") -> "blblbl"

const deleteLetters = function (letter, string) {
  return string.replaceAll(letter, "");
};

// 10 чи є слово паліндромо
const funcPalindrom = function (string) {
  return string == string.split("").reverse().join("");
};

// document.writeln(`Функція №1(Найбільше число): ${getMaxDigit(9678)}`)
// document.writeln(`Функція №2(підведення до степеня): ${powFunc(2, 3)}`)
// document.writeln(`Функція №3(перша літера велика): ${firstLetterToUpperCase('vovA')}`)
// document.writeln(`Функція №4(податок): ${salery(1000)}`)
// document.writeln(`Функція №5(випадкове ціле число): ${getRandomNumber(1, 10)}`)
// document.writeln(`Функція №6(скільки раз повторюється буква в слові): ${countLetter('а', 'Асталавіста')}`)
// document.writeln(`Функція №7(конвертація валюти): ${convertCurrency('100$')}`)
// document.writeln(`Функція №8(випадковий пароль): ${getRandomPassword()}`)
// document.writeln(`Функція №9(видалення всіх букв з речення): ${deleteLetters('а', 'мамаріка')}`)
// document.writeln(`Функція №10(паліндром): ${funcPalindrom('ovo')}`)
