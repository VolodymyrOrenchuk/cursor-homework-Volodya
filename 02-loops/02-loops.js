
let numberN;
  do {
     numberN = Math.round(prompt('Enter number N:'))
} while (isNaN(numberN));



let numberM;

  do {
    numberM = Math.round(prompt('Enter number M:'))
} while (isNaN(numberM));

 
let sum = 0

if (confirm('Shall we skip even numbers?')) {
    for (let i = numberN; i <= numberM; i++)
    if (i % 2 != 0) sum+=i;
} else {
    for (let i= numberN; i <= numberM; i++)
    sum+=i
}

alert(sum);
