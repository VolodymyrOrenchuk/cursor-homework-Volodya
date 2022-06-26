async function getRandomChinese(length) {
  const array = [];
  const getSign = () =>
    new Promise(function (resolve) {
      return setTimeout(() => {
        const sign = String.fromCharCode(Date.now().toString().slice(-5));
        resolve(sign);
      }, 50);
    });
  do {
    await getSign().then((value) => array.push(value));
  } while (array.length < length);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(console.log(...array));
    }, length * 50);
  });
}

getRandomChinese(4);
