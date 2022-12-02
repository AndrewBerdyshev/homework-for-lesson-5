// task1
// function sayError(){
//     alert("Some error occured!");
// }
// sayError();

// task2
// function sayError(x){
//     alert(`Error ${x} occured!`);
// }
// sayError("Out of memory");

// task3
// function createHeaders(N){
//     for(let i = 1; i <= +N; i++){
//         let tag = document.createElement("h2");
//         tag.textContent = `Header${i}`;
//         document.body.appendChild(tag);
//     }
// }
// createHeaders(12);

// task4
// function checkPassword(x){
//     let passwrods = ["Step", "Web", "JavaScript"];
//     return passwrods.includes(x);
// }
// console.log(checkPassword("Step"));
// console.log(checkPassword("Web"));
// console.log(checkPassword("JavaScript"));
// console.log(checkPassword("Java"));

// task5
// function sign(x){
//     if(x < 0) return -1;
//     if(x > 0) return 1;
//     if(x === 0) return 0;
// }
// console.log(sign(-1));
// console.log(sign(0));
// console.log(sign(1));

// task6
// function getMonthById(id){
//     let months = {0:"Sunday", 1:"Monday", 2:"Tuesday", 3:"Wednesday", 4:"Thursday", 5:"Friday", 6:"Saturday"};
//     return months[id];
// }
// console.log(getMonthById(1));