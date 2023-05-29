const btn = document.querySelector("button");

btn.onclick = function () {
  console.log("Hello JS");
};

//Callbacks: a function called/invoked at an appropriate time( inside a function ), not when it is interpreted by the browser.

// function hello(fname, lname, getFullName){
//     return getFullName(fname, lname)
// }

// function getFullName(f, l){
//     return f + " " + l;
// }

// console.log(hello('Rohit', 'Jain', getFullName))

// btn.onclick = console.log("dshdl");

// const result = callThisFnBack(5, cbk);

// function callThisFnBack(num, callback){
//     let a = 'Akash'

//     callback(){

//     }
// }

// function a() {
//   let x = 1;
//   function b() {
//     console.log(x);
//     function c() {
//       console.log(x + 2);
//     }
//     c();
//   }
//   b();
// }
// a();

//Closures: are functions defined inside another functions with access to its lexical(surrounding) scope

// function func1(){
//     setTimeout(() => {
//         console.log(x)
//         console.log(y)
//     },2000)
//     var x = 1
//     let y = 2
// }

// func1()

// setTimeout(() => {console.log("Aj")}, 100)
// setTimeout(() => {console.log("Kaun")}, 0)
// setTimeout(() => {console.log("Jeetega")}, 200)

// const result = fetch("https://randomuser.me/api");

// console.log(result);

// fetch('https://randomuser.me/api')
// .then((response) => {return response.json()})
// .then((result) => {console.log(result)})
// .catch((error) => {console.log(error)})

async function fetchData() {
  try {
    const response = await fetch("https://randomuser.me/api");
    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}
fetchData();
