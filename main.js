let menuList = document.getElementById("menuList");
let barIcon = document.getElementById("barIcon");

menuList.style.maxHeight = "0px";
function toggleMenu() {
  if ((menuList.style.maxHeight = "0px")) {
    menuList.style.maxHeight = "300px";
  } else {
    menuList.style.maxHeight = "0px";
  }
}
barIcon.addEventListener("dblclick", function () {
  menuList.style.maxHeight = "0px";
});
let input=document.getElementById("inp")
let tasks=document.getElementById("tasks")
function Add(){
    let newUl=document.createElement("ul")
    newUl.innerHTML=`${input.value} <i class="fa-solid fa-trash"></i>`
    tasks.appendChild(newUl)
    input.value="";
    newUl.querySelector("i").addEventListener("click",remove)
    function remove(){
        newUl.remove()
}
}




