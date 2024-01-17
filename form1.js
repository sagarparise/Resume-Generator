const workExperience = document.querySelector(".workExp-container");
const education = document.querySelector(".ed-details");
const projects = document.querySelector(".projects");
let wrapper = document.querySelectorAll(".wrapper");
let achievementContainer = document.querySelector(".achieve-container")
const dlt = document.querySelector(".delete");

let title = document.getElementById("cv-title")
let email = document.getElementById("DS-email");
let number = document.getElementById("DS-number");
let address = document.getElementById("DS-address");
let github = document.getElementById("DS-git-hub");
let linkedin = document.getElementById("DS-linkedIn");
let skill = document.getElementById("DS-skill")
let language = document.getElementById("DS-language");
let objective = document.getElementById("DS-obj");
let workList = document.querySelector(".work-list");
let proList = document.querySelector(".projects-list")
let clgList = document.querySelector(".clg-details-container");
let achiveList = document.querySelector(".achievement-list")
let profileImage = document.getElementById('profileImage');

function displayImage(input) {
 
  let preview = document.querySelector('.profile-container img');

  let file = input.files[0];

 
  if (file) {
      let reader = new FileReader();

      reader.onload = function (e) {
       preview.src = `${e.target.result}`
      };
     
      reader.readAsDataURL(file);
  }
}


function addMoreInfo(event, value){

  event.preventDefault();
  
  if(value === 'education'){
   education.innerHTML += `
   <div class="edu-row">
   <input type="text"  class="university" placeholder="Institute/University">
   <input type="text" class="degree" placeholder="Degree/Certificate">
   <input type="number" class="percentage" placeholder="Percentage/CGPA">
   <input type="text" class="year" placeholder="Year">
   <span class='bx bx-trash'></span>
   </div>`
  }
 else if(value === "experience")
 {
  workExperience.innerHTML += ` <div class="input-fields work-ex">
  <textarea class="textArea" rows="3"></textarea>
  <span class="delete">	&times;</span>            
 </div>`
 }
 else if(value === "projects")
 {
  projects.innerHTML += ` 
 <div class="input-fields proj-content">
        <input type="text" id="project-title" placeholder="Project Title...">
       <textarea class="textArea bx-scroll" rows="3" placeholder="Description..."></textarea>
       <span class="delete">	&times;</span>            
      </div>
 `
 }
 else if(value === 'achievement'){
achievementContainer.innerHTML += `
<div class="input-fields AC-list">
<textarea class="textArea bx-scroll" rows="3"></textarea>    
<span class="delete">	&times;</span>       
</div>
`;
 }
 
}
wrapper.forEach((element)=>{

element.addEventListener("click", deletContainer);
})

function deletContainer(event){
  if(event.target.tagName === "SPAN")
  {
    event.target.parentElement.remove();
  }
}



function submitForm(event){
  event.preventDefault();
  
  //here i am calling  displayImage
  displayImage(profileImage);


 title.innerHTML = document.getElementById("name").value;
 email.innerHTML = document.getElementById("email").value;
 number.innerHTML = document.getElementById("number").value;
 address.innerHTML = document.getElementById("address").value;
 github.href = `${document.getElementById("github").value}`
 linkedin.href = `${document.getElementById("linkedin").value}`
 skill.innerHTML = document.getElementById("skills").value;
 language.innerHTML = document.getElementById("language").value;
 objective.innerHTML = document.getElementById("obj").value;

//education details

let eduRow = document.querySelectorAll(".edu-row");

clgList.innerHTML = "";

console.log(eduRow);
for(eduItem of eduRow){

  console.log(eduItem);

    let universityName = eduItem.querySelector(".university").value;
   let degreName = eduItem.querySelector(".degree").value;
   let percentage = eduItem.querySelector(".percentage").value;
   let year = eduItem.querySelector(".year").value;

        clgList.innerHTML +=`
        <div class="clg-info-row">
        <div class="DG-info"> 
          <h4>${universityName}</h4>
          <h4>${year}</h4>
        </div>
        <div class="DG-info">
            <p>${degreName}</p>
            <p>${percentage}%</p>
        </div> 
      </div>

        `;
}


 // work experience 

 let workExp = document.querySelectorAll(".work-ex");
 workList.innerHTML="";
 
 for( item of workExp){
  let textValue = item.querySelector(".textArea").value;
  
  workList.innerHTML+=`<li>${textValue}</li>`;
 }

 // projects list

 let proContent = document.querySelectorAll(".proj-content");
 proList.innerHTML = "";
 for(element of proContent){
 
  let proName = element.querySelector("#project-title").value;
  let textValue = element.querySelector(".textArea").value;

  proList.innerHTML+=` <li><h5>${proName}:</h5>
  <p>${textValue}</p>
  </li>`
 }

 // achievements

 let achievements = document.querySelectorAll(".AC-list");
 achiveList.innerHTML = "";

 for(let item of achievements){
  let textValue = item.querySelector(".textArea").value;
  achiveList.innerHTML += `
  <li>${textValue}</li>
  `;
 }



}

// downloadCv

function downloadCV() {
  let resume = document.querySelector(".resume-page");
  var opt = {
    margin:       0.2,
    filename:     'Resume.pdf',
    image:        { type: 'jpeg', quality: 0.99 },
    html2canvas:  { scale: 1 },
    jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
  };
 html2pdf().from(resume).set(opt).save();
}

