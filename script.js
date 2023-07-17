/*var dropDown = document.querySelector(".dropbtn");
var dropDownDiv = document.querySelector(".dropdown");
dropDown.addEventListener("click", function(){
  dropDownDiv.classList.toggle('show-menu');
});*/


const optionMenu = document.querySelector("#dropdown"),
    selectBtn = optionMenu.querySelector(".select-btn"),
    options = optionMenu.querySelectorAll(".option"),
    sbtn_text = optionMenu.querySelector(".sbtn-text");

selectBtn.addEventListener("click" ,() => optionMenu.classList.toggle("active"));


options.forEach(option =>{
  option.addEventListener("click" , () => {
    let selectedOption = option.querySelector(".option-text").innerText;
    sbtn_text.innerText = selectedOption;
    
    optionMenu.classList.remove("active");
  })
}) 

const optionSMenu = document.querySelector("#drop"),
    selectBtnS = optionSMenu.querySelector(".select-btnS"),
    optionsS = optionSMenu.querySelectorAll(".optionS"),
    sbtnS_text = optionSMenu.querySelector(".sbtnS-text");

selectBtnS.addEventListener("click" ,() => optionSMenu.classList.toggle("active"));


optionsS.forEach(optionS =>{
  optionS.addEventListener("click" , () => {
    let selectedOptionS = optionS.querySelector(".optionS-text").innerText;
    sbtn_text.innerText = selectedOptionS;
    
    optionSMenu.classList.remove("active");
  })
}) 































