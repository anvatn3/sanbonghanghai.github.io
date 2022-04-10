const yard1 = document.querySelector(".yard1");

const yard2 = document.querySelector(".yard2");

const yard3 = document.querySelector(".yard3");

const yard4 = document.querySelector(".yard4");

const invoice1 = document.getElementById("invoice1");

const invoice2 = document.getElementById("invoice2");

const invoice3 = document.getElementById("invoice3");

const invoice4 = document.getElementById("invoice4");



yard1.addEventListener("click", showInvoice1);
yard2.addEventListener("click", showInvoice2);
yard3.addEventListener("click", showInvoice3);
yard4.addEventListener("click", showInvoice4);

invoice1.style.display = "none";
invoice2.style.display = "none";
invoice3.style.display = "none";
invoice4.style.display = "none";


function showInvoice1(){
    invoice1.style.display = "block";
    invoice2.style.display = "none";
    invoice3.style.display = "none";
    invoice4.style.display = "none";
    
}
function showInvoice2(){
    invoice1.style.display = "none";
    invoice2.style.display = "block";
    invoice3.style.display = "none";
    invoice4.style.display = "none";
    
}
function showInvoice3(){
    invoice1.style.display = "none";
    invoice2.style.display = "none";
    invoice3.style.display = "block";
    invoice4.style.display = "none";

}
function showInvoice4(){
    invoice1.style.display = "none";
    invoice2.style.display = "none";
    invoice3.style.display = "none";
    invoice4.style.display = "block";

}


function priceChange1 (){
    const timestart1 = document.getElementById("timestart1").value;
    const price1 = document.querySelector(".price1");

    if(timestart1 == "7" || timestart1 == "8" || timestart1 == "9" || timestart1 == "10" ){
        price1.innerHTML = `Giá : 400k VND`;
    }
    else if(timestart1 == "14" || timestart1 == "15" || timestart1 == "16" || timestart1 == "17"){
        price1.innerHTML = `Giá : 320k VND`;
    }
    else if(timestart1 == "18" || timestart1 == "19" || timestart1 == "20" || timestart1 == "21"){
        price1.innerHTML = `Giá : 500k VND`;
    }
}
function priceChange2 (){
    const timestart2 = document.getElementById("timestart2").value;
    const price2 = document.querySelector(".price2");

    if(timestart2 == "7" || timestart2 == "8" || timestart2 == "9" || timestart2 == "10" ){
        price2.innerHTML = `Giá : 400k VND`;
    }
    else if(timestart2 == "14" || timestart2 == "15" || timestart2 == "16" || timestart2 == "17"){
        price2.innerHTML = `Giá : 320k VND`;
    }
    else if(timestart2 == "18" || timestart2 == "19" || timestart2 == "20" || timestart2 == "21"){
        price2.innerHTML = `Giá : 500k VND`;
    }
}
function priceChange3 (){
    const timestart3 = document.getElementById("timestart3").value;
    const price3 = document.querySelector(".price3");

    if(timestart3 == "7" || timestart3 == "8" || timestart3 == "9" || timestart3 == "10" ){
        price3.innerHTML = `Giá : 400k VND`;
    }
    else if(timestart3 == "14" || timestart3 == "15" || timestart3 == "16" || timestart3 == "17"){
        price3.innerHTML = `Giá : 320k VND`;
    }
    else if(timestart3 == "18" || timestart3 == "19" || timestart3 == "20" || timestart3 == "21"){
        price3.innerHTML = `Giá : 500k VND`;
    }
}
function priceChange4 (){
    const timestart4 = document.getElementById("timestart4").value;
    const price4 = document.querySelector(".price4");

    if(timestart4 == "7" || timestart4 == "8" || timestart4 == "9" || timestart4 == "10" ){
        price4.innerHTML = `Giá : 400k VND`;
    }
    else if(timestart4 == "14" || timestart4 == "15" || timestart4 == "16" || timestart4 == "17"){
        price4.innerHTML = `Giá : 320k VND`;
    }
    else if(timestart4 == "18" || timestart4 == "19" || timestart4 == "20" || timestart4 == "21"){
        price4.innerHTML = `Giá : 500k VND`;
    }
}


function resetPrice(){
    const price1 = document.querySelector(".price1");
    const price2 = document.querySelector(".price2");
    const price3 = document.querySelector(".price3");
    const price4 = document.querySelector(".price4");

    price1.innerHTML = `Giá : 400k VND`;
    price2.innerHTML = `Giá : 400k VND`;
    price3.innerHTML = `Giá : 400k VND`;
    price4.innerHTML = `Giá : 400k VND`;

}

// const invoice1 = document.getElementById("invoice1");

// const invoice2 = document.getElementById("invoice2");

// const invoice3 = document.getElementById("invoice3");

// const invoice4 = document.getElementById("invoice4");

const submit1 = document.getElementById("submit1");

const submit2 = document.getElementById("submit2");

const submit3 = document.getElementById("submit3");

const submit4 = document.getElementById("submit4");

const success = document.getElementById("success");

const successPopup = document.querySelector(".success-popup");

const close = document.querySelector(".x");

const username1 = document.getElementById("username1");
const email1 = document.getElementById("email1");
const date1 = document.getElementById("date1");

const username2 = document.getElementById("username2");
const email2 = document.getElementById("email2");
const date2 = document.getElementById("date2");

const username3 = document.getElementById("username3");
const email3 = document.getElementById("email3");
const date3 = document.getElementById("date3");

const username4 = document.getElementById("username4");
const email4 = document.getElementById("email4");
const date4 = document.getElementById("date4");

// let today = new Date();    

// success.style.display = "none";

success.classList.remove("show");

invoice1.addEventListener("submit", function(e){
    e.preventDefault();
});
invoice2.addEventListener("submit", function(e){
    e.preventDefault();
});
invoice3.addEventListener("submit", function(e){
    e.preventDefault();
});
invoice4.addEventListener("submit", function(e){
    e.preventDefault();
});

submit1.addEventListener("click", function(){
    if(username1.value === "" || email1.value === "" || date1.value === ""){
        success.classList.remove("show");
    }
    else{
        success.classList.add("show");
        invoice1.style.display = "none";
        
    }
});
submit2.addEventListener("click", function(){
    if(username2.value === "" || email2.value === "" || date2.value === ""){
        success.classList.remove("show");
    }
    else{
        success.classList.add("show");
        invoice2.style.display = "none";

    }
});
submit3.addEventListener("click", function(){
    if(username3.value === "" || email3.value === "" || date3.value === ""){
        success.classList.remove("show");
    }
    else{
        success.classList.add("show");
        invoice3.style.display = "none";

    }
});
submit4.addEventListener("click", function(){
    if(username4.value === "" || email4.value === "" || date4.value === ""){
        success.classList.remove("show");
    }
    else{
        success.classList.add("show");
        invoice4.style.display = "none";

    }
});
close.addEventListener("click", function(){
    success.classList.remove("show");

    // if(success.style.display = "block"){
    //     success.style.display = "none";
    // }
});

success.addEventListener("click", function(e){
    if(!successPopup.contains(e.target)){
        success.classList.remove("show");
    }
});
// success.style.display = "none";

// function confirmAgain(){
//     // if(username == "" || birthyear == ""){
//     //     success.style.display = "none";

//     // }
//     // else {
//     //     success.style.display = "block";

//     // }

// }

// function closePopup(){
//     if(success.style.display = "block"){
//         success.style.display = "none";
//     }
    
// }




