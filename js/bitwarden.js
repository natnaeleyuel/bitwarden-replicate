window.addEventListener("scroll", function(){
    const nav = document.querySelector(".nav")
    if (window.scrollY > 0) {
        nav.style.boxShadow = "0px 0.5px 1px hsl(210, 85%, 15%)";
    }
    else{
        nav.style.boxShadow = "none";
    }
});

const personal = document.getElementById("personal");
const business = document.getElementById("business");
const btnPers = document.getElementById("persBtn");
const btnBusin = document.getElementById("businBtn");
const language = document.getElementById("language");
const htmlLang = document.getElementById("html");
const products = document.getElementById('products');
const prodLink = document.getElementById('prod');
const resLink = document.getElementById('res');
const resource = document.getElementById('resource');
const downSign = document.getElementById('downSpan');
const downSign2 = document.getElementById('downSpan2');
var disp1 = true;
var disp2 = true;
const scrollSmoth = document.getElementById('scrollSmoth');

btnPers.onclick = function personalFun(){
    business.style.display = "none";
    personal.style.display = "flex";
    btnPers.style.transition = "background-color 0.25s ease";
    btnPers.style.backgroundColor = "#ffffff";
    btnPers.style.color = "#005FDB";
    btnBusin.style.backgroundColor = "#0042AB";
    btnBusin.style.color = "#ffffff";
}
btnBusin.onclick =  function businessFun(){
    personal.style.display = "none";
    business.style.display = "flex";
    btnBusin.style.transition = "background-color 0.25s ease";
    btnBusin.style.backgroundColor = "#ffffff";
    btnBusin.style.color = "#005FDB";
    btnPers.style.backgroundColor = "#0042AB";
    btnPers.style.color = "#ffffff";
}

prodLink.onclick = function prductFun(){
    resource.style.display = 'none';
    downSign2.style.transform = 'rotate(90deg)';
    disp2 = true;
    if(disp1){
        products.style.display = 'block';
        downSign.style.transform = 'rotate(0deg)';
        disp1 = false;
    }
    else{
        products.style.display = 'none';
        downSign.style.transform = 'rotate(90deg)';
        disp1 = true;
    }
}

resLink.onclick = function prductFun(){
    products.style.display = 'none';
    downSign.style.transform = 'rotate(90deg)';
    disp1 = true;
    if(disp2){
        resource.style.display = 'block';
        downSign2.style.transform = 'rotate(0deg)';
        disp2 = false;
    }
    else{
        resource.style.display = 'none';
        downSign2.style.transform = 'rotate(90deg)';
        disp2 = true;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    scrollSmoth.addEventListener("click", function(event){
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});