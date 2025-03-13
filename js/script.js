//example-1
function showDate() {
    document.getElementById('sd').innerHTML = Date();
}
//example-2 
function changeText() {
    document.getElementById('ct').innerHTML = "No,she is takling about the date of calender";
}
//example-3 
function bulbOn() {
    document.getElementById('img').src = "images/bulb-on.jpg";
}
function bulbOff() {
    document.getElementById('img').src = "images/bulb-off.jpg";
}
//example-4 
function changeCss() {
    document.getElementById('clr').style.color = "red";
}
//example-4 
function showText() {
    document.getElementById('st').style.display = "block";
}
function hideText() {
    document.getElementById('st').style.display = "none";

}
//example-6 JavaScript typeof Operator
const name = 'jhon';
document.getElementById('ctype').innerHTML = (typeof name);
//example-7 String Interpolation Example 
const age = '25';
document.getElementById('so').innerHTML = `My age is ${age}`;
//example-8 String Length Property
const s = "hello";
document.getElementById('sl').innerHTML = s.length;
//example-9  String split() Method
const t = "sanjida";
document.getElementById('sp').innerHTML = t.split('');
//example-10 Split String by Comma
const a = "internet, technology, it, code";
document.getElementById('sbyc').innerHTML = a.split(', ');
//example-11 Accessing Array Elements
const fruits = ['mango', 'apple', 'pineapple', 'watermelon'];
document.getElementById('ar').innerHTML = fruits[3];
//example-12 Finding Index of an Element in  Array
const numbers = [10, 11, 12, 13, 14, 15];
document.getElementById('arin').innerHTML = numbers.indexOf(10);
//example-13  if Statement Example
const x = 10;
if (x === 10) {
    document.getElementById('is').innerHTML = x;
}
//example-14 Logical OR (||) Operator Example
const c = 60;
const z = 20;
if (c > 60 || z < 30) {
    document.getElementById('orop').innerHTML = "c is greater then 60 or z is less than 30";
}
//example-15  Ternary Operator Example
const j = 6;
const color = j > 10 ? 'cyan' : 'red';
document.getElementById('to').innerHTML = color;
//example-16 Switch Statement with Ternary Operator
const i = 11;
const colour = i > 10 ? 'cyan' : 'red';
switch (colour) {
    case 'cyan':
        document.getElementById('sw').innerHTML = " i is cyan";
        break;
    case 'red':
        document.getElementById('sw').innerHTML = "i is red";
        break;
    default:
        document.getElementById('sw').innerHTML = "i is not cyan or red";
        break;
}
//example-17 Displaying Object Properties in HTML
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}
const person1 = new Person('Sanjida', 'Mimi', '2-2-2000');
document.getElementById('op').innerHTML = person1.firstName + ' ' + person1.lastName + '(' + person1.dob + ')';
//example-18  Class and Object Example
class Employee {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;

    }
}
const employee1 = new Employee('Siyam', 'Khan', '02-09-2004');
document.getElementById('c').innerHTML = employee1.getFullName();
//example 19 Variable Assignment and DOM Update
let p = 150 + 50
document.getElementById('ar').innerHTML = p;
//example 20 Scientific Notation  with DOM Update
let d = 124e5
let f = 345e-5
document.getElementById('lr').innerHTML = d + "<br>" + f;
//example 21 Using Number.EPSILON
let r = Number.EPSILON
document.getElementById('ep').innerHTML = r;
//example 22 max value
let o = Number.MAX_VALUE
document.getElementById('mv').innerHTML = o;
//example 23 min value
let q = Number.MIN_VALUE
document.getElementById('minv').innerHTML = q;
//example 24 max safe integer
let vb = Number.MAX_SAFE_INTEGER
document.getElementById('msi').innerHTML = vb;
//example 25 min safe integer
let vx = Number.MIN_SAFE_INTEGER
document.getElementById('minsi').innerHTML = vx;
//example 26 positive infinity property
let bx = 1 / 0
document.getElementById('pinf').innerHTML = bx;
//example 27 the forEach()method
const num = [12, 67, 89, 9]
let txt = ""
num.forEach(myFunction);
document.getElementById('arrayi').innerHTML = txt;
function myFunction(value, index, array) {
    txt += value + "<br>";

}
//example 28 the map() method
const num1 = [12, 67, 89, 9]
const num2 = num1.map(myFunction)

