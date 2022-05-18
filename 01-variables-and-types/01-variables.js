const apple = 15.678;
const banana = 123.965;
const tomatoes = 90.2345;

const maxPrice = Math.max(apple, banana, tomatoes);
console.log(`Максимальна ціна: ${maxPrice}`);

const minPrice = Math.min(apple,banana,tomatoes);
console.log(`Мінамальна ціна: ${minPrice}`);

// // Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
const sumFruits = apple + banana + tomatoes;
console.log(`Варстість всіх товарів: ${sumFruits}`);

// // Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. Округлення використовувати в МЕНЬШУ сторону.
const minimalRoundPrice = Math.floor(apple) + Math.floor(banana) + Math.floor(tomatoes);
console.log(`Округлена в меншу сторону вартість: ${minimalRoundPrice}`)

// // Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)
const roundPriceHundred = (Math.round(minimalRoundPrice / 100) * 100)
console.log(`Сума товарів заокруглена до сотень: ${roundPriceHundred}`);

// // Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
if (minimalRoundPrice % 2 == 0) {
  console.log(true); 
} else {
  console.log(false); 
}

// // Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
const rest = (500 - sumFruits);
console.log(`Решта: ${rest}`);

// // Виведіть середнє значення цін, округлене до другого знаку після коми
const averageSum = (sumFruits / 3).toFixed(2);
console.log(`Середнє значення цін: ${averageSum}`);

//  Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random).

const randomDiscount = Math.floor(Math.random() * 20) + 1;

// console.log(randomDiscount);

// // Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.

const discountInParsantege = ((randomDiscount / 100) * sumFruits).toFixed(2);
console.log(`Знижка: ${discountInParsantege}`);

const priceWithDiscount = (sumFruits - discountInParsantege).toFixed(2)
console.log(`Ціна зі знижкою: ${priceWithDiscount}`);

// // Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?
const profit = (sumFruits - discountInParsantege).toFixed(2) / 2
console.log(`Чистий прибуток: ${profit}`);

// // Створіть шаблонний рядок та виведіть всі обчислення :
console.log(`Максимальна ціна: ${maxPrice}, Мінамальна ціна: ${minPrice}, Варстість всіх товарів: ${sumFruits}, Округлена в меншу сторону вартість: ${minimalRoundPrice}, Сума товарів заокруглена до сотень: ${roundPriceHundred}, Решта: ${rest}, Середнє значення цін: ${averageSum}, Знижка: ${discountInParsantege}, Ціна зі знижкою: ${priceWithDiscount},  Чистий прибуток: ${profit}. `);
