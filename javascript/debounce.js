// In JavaScript, a debounce function makes sure that your code is only triggered once per user input.

//Search box suggestions, text-field auto-saves, and eliminating double-button clicks are all use cases for debounce.

// const input = document.querySelector("input");
// input.addEventListener("keyup", process);

// function process() {
//   debounce(logToConsole, 1000)
// }


// function debounce(callback, timeout){
//     let timer;
//     return () => {
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             callback()
//         }, timeout)
//     }
// }

// function logToConsole(){
//     console.log("Hello There, I am debounced function");
// }







function debounce(func, timeout = 300) {
    let timer;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func();
      }, timeout);
    };
  }
  function saveInput() {
    console.log("Saving data");
  }
  const processChange = debounce(() => saveInput());

// const processChange = () => {
//     console.log("Hello World")
// }