document.getElementById('map').innerHTML = num2;
function myFunction(value, index, array) {
    return value * 2;
}
//example 29 the flatMap() method
const myArr = [12, 67, 89, 9]
const newArr = myArr.flatMap(x => [x, x * 10])

document.getElementById('fmap').innerHTML = newArr;
//example 30 Math.round()
document.getElementById('math').innerHTML = Math.round(4.3);
//example 31 Math.ceil()
document.getElementById('mathc').innerHTML = Math.ceil(5.1);
//example 32 Math.floor()
document.getElementById('mathf').innerHTML = Math.floor(9.5);
//example 33 Math.turnc()
document.getElementById('matht').innerHTML = Math.trunc(7.5);
//example 34 Math.sign()
document.getElementById('maths').innerHTML = Math.sign(0);
document.getElementById('maths').innerHTML = Math.sign(-9);
document.getElementById('maths').innerHTML = Math.sign(4.9);
//example 35 Math.pow()
document.getElementById('mathp').innerHTML = Math.pow(7, 5);
//example 36 Math.sin()
document.getElementById('mathsin').innerHTML =
    "The sine value of 90 degree is " + Math.sin(90 * Math.PI / 180);
//example 37 Math.min()
document.getElementById('mathmin').innerHTML = Math.min(7, 5, -9, 0);
//example 38 Math.random()
function getRanInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function displayRandom() {
    document.getElementById('mathran').innerHTML = getRanInt(0, 10);
}
//example 39 Booleans
document.getElementById('bool').innerHTML = 10 > 9;
//example 40 Displaying Values from a Map
const fruit = new Map(
    [["apples", 500],
    ["pineapple", 200]]
);
let numb = fruit.get("apples");
document.getElementById('maparr').innerHTML
    = "There are " + numb + " apples";
//example 41 While Loop
let text = "";
let m = 0;
while (m < 10) {
    text += "<br>The number is " + m;
    m++;
}
document.getElementById('wh').innerHTML
    = text;
//example 42 Do While Loop
let textt = "";
let n = 0;
do {
    textt += "<br>The number is " + n;
    n++;
}
while (n < 10);
document.getElementById('dwh').innerHTML
    = textt;
//example 43 Loop with br statement
let st = "";
for (k = 0; k < 10; k++) {
    if (k === 3) { break; }
    st += "<br>The number is " + k;
}
document.getElementById('lwb').innerHTML
    = st;
//example 44 Loop with continue statement
let stc = "";
for (k = 0; k < 10; k++) {
    if (k === 3) { continue; }
    stc += "<br>The number is " + k;
}
document.getElementById('lwc').innerHTML
    = stc;
//example 45 Iterate over an Array
const nums = [2, 6, 8, 5];
let tx = "";

for (const x of nums) {
    tx += x + "<br>";
}
document.getElementById('iarr').innerHTML
    = tx;
//example 46 Iterate over a set
const letters = new Set(["a", "b", "c"]);
let txx = " ";

for (const x of letters) {
    txx += x + "<br>";
}
document.getElementById('ios').innerHTML
    = txx;
//example 47 Iterate over a set
const car = new Map([
    ["BMW"],
    ["VOLVO"],
    ["TOYOTA"]]);
let cars = " ";

for (const x of car) {
    cars += x + "<br>";
}
document.getElementById('iom').innerHTML
    = cars;
//example 48 The add() Method
const alphabates = new Set();

alphabates.add("a");
alphabates.add("b");
alphabates.add("c");
document.getElementById("addm").innerHTML
    = "The set has " + alphabates.size + " values.";

//example 49 The has() Method
const ltrs = new Set(["a", "b", "c"]);

answer = ltrs.has("d");
document.getElementById("hasm").innerHTML
    = "The answer is " + answer;
//example 50 Error Handling
try {
    adddlert("Welcome guest!");
}
catch (err) {
    document.getElementById("err").innerHTML = err.message;
}