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
return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQykfFWLFvp3OaBmlTCbJg3D2p6d_tU8BMIuA&usqp=CAU'
}else if(yes === 'Gryffindor'){
  return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQE_Y2vW6O9FTMy2OKWUTycwRoaZhHg25XMA&usqp=CAU'
}else if(yes === 'Slytherin'){
  return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4NMPlIS0G3xFIqqvx5Bfe9VFfZjDpxt1lxw&usqp=CAU'
}else if(yes === 'Hufflepuff'){
  return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHL9s8IOBnDwmAciv4UuOl50ZnSNcjKdd6aZ3gV6aX9qsMjYEC2CgRJ_4Wfqv7LwyM5zo&usqp=CAU'
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
      <button id="expelStudent--${member.id}">EXPEL</button>
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
    <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBY2iEMgrlOSRQibKeylnjBKuzRIf1-JSbQQ&usqp=CAU" alt="Card image cap">
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
