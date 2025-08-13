let input = document.querySelector("input");
function display(val){
    if(input.value=='0')
    {
        input.value = ""; 
    }
    input.value += val;
}

let AC = document.getElementById("AC");
AC.addEventListener("click",()=>{
    input.value = "";
})

let clear = document.getElementById("clear")
clear.addEventListener("click",()=>{
    input.value = input.value.slice(0,-1);
})

let res = document.getElementById("res");
res.addEventListener("click",()=>{
    input.value = eval(input.value);
})

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