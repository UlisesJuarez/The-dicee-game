var randomNumber1=Math.round((Math.random()*5)+1)
var randomNumber2=Math.round((Math.random()*5)+1)

document.querySelector(".dice .img1").setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelector(".dice .img2").setAttribute("src","images/dice"+randomNumber2+".png");


console.log(randomNumber1);