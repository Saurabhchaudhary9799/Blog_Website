let element = document.getElementsByClassName("item1");
let element1 = document.getElementsByClassName("card");
let element2 = document.querySelector(".fort1");
console.log(element2);
// let card = document.querySelectorAll(".card");
// const fort = document.querySelectorAll(".fort1-info");
// console.log(element);
// console.log(card);
// console.log(fort);
console.log(element1);
element1[0].addEventListener("click", myFunction);
function myFunction(){
    fort.classList.remove('hidden');
}
