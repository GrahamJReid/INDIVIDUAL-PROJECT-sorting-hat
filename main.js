const students =[]
  


/////render on dom function//////
const renderToDom = (id, htmlToRender) => {
  const selectedDiv = document.querySelector(id);
  selectedDiv.innerHTML = htmlToRender;
};
///////get the form on the dom/////////
const formOnDom = () =>{

const wantForm = `<form>

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
      <h5 class="card-title">${member.name}</h5>
      <p class="card-text">${member.house}</p>
      <button id="expelStudent">EXPEL</button>
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
  let househouse =["raven","junbug","octopus"];
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
  studentsOnDom(students)
  form.reset();
}
form.addEventListener('submit',newStudent);
////////////////////////
