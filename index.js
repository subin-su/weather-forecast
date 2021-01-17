
var btnx=document.getElementById("btn")
//console.log(inputy)
btnx.addEventListener("click",function(e){
    e.preventDefault();
   let inputy=document.getElementById("inputx").value
window.alert(inputy)
  localStorage.setItem(inputy,"value");
  let import=localStorage.getItem(inputy);
  document.createElement(h2);
  
 

})
