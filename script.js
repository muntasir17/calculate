// let scrollRevealOption = {
//     distance:"50px",
//     origin:"left",
//     duration: 1000,
// };

// ScrollReveal().reveal(".card-item img",{
//     ...scrollRevealOption,
// // origin:"rigth",
// });
// //  ScrollReveal().reveal(".card-item .discount",{
// //      ...scrollRevealOption,
// //  delay : 400,
// // });

let display = document.getElementById("display");
function aplicablekey(input){
display.value += input;
}
function clearbtn(){
    display.value = '';
}
function resultBtny(){
    try{
        display.value = eval(display.value);
    }
    catch(bug){
display.value = 'Error'
    }
}
















