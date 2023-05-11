let btn1=document.getElementById("btn1")
let resultBox=document.getElementById("resultBox")

for(let i=0; i<=10; i++){
     document.getElementById(`btn${i}`).addEventListener("click",()=>{
    console.log(document.getElementById(`btn${i}`).innerHTML)
    let clickBtn= document.getElementById(`btn${i}`).innerHTML;

    if(resultBox.value=="0"){
        resultBox.value=""
    }
        resultBox.value+=clickBtn
    })
}

let btnPlus = document.getElementById("btnPlus")
btnPlus.addEventListener("click", ()=>{
    let resultItem=resultBox.value;
    if(resultItem=="0"){
        return;
    }
    else if(resultItem[resultItem.length-1]=="+"){
        return
    }
    else if(resultItem[resultItem.length-1]=="-" || resultItem[resultItem.length-1] == "*" || resultItem[resultItem.length-1] == "/" ||
           resultItem[resultItem.length-1] == "%")  {
        resultBox.value = resultItem.substring(0, resultItem.length-1) + btnPlus.innerHTML;
    } else {
        resultBox.value += btnPlus.innerHTML;
    }
})

let btnMinus = document.getElementById("btnMinus")
btnMinus.addEventListener("click", ()=>{
    let resultItem=resultBox.value;
    if(resultItem=="0"){
        return;
    }
    else if(resultItem[resultItem.length-1]=="-"){
        return
    }
    else if(resultItem[resultItem.length-1]=="+" || resultItem[resultItem.length-1] == "*" || resultItem[resultItem.length-1] == "/" ||
           resultItem[resultItem.length-1] == "%")  {
        resultBox.value = resultItem.substring(0, resultItem.length-1) + btnMinus.innerHTML;
    } else {
        resultBox.value += btnMinus.innerHTML;
    }
})

let btnDivision = document.getElementById("btnDivision")
btnDivision.addEventListener("click", ()=>{
    let resultItem=resultBox.value;
    if(resultItem=="0"){
        return;
    }
    else if(resultItem[resultItem.length-1]=="/"){
        return
    }
    else if(resultItem[resultItem.length-1]=="-" || resultItem[resultItem.length-1] == "*" || resultItem[resultItem.length-1] == "+" ||
           resultItem[resultItem.length-1] == "%")  {
        resultBox.value = resultItem.substring(0, resultItem.length-1) + btnDivision.innerHTML;
    } else {
        resultBox.value += btnDivision.innerHTML;
    }
})

let btnMulti = document.getElementById("btnMulti")
btnMulti.addEventListener("click", ()=>{
    let resultItem=resultBox.value;
    if(resultItem=="0"){
        return;
    }
    else if(resultItem[resultItem.length-1]=="*"){
        return
    }
    else if(resultItem[resultItem.length-1]=="-" || resultItem[resultItem.length-1] == "+" || resultItem[resultItem.length-1] == "/" ||
           resultItem[resultItem.length-1] == "%")  {
        resultBox.value = resultItem.substring(0, resultItem.length-1) + btnMulti.innerHTML;
    } else {
        resultBox.value += btnMulti.innerHTML;
    }
})

let btnPercentage = document.getElementById("btnPercentage")
btnPercentage.addEventListener("click", ()=>{
    let resultItem=resultBox.value;
    if(resultItem=="0"){
        return;
    }
    else if(resultItem[resultItem.length-1]=="%"){
        return
    }
    else if(resultItem[resultItem.length-1]=="-" || resultItem[resultItem.length-1] == "*" || resultItem[resultItem.length-1] == "/" ||
           resultItem[resultItem.length-1] == "+")  {
        resultBox.value = resultItem.substring(0, resultItem.length-1) + btnPercentage.innerHTML;
    } else {
        resultBox.value += btnPercentage.innerHTML;
    }
})

let btnEqual= document.getElementById("btnEqual")
btnEqual.addEventListener("click",()=>{
    let result= eval(resultBox.value)
    resultBox.value=result;
})

let btnDelete = document.getElementById("btnDelete")
btnDelete.addEventListener("click", ()=>{
    let result=resultBox.value
    if(result.length==1){
        resultBox.value="0"
    return
    }
    result= result.substring(0, result.length-1)
    resultBox.value=result;
})

let btnClear = document.getElementById("btnClear")
btnClear.addEventListener("click", ()=>{
    resultBox.value=0
    return;
})

let btnDot = document.getElementById("btnDot")
btnDot.addEventListener("click", ()=>{
    let result=resultBox.value;
    if(result[result.length-1]=="."){
        return
    }
    else if(result.includes(".")){
        return
    }
    else{
    resultBox.value +="."
    }
    
})

