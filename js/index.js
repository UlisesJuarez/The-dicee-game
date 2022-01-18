var randomNumber1=Math.round((Math.random()*5)+1)
var randomNumber2=Math.round((Math.random()*5)+1)

document.querySelector(".dice .img1").setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelector(".dice .img2").setAttribute("src","images/dice"+randomNumber2+".png");

if(randomNumber1<randomNumber2){
    document.getElementsByTagName("h1")[0].innerHTML="Player 2 Wins! 🏆"
}else if(randomNumber1>randomNumber2){
    document.getElementsByTagName("h1")[0].innerHTML="🏆 Player 1 Wins!"
}else{
    document.getElementsByTagName("h1")[0].innerHTML="🏆 Draw! 🏆"
}
