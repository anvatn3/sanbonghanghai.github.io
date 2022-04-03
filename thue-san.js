const yard1 = document.querySelector(".yard1");

const yard2 = document.querySelector(".yard2");

const yard3 = document.querySelector(".yard3");

const yard4 = document.querySelector(".yard4");

const invoice1 = document.querySelector(".invoice-infor1");

const invoice2 = document.querySelector(".invoice-infor2");

const invoice3 = document.querySelector(".invoice-infor3");

const invoice4 = document.querySelector(".invoice-infor4");

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
