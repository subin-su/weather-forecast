var inputValue=document.getElementById("input")
const apiKey="668e3d39d52a645e064391881ef3df01"
var btnx=document.getElementById("btn")
var cityName=document.getElementById("temp")
var sudan=document.getElementById("name")
var subin=document.getElementById("population")
var alina=document.getElementById("des")
//var box=document.getElementById("")
btnx.addEventListener("click",function(e){
  e.preventDefault()
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${inputValue.value}&appid=${apiKey}`)
.then(res=>res.json())
.then(data=>
{console.log(data)

  let x =data["city"]["population"]
  cityName.innerHTML=x;
  let a=data["city"]["coord"]["lat"]
  sudan.innerHTML=a;
  let b=data["list"][0]["main"]["temp"]
  subin.innerHTML=Math.floor((b-(273.15)+32)*2);

})
})
