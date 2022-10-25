const students =[];
const vold = [];
  


/////render on dom function//////
const renderToDom = (id, htmlToRender) => {
  const selectedDiv = document.querySelector(id);
  selectedDiv.innerHTML = htmlToRender;
};
///////get the form on the dom/////////
const formOnDom = () =>{

const wantForm = `<form id="sortForm">

<div class="form-group">
  <label for="Name">Student</label>
  <input type="text" class="form-control" id="Name" placeholder="">
</div>

<button id="sortButton" type="submit" class="btn btn-primary">Sort</button>
</form>`;
renderToDom("#form",wantForm);
}

const showFormButton = document.querySelector("#showForm")

showFormButton.addEventListener('click', ()=>{
  formOnDom()
});
//////////////studentsOnDom/////////////
const studentsOnDom = (students) => {
  let domStudent ="";
  for(const member of students) {
    domStudent += `<div class="card" style="width: 18rem;">
    <img class="card-img-top" src="..." alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title" id="testing"><div id="voldName">${member.name}</div></h5>
      <p class="card-text">${member.house}</p>
      <button id="expelStudent--">EXPEL</button>
    </div>
  </div>
    `
  }
  renderToDom("#student",domStudent);
}




////////////////////submit student for sorting////////////////////
const student = document.querySelector("#student");

const newStudent = function (event) {
  event.preventDefault();
  let househouse =["Ravenclaw","Gryffindor","Hufflepuff","Slytherin"];

  function randomHouse (arr){
for (let i=0;i<househouse.length;i++){
  return arr[Math.floor(Math.random() * arr.length)]
}
  }

  const obj = {
    id:students.length + 1,
    name:document.querySelector("#Name").value,
    house:randomHouse(househouse)
    
  }
  students.push(obj);
  //vold.push(obj);
  studentsOnDom(students)
  document.getElementById("sortForm").reset();
}
form.addEventListener('submit',newStudent);



////////////////////////delete/transfer to vold//////////

const app = document.querySelector("#student");
app.addEventListener('click', (e) => {
  if (e.target.id.includes("expelStudent")) {

    const [method, id] = e.target.id.split("--");

    const index = students.findIndex(e => e.id === Number(id));
    let removed = students.splice(index, 1);
    vold.push(removed);
    
    



    
    
    studentsOnDom(students);
    voldOnDom(vold.flat());
    console.log(vold);
    
  }
});
/////////////////////////////////////volONDOM//////////////////////////////////
const voldOnDom = (vold) => {
  let domVold ="";
  for(const member of vold) {
    domVold += `<div> <h3>voldvoldvold</h3></div><div class="card" style="width: 18rem;">
    <img class="card-img-top" src="..." alt="Card image cap">
    <div class="card-body">
    <h1>badbadbad</h1>
      <h5 class="card-title">${member.name}</h5>
      <p class="card-text">${member.house}</p>
      <button id="expelStudent--">EXPEL</button>
    </div>
  </div>
    `
  }
  renderToDom("#vold",domVold);
  
}
/////////////////////////////filter///////////////////////////////////////
const filter = (array, house) => {
  const typeArray = [];

  for (const member of array) {
    if (member.house === house) {
      typeArray.push(member);
    }
  }

  return typeArray;
}
studentsOnDom(students);

const showRavenclaw = document.querySelector('#yes');
const showG = document.querySelector('#yes2');
const showS = document.querySelector('#yes3');
const showH = document.querySelector('#yes4');
const showA = document.querySelector('#yes5');



showRavenclaw.addEventListener('click', () => {
  const catPets = filter(students, 'Ravenclaw');
  studentsOnDom(catPets);
  console.log('does this work');
});
showG.addEventListener('click', () => {
  const catPets = filter(students, 'Gryffindor');
  studentsOnDom(catPets);
  console.log('does this work');
});
showS.addEventListener('click', () => {
  const catPets = filter(students, 'Slytherin');
  studentsOnDom(catPets);
  console.log('does this work');
});
showH.addEventListener('click', () => {
  const catPets = filter(students, 'Hufflepuff');
  studentsOnDom(catPets);
  console.log('does this work');
});
showA.addEventListener('click', () => {
  studentsOnDom(students);
});
