import romanToInt from './romToInt.js';

const romanInput = document.getElementById("1");
const decimalValue = document.getElementById("2");
const buttonConvert = document.getElementById("3");

buttonConvert.addEventListener("click",(e)=>{
    e.preventDefault();
    decimalValue.innerHTML = romanToInt(romanInput.value);

});