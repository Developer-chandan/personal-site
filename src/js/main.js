// document.querySelector("#checkbutton").addEventListener("click",function(){
//   document.querySelector("#navbar").setAttribute("class","navManuAss");
// });


const toggleButton = document.querySelector("#checkbutton");
const navbarLinks = document.querySelector("#navbar");
toggleButton.addEventListener("click",function(){
  navbarLinks.classList.toggle("navManuAss")
})
