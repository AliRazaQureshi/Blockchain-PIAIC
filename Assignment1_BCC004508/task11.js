var cel = 30;
var far = ((cel * 9)/5)+32;
var F = 70;
var cent = (F - 32)*5/9;
document.getElementById("farenheit").innerHTML=cel+"C is "+far+"F";
document.getElementById("centigrade").innerHTML=F+"F is "+cent+"C";