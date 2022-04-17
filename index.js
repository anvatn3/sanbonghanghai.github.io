
const signInBtn = document.querySelector(".sign-in-btn");

const signIn = document.getElementById("sign-in");

const signUpBtn = document.querySelector(".sign-up-btn");

const signUp = document.getElementById("sign-up");

const closeIn = document.querySelector(".x-sign-in");

const closeUp = document.querySelector(".x-sign-up");

const switchSignUp = document.getElementById("switch-sign-up");

const switchSignIn = document.getElementById("switch-sign-in");


signIn.classList.remove("show-sign-in");

signUp.classList.remove("show-sign-up");

signInBtn.addEventListener("click", function(){
    signIn.classList.add("show-sign-in");

});
signUpBtn.addEventListener("click", function(){
    signUp.classList.add("show-sign-up");

});

closeIn.addEventListener("click", function(){
    signIn.classList.remove("show-sign-in");
});
closeUp.addEventListener("click", function(){
    signUp.classList.remove("show-sign-up");
});

switchSignUp.addEventListener("click", function(){
    signIn.classList.remove("show-sign-in");
    signUp.classList.add("show-sign-up");

});
switchSignIn.addEventListener("click", function(){
    signIn.classList.add("show-sign-in");
    signUp.classList.remove("show-sign-up");

});



const captcha = document.querySelector(".captcha-number"),
reloadBtn = document.querySelector(".reload-btn"),
inputField = document.getElementById("captcha");
//storing all captcha characters in array
let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
                     'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
                     'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                     't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function getCaptcha(){
  for (let i = 0; i < 5; i++) { //getting 6 random characters from the array
    let randomCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)];
    captcha.innerText += ` ${randomCharacter}`; //passing 6 random characters inside captcha innerText
  }
}
getCaptcha(); //calling getCaptcha when the page open
//calling getCaptcha & removeContent on the reload btn click
reloadBtn.addEventListener("click", ()=>{
  removeContent();
  getCaptcha();
});
function removeContent(){
    inputField.value = "";
    captcha.innerText = "";
   }

