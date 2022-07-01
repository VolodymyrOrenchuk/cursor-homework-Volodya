//people
const button = document.getElementById("btn");
const URL_PEOPLE = `https://swapi.dev/api/films/`;

//Planets
const ctnPlanets = document.getElementById("ctn-main");
let URL_Planets = "https://swapi.dev/api/planets/?page=1";
let nextPlanets;
let previousPlanets;
const planetsPrevious = document.getElementById("planets-previous");
const planetsNext = document.getElementById("planets-next");

planetsNext.addEventListener("click", pageNextPlanets);
planetsPrevious.addEventListener("click", pagePreviousPlanets);



//Functions Planets
async function fetchPlanets() {
  document.querySelector(".overlay").classList.add("active");
  const result = await fetch(URL_Planets);
  const data = await result.json();
  nextPlanets = data.next;
  previousPlanets = data.previous;
  let arrayPlanets = data.results;
  let html = "";
  document.querySelector(".overlay").classList.remove("active");
  arrayPlanets.forEach((element) => {
    html += `
    <div class="card card-planets">
    <h2>${element.name}</h2>
    <h5>Terrain: ${element.terrain}</h5>
    <h5>Population: ${element.population}</h5>
    </div>
    `;
  });
  ctnPlanets.innerHTML = html;
}

function pageNextPlanets() {
  if (nextPlanets) {
    URL_Planets = new URL(nextPlanets);
  }
  fetchPlanets().catch((error) => {
    console.log("error");
    console.error(error);
  });
}
function pagePreviousPlanets() {
  if (previousPlanets) {
    URL_Planets = new URL(previousPlanets);
  }
  fetchPlanets().catch((error) => {
    console.log("error!");
    console.error(error);
  });
}


//Funtions people

function getFilmNumberFromInput() {
  const inputValue = document.getElementById("searchTxt").value;
  if (inputValue >= 1 && inputValue <= 6) {
  } else {
    document.getElementById("myForm").reset();
    throw new Error('Ви ввели неправильне значення')
  }
  return inputValue;
}

async function fetchPeople() {
 
 try {const filmNumbers = getFilmNumberFromInput();
  document.querySelector(".overlay").classList.add("active");
  const result = await fetch(`${URL_PEOPLE}${filmNumbers}`);
  const data = await result.json();
  const arrayFilmCharacters = data.characters;
  const arrayPeople = [];
  for (let i = 0; i < arrayFilmCharacters.length; i++) {
    const result = await fetch(arrayFilmCharacters[i]);
    const json = await result.json();
    arrayPeople.push(json);
  }

  let outPut = "";
  document.querySelector(".overlay").classList.remove("active");
  arrayPeople.forEach((element) => {
    outPut += `
          <div class='card card-people'>
          <h2>${element.name}</h2>
          <h5>Birth year: ${element.birth_year}</h5>
          <h5>Gender:  ${element.gender}</h5>
          </div>
          `;
  });
   ctnPlanets.innerHTML = outPut;
 } catch (err) {
   alert(err.message);
   return
  }
}
button.addEventListener("click", fetchPeople);


