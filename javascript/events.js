// const btn = document.querySelector("button")

// btn.onclick = hello;

// function hello(){
//     console.log("Hello Javascript")
// }

// btn.onclick = function (){
//     console.log("Hello Javascript")
// }

// ASSIGNMENT: event capturing & Event bubbling

// btn.addEventListener("click", function(){
//     console.log("Hello Javascript")
// })

// value - to get what's written inside a form element
// innerHTML - to get what's written inside a non-form element

// ASSIGNMENT: Difference between innerHTML & innerText

// const btn = document.querySelector(".b1")

// btn.addEventListener("click", function(){
//     const inp = document.querySelector("input")
//     // console.log(inp.value)
//     const para = document.querySelector("p")
//     para.innerHTML = inp.value
// })

// const select = document.querySelector("select");

// select.onchange = function () {
//   // const input1 = document.querySelector("input:first-of-type")
//   // const input2 = document.querySelector("input:last-of-type")

//   const input1 = document.querySelector("#btn1");
//   const input2 = document.querySelector("#btn2");
//   const para = document.querySelector("p");

//   // console.log(Number(input1.value) + Number(input2.value))

//   switch (select.value) {
//     case "+":
//       para.innerHTML = Number(input1.value) + Number(input2.value);
//       break;
//     case "-":
//       para.innerHTML = Number(input1.value) - Number(input2.value);
//       break;
//     case "*":
//       para.innerHTML = Number(input1.value) * Number(input2.value);
//       break;

//     case "/":
//       para.innerHTML = Number(input1.value) / Number(input2.value);
//       break;

//     case "%":
//       para.innerHTML = Number(input1.value) % Number(input2.value);
//       break;
//   }
// };








// const textarea = document.querySelector("textarea")
// const limit = 100

// textarea.onkeyup = function(){
//     const para = document.querySelector("p")
//     para.innerHTML = textarea.value
// }

// textarea.onkeyup = function(){
//     const para = document.querySelector("p")
//     if(limit - textarea.value.length <= 20){
//         para.style.color = "#f00"
//     }
//     else para.style.color = "#000"

//     para.innerHTML = limit - textarea.value.length
// }





// ASSIGNMENT: 
// 1. What is the difference between querySelector & querySelectorAll?


// QuerySelector returns a single element, i.e. the first matched element
// QuerySelectorAll returns a collection of all the matched elements


// console.log(document.querySelector("button"))
// console.log(document.querySelectorAll("button"))


// NO EVENT / PROPERTY CAN BE DIRECTLY APPLIED TO A COLLECTION OF ELEMENTS


// const buttons = document.querySelectorAll("button")

// buttons[0].onclick = function(){}
// buttons[1].onclick = function(){}
// buttons[2].onclick = function(){}
// buttons[3].onclick = function(){}
// buttons[4].onclick = function(){}


// for(let i=0;i<buttons.length;i++){
//     buttons[i].onclick = function(){
//         const para = document.querySelector("p")
//         para.innerHTML = buttons[i].innerHTML
//     }
// }






const anchors = document.querySelectorAll("a")
console.log(anchors)


for(let i=0;i<anchors.length;i++){
    anchors[i].onclick = function(e){
        e.preventDefault()
        console.log(e)
        const para = document.querySelector("p")
        para.innerHTML = anchors[i].innerHTML
    }
}

