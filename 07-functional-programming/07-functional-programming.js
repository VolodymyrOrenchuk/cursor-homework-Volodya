const ukraine = {
    tax: 0.195,
    middleSalary: 1789,
    vacancies: 11476,
   
};
const latvia = {
    tax: 0.25,
    middleSalary: 1586,
    vacancies: 3921
};

const litva = {
    tax: 0.15,
    middleSalary: 1509,
    vacancies: 1114
};
    //1
    function getMyTaxes(salary) {
        console.log(`Податок від ${salary} - ${ this.tax * salary} `)
}
    getMyTaxes.call(ukraine,1000)
    
    //2
    function getMiddleTaxes ()  {
        console.log(`Середній податок  - ${this.tax * this.middleSalary}`)
}
    getMiddleTaxes.call(latvia)
    
    //3
    function getTotalTaxes() {
        console.log(`Всього податків - ${this.tax * this.middleSalary * this.vacancies}`)
}  
    getTotalTaxes.call(latvia)
    
    //4

function mySalary() {
    setInterval( () => {
        const salary = Math.floor(Math.random() * (2000 - 1500) + 1500)
        const taxes = salary * this.tax
        console.log({
            salary,
            taxes,
            profit: salary - taxes,
        })
    },2000)
}
mySalary.call(ukraine)


