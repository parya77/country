const selected = document.querySelector(".select span");
const listMenu = document.querySelector(".list");
let country = ["IRAN", "USA", "UK", "DUBAI", "CANADA", "IRAQ"];

const myLiItem = document.querySelector(".listItem");

let myI = document.querySelector('.spann');
  myI.addEventListener('click' , function(){
    listMenu.classList.toggle("d-none");
  })

function createElm(e) {
    country.forEach(function (item) {
        let li = document.createElement("li");
        li.textContent = item;
        li.className = ".item";
        li.addEventListener("click", function(){
            selected.textContent = li.textContent;
        })
        myLiItem.appendChild(li)
    })
}
createElm();

let inputBox = document.querySelector(".inputBox");


inputBox.addEventListener("keyup" , function(e){
    let myLi = document.getElementsByTagName("li");
    
    let inputBox1 = inputBox.value.toUpperCase();

       for ( i = 0; i < myLi.length; i++) {
        let value = myLi[i].textContent;
        
       if (value.toUpperCase().indexOf(inputBox1) != -1){

        myLi[i].style.display = "";
       }else {

        myLi[i].style.display = "none";
       }

    }


})