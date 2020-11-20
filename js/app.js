const button = document.querySelector('#btn');
const image = document.querySelector('#image');

button.addEventListener('click', (event) => {
    console.log('Hello from button click!');
    console.log(image);
    image.src = 'images/mountains-55067_640.png';
    event.preventDefault();
});

console.log("Hello");

// template literals
const name = "John";
const age = 25;
const job = "Web Developer";
const city = "London";

console.log(typeof(name));
console.log(typeof(age));

//function declaration
function hello(){
    return 'Hello';
};

//let html = "<ul><li>Name: " + name + "</li></ul>";
let html = `
<ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
<ul>
`;

//document.body.innerHTML = html;

//arrays and arrays method
let fruit = ["apples","orange", "bananas"];
console.log(fruit);
//add an element to the array
fruit.push(true);

fruit.unshift('tomato');

let orangeIndex = fruit.indexOf('orange');
console.log('Index of orange is', orangeIndex);

fruit.splice(orangeIndex, 1);

fruit.forEach(element => {
    console.log('Hello from fruit', element, typeof(element));
});

console.log(fruit);

//Date and Time

const today = new Date();
console.log(today);
const day = today.getDate();
const month = today.getMonth();
const year = today.getFullYear();
console.log(day,month+1,year);

let options = {weekday: 'long', month: 'long', year: 'numeric', day: 'numeric' };
let fullDate = today.toLocaleDateString('en-US', options);
console.log(fullDate);

let birthday = new Date('July 10 2003');
let fullBirthday = birthday.toLocaleDateString('en-US', options);
console.log(fullBirthday);