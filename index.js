let input = document.querySelector("input");
function display(val){
    if(input.value=='0')
    {
        input.value = ""; 
    }
    input.value += val;
}

//! for AC Button
let AC = document.getElementById("AC");
AC.addEventListener("click",()=>{
    input.value = "";
})

//! for clear Button
let clear = document.getElementById("clear")
clear.addEventListener("click",()=>{
    input.value = input.value.slice(0,-1);
})

//! for res (=) Button
let res = document.getElementById("res");
res.addEventListener("click",()=>{
    input.value = eval(input.value);
})

//! for 0 button
let num0 = document.getElementById("num0");
num0.addEventListener("click",()=>{
    
    if(input.value == '0')
    {
        input.value = '0'
    }
    else
    {
        input.value +='0';
    }  
})
//! for (+) button
let btnplus = document.getElementById("plus");
btnplus.addEventListener("click",()=>{
    if(input.value.charAt(input.value.length-1) == '+')
    {
        input.value.charAt(input.value.length-1) == '+';
    }
    else
    {
        input.value += '+';
    }
})

//! for (-) button
let btnminus = document.getElementById("minus");
btnminus.addEventListener("click",()=>{
    if(input.value.charAt(input.value.length-1) == '-')
    {
        input.value.charAt(input.value.length-1) == '-';
    }
    else
    {
        input.value += '-';
    }
})

//! for (*) button
let btnmul = document.getElementById("mul");
btnmul.addEventListener("click",()=>{
    if(input.value.charAt(input.value.length-1) == '*')
    {
        input.value.charAt(input.value.length-1) == '*';
    }
    else
    {
        input.value += '*';
    }
})

//! for (/) button
let btndiv = document.getElementById("div");
btndiv.addEventListener("click",()=>{
    if(input.value.charAt(input.value.length-1) == '/')
    {
        input.value.charAt(input.value.length-1) == '/';
    }
    else
    {
        input.value += '/';
    }
})

//! for (%) button
let btnmod = document.getElementById("mod");
btnmod.addEventListener("click",()=>{
    if(input.value.charAt(input.value.length-1) == '%')
    {
        input.value.charAt(input.value.length-1) == '%';
    }
    else
    {
        input.value += '%';
    }
})

//! for (.) button
let btndot = document.getElementById("dot");
btndot.addEventListener("click",()=>{
    if(input.value.charAt(input.value.length-1) == '.')
    {
        input.value.charAt(input.value.length-1) == '.';
    }
    else
    {
        input.value += '.';
    }
})