const students =[];
const vold = [];
  


/////render on dom function//////
const renderToDom = (id, htmlToRender) => {
  const selectedDiv = document.querySelector(id);
  selectedDiv.innerHTML = htmlToRender;
};
///////get the form on the dom/////////
const formOnDom = () =>{
//class="form-group"
const wantForm = `<form id="sortForm">

<div class ="form-div">

  <label for="Name"></label>
  <input type="text" class="form-control " id="Name" placeholder="Student Name">
</div>

<button id="sortButton" type="submit" class="btn btn-primary">Sort</button>
</form>`;
renderToDom("#form",wantForm);
}

const showFormButton = document.querySelector("#showForm")

showFormButton.addEventListener('click', ()=>{
  formOnDom()
});
//////////////emblems on cards//////////////////////////
const imageEmblem = function (yes) {
  if(yes === 'Ravenclaw') {
return 'https://i.pinimg.com/736x/16/ee/c9/16eec9b0e3d461ec25078ae8b88d1870.jpg'
}else if(yes === 'Gryffindor'){
  return 'https://i.pinimg.com/736x/a2/ac/ce/a2acce21190c55c768502960f8a028b5.jpg'
}else if(yes === 'Slytherin'){
  return 'https://i.pinimg.com/736x/7f/3c/05/7f3c055a2f71bb6ce41117656164ca83.jpg'
}else if(yes === 'Hufflepuff'){
  return 'https://i.pinimg.com/474x/81/00/4c/81004c31e15b09aaee1e3be43c744d62.jpg'
}
}
const houseMotto = function (yes) {
  if(yes === 'Ravenclaw') {
    return 'Or yet in wise old Ravenclaw, If you have a ready mind, Where those of wit and learning, will always find their kind'
  }else if(yes === 'Gryffindor') {
return 'You might belong in Gryffindor, Where dwell the brave at heart. Their daring, nerve and chivalry set Gryffindor apart.'
  }else if(yes === 'Slytherin'){
return 'Or perhaps in Slytherin You will make your real friends, These cunning folk use any means to achieve their ends.' 
  }else if(yes === 'Hufflepuff') {
return 'You might belong in Hufflepuff,Where they are just and loyal,Those patient Hufflepuffs are true and unafraid of toil'

  } 
  }


//////////////studentsOnDom/////////////
const studentsOnDom = (students) => {
  let domStudent ="";
  for(const member of students) {
    domStudent += `<div class="card ${member.house}" style="width: 18rem;">
    <img class="card-img-top" src="${imageEmblem(member.house)}"
    <div id="studentCardBody" class="card-body">
      <h5 class="card-title" id="testing"><div id="voldName">${member.name}</div></h5>
      <p class="card-text">${member.house}</p>
      <p>${houseMotto(member.house)}</p>
      <div class="student-card-button-div">
      <button class="sorting-buttons" id="expelStudent--${member.id}">EXPEL</button>
      </div>
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
   const randomHouse = function  (arr){
  return arr[Math.floor(Math.random() * arr.length)]
  }
  
  const obj = {
    id:students.length + 1,
    name:document.querySelector("#Name").value,
    house:randomHouse(househouse),
     
    
  }
  
  
  console.log(obj.house);
  students.push(obj);
  
  students.sort((a, b) => a.house.localeCompare(b.house))

  studentsOnDom(students)
  document.getElementById("sortForm").reset();
////////////////////////////////////////////////////////


  ////////////////////////////////////////////////////////
}
form.addEventListener('submit',newStudent);



////////////////////////delete/transfer to vold//////////

const app = document.querySelector("#student");
app.addEventListener('click', (e) => {
  if (e.target.id.includes("expelStudent--")) {

    const [, id] = e.target.id.split("--");

    const index = students.findIndex(e => e.id === Number(id));
    let removed = students.splice(index, 1);
    vold.push(removed[0]);
    
    



    
    
    studentsOnDom(students);
    voldOnDom(vold);
    console.log(vold);
    
  }
});
/////////////////////////////////////volONDOM//////////////////////////////////
const voldOnDom = (vold) => {
  let domVold ="";
  for(const member of vold) {
    domVold += `<div> <h3></h3></div><div class="card" style="width: 18rem;">
    <img class="card-img-top" src="https://i.pinimg.com/474x/73/2a/5c/732a5c1522b76cd30362fc9a6e9caffa.jpg" alt="Card image cap">
    <div class="card-body">
    <h1>Voldemort's Pet</h1>
      <h5 class="card-title">${member.name}</h5>
      <p class="card-text">Taken from ${member.house}</p>
     
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

const showR = document.querySelector('#yes');
const showG = document.querySelector('#yes2');
const showS = document.querySelector('#yes3');
const showH = document.querySelector('#yes4');
const showA = document.querySelector('#yes5');



showR.addEventListener('click', () => {
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

const startApp = () => {
  studentsOnDom(students);
  events();
}
startApp();
