
let numberN = prompt('Enter number N:')


numberN = Math.round(numberN)
 if (isNaN(numberN)) {
   do {
     alert('Enter integer!!!');
     numberN = Math.round(prompt('Enter number N again:'));
     if (isNaN(numberN)==false) {break}
   
 } while (true);
}


let numberM = prompt('Enter number M:');

numberM = Math.round(numberM);
if (isNaN(numberM)) {
  do {
    alert('Enter integer!!!');
    numberM = Math.round(prompt('Enter number M again:'))
    if (isNaN(numberM)==false){break}

  } while (true);
}
 
let sum = 0


if (confirm('Shall we skip even numbers?')) {
      for (let i= numberN; i <= numberM; i++) if(i % 2 !=0)
      sum+=i;
} else {
      for (let i= numberN; i <= numberM; i++)
      sum+=i
    }

alert(sum);
