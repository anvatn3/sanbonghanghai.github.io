
// const user = document.getElementById("user");

const userSelect = document.getElementById("main-user");

userSelect.style.display = "none";

let userClick = true;

window.onload = function(){
    document.onclick = function(u){
        if(u.target.id != "main-user" && userClick == false){
            userSelect.style.display = "none";
            userClick = true;
        }
        if(u.target.id == "user" && userClick == true ){
            userSelect.style.display = "block";
            userClick = false;

        }
    };
} 