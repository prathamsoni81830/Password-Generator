let inputSlider=document.getElementById("input-slider");
let sliderValue=document.getElementById("slider-value");
let passBox=document.getElementById("pass-box");
let lowerCase=document.getElementById("lowercase");
let upperCase=document.getElementById("uppercase");
let numbers=document.getElementById("numbers");
let symbols=document.getElementById("symbols"); 
let gtnBtn =document.getElementById("gtn-btn");
let copyIcon =document.getElementById("copy-icon");

sliderValue.textContent=inputSlider.value;
inputSlider.addEventListener("input", ()=>{
  sliderValue.textContent=inputSlider.value;
});

gtnBtn.addEventListener("click",()=>{
    passBox.value=generatePassword();
});

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*"; 

function generatePassword(){
  generatedPass="";
  allChars="";
   
  allChars+= lowerCase.checked ? lowerChars : "";
  allChars+= upperCase.checked ? upperChars : "";
  allChars+= numbers.checked ? allNumbers : "";
  allChars+= symbols.checked ? allSymbols : "";

  if(allChars== "" || allChars.length==0){
    return generatedPass;
  }
  let i=1;
  while(i<=inputSlider.value){

  generatedPass+=allChars.charAt(Math.floor(Math.random()*allChars.length));
  i++;
  }
  
  return generatedPass;
}
copyIcon.addEventListener("click",()=>{
  if(passBox.value!= ""){
    navigator.clipboard.writeText(passBox.value);
    copyIcon.innerText="check";
    copyIcon.title="Password Copied";

    setTimeout(()=>{
      copyIcon.innerHTML="content_copy";
      copyIcon.title="";
    },2000)
  }
  else
  alert("Nothing to copy");

});