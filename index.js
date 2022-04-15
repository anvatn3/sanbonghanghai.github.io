
const signInBtn = document.querySelector(".sign-in-btn");

const signIn = document.getElementById("sign-in");

const close = document.querySelector(".x");

signIn.classList.remove("show-sign-in");

signInBtn.addEventListener("click", function(){
    signIn.classList.add("show-sign-in");

});
close.addEventListener("click", function(){
    signIn.classList.remove("show-sign-in");

});