// ques: 1
var a =prompt("Enter the city name: ");
if (a == "karachi"){
    alert("Welcome to city of Lights");
}

// ques:2
var t = prompt("Enter colour of traffic light: ");
if (t == "red"){
    alert("Must stop");
}else if (t == "yellow"){
    alert("Ready to move");
}else if (t == "green"){
    alert("Move now");
}

// ques: 3
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
if (true) {

    alert("True");
}
if (false) {
    alert("False");
}
if ("car" < "cat") {

    alert("car is smaller than cat");
}

// ques: 4
var sub1 = parseInt(prompt("Enter marks of 1st subject: "));
var sub2 = parseInt(prompt("Enter marks of 2nd subject: "));
var sub3 = parseInt(prompt("Enter marks of 3rd subject: "));
var total = sub1+sub2+sub3;
var result = total / 100;
if (result >= 80){
    alert("Grade: A-one     Remarks: Excellent");
}else if (70 >= result < 80){
    alert("Grade: A     Remarks: Good");
}else if (60 <= result < 70) {
    alert("Grade: B     Remarks: You need to improve");
}else{
    alert("Grade: Fail     Remarks: Sorry");
}

// ques: 5
var secret_num = 8;
var guess = parseInt(prompt("Guess the number between 1 - 10: "));
if (guess == secret_num){
    document.write("<p1>Bingo! Correct answer</p1><br/>");
}else if (guess == ++secret_num){
    document.write("<p1>Close enough to secret number</p1><br/>");
}else {
    document.write("<p1>Try again</p1><br/>");
}

// ques: 6
var num = parseInt(prompt("Enter the positive number: "));
if (num % 2 == 0){
    alert("number is even");
}else {
    alert("number is odd");
}

// ques: 7
var first = parseInt(prompt("First number: "));
var second = parseInt(prompt("Second number: "));
var op = prompt("Operator: ");
if (op == "+"){
    alert(first + second);
}else if (op == "-"){
    alert(first - second);
}else if (op == "*"){
    alert(first * second);
}else if (op == "/"){
    alert(first / second);
}else if (op == "%"){
    alert(first % second);
}else{
    alert("Wrong input");
}

// ques: 8
var num = parseInt(prompt("Enter number: "));
if (num > 0){
    alert("number is positive");
}else if (num < 0){
    alert("number is negative");
}else {
    alert("number is 0");
}

// ques: 9
var vowel = prompt("Enter Character: ");
if (vowel == "a" || vowel == "e" || vowel == "i" || vowel == "o" || vowel == "u"){
    alert("true");
}else {
    alert("false");
}

// ques: 10
var psw = "qwerty123";
var a = prompt("Enter password: ")
if (psw == a){
    alert("Correct! The password you entered matches the original password");
}else {
    alert("Incorrect password");
}

// ques: 11
var time = parseInt(prompt("Enter Time"));
if (time >= 0000 && time < 1200){
    alert("Good Morning!");
}else if (time >= 1200 && time < 1700){
    alert("Good Afternoon!");
}else if (time >= 1700 && time < 2100){
    alert("Good Evening!");
}else if (time >= 2100 && time < 2359){
    alert("Good Night!");
}