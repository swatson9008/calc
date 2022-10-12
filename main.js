
///Variables 

const displayScreen = document.getElementById("displayNum");
const buttons = document.getElementsByClassName("numbutton");
const length = buttons.length;

let firstOutput;
let secondOutput;

let output;
let outputS;
let outputFinal;
let outputF;
let sliceD;

//Calculate Listeners

calcB = document.getElementById("CalcS");
calcB.addEventListener("click", calcArray);

//Clear Screen Listeners

ClearS = document.getElementById("ClearScreen");
ClearS.addEventListener("click", ClearScreens);
ClearS.addEventListener("keyup", ClearScreens);

//Backspace Listeners

BackS = document.getElementById("BackSpace");
BackS.addEventListener("click", GoBack);
BackS.addEventListener("keyup", GoBack);

///Object to Store Numbers and Operators

let calcStorage = {
    firstNum: "",
    firstOP: "",
    secondNum: "",
    secondOP: "",

};


//Loop for Button Listeners

for (let i = 0; i < length; i++){
    
    buttons[i].addEventListener("click", handle);
    buttons[i].addEventListener("keyup", handle);
    

}


//function that handles the numbers and operators pressed and calls to calculate the values

function handle (event) {
    let value = event.target.value;
    
    switch (value){
    case '+':
    case '-':
        if (calcStorage.firstOP === ""){calcStorage.firstOP += value;
            displayScreen.value += value;}
        else {calcStorage.secondOP += value;
        calcArray();
        }
    break;
    case 'x':
        value = '*';
        if (calcStorage.firstOP === ""){calcStorage.firstOP += value;
            displayScreen.value += 'x';}
        else {calcStorage.secondOP += 'x';
        calcArray();
        }
    break;
    case '÷':
        value = '/';
        if (calcStorage.firstOP === ""){calcStorage.firstOP += value;
            displayScreen.value += "÷";}
        else {calcStorage.secondOP += "÷";
        calcArray();
        }
    break;
    case '.':
        if ((calcStorage.firstOP === "") && (calcStorage.firstNum.includes("."))){
            alert("do not enter multiple decimals per number");
        }
        else if ((calcStorage.firstOP === "+" || "-" || "*" || "/") && (calcStorage.secondNum.includes("."))){
            alert("do not enter multiple decimals per number");
        }
        else if (calcStorage.firstOP === ""){calcStorage.firstNum += value; displayScreen.value += value;}
        else{calcStorage.secondNum += value; displayScreen.value += value;}
    break;
        default:
            if ((calcStorage.firstOP === "") && (value === "0")){alert("error")
                }
            if (calcStorage.firstOP === ""){calcStorage.firstNum += value;
                displayScreen.value += value;
            }
            else {calcStorage.secondNum += value;
                displayScreen.value += value;}

    }

    console.log(calcStorage);
}


//function that puts the values in correct positions and calls the operate function

function calcArray (){
    let firstNo = parseFloat(calcStorage.firstNum);
    let secondNo = parseFloat(calcStorage.secondNum);
    let firstOPs = calcStorage.firstOP;
    
    if (firstNo === "" || secondNo === "" || firstOPs === ""){
        alert("please enter two numbers and an operator");
    }
    else if (calcStorage.secondOP === ""){
        operate(firstNo, secondNo, firstOPs);
        calcStorage.firstOP = "";
        calcStorage.secondOP = "";
        calcStorage.secondNum = "";
        outputF = outputS.toString();
        calcStorage.firstNum = outputF;
        displayScreen.value = outputF;
        displayScreen.value += calcStorage.firstOP;

    }
    else {operate(firstNo, secondNo, firstOPs);
        calcStorage.firstOP = calcStorage.secondOP;
        calcStorage.secondOP = "";
        calcStorage.secondNum = "";
        outputF = outputS.toString();
        calcStorage.firstNum = outputF;
        displayScreen.value = outputF;
        displayScreen.value += calcStorage.firstOP;}
    console.log(outputS);

}

///Parses Floating Numbers

function ParseFloat(str,val) {
    str = str.toString();
    str = str.slice(0, (str.indexOf(".")) + val + 1); 
    return Number(str);   
};

//addition
function addOP(a, b){
    sumTotal = a+b;
    return sumTotal;
    
};

/*console.log(addOP(1,2));*/

//subtraction
function subOP(a, b){
    subTotal = a-b;
    return subTotal;
};

/*console.log(subOP(9,4));*/

//multiplication
function multiOP(a, b){
    multiTotal = a*b;
    return multiTotal;
};

/*console.log(multiOP(6,6));*/

//division
function divideOP(a, b){
    divideTotal = a / b;
    return divideTotal;
};

/*console.log(divideOP(30,2));*/


//function that decides what operation to call
function operate(a, b, c){

    switch(c){
        case "+":
            output = addOP(a, b);
            break;
        case "-":
            output = subOP(a, b);
            break;
        case "*":
            output = multiOP(a, b);
            break;
        case "/":
            if (b === 0){
                alert("You cant do that")
                ClearScreens
            } else {
            output = divideOP(a, b);}
            break;
        
    }
    outputS = Math.floor(output * 100) / 100;
    return outputS;
}

//function that clears screen
function ClearScreens(){
    displayScreen.value = "";
    calcStorage = {
        firstNum: "",
        firstOP: "",
        secondNum: "",
        secondOP: "",
    };
}

//function that erases the last value entered

function GoBack (){
    displayScreen.value = displayScreen.value.substring(0, displayScreen.value.length - 1);
    if (calcStorage.firstOP === "")
    {calcStorage.firstNum = calcStorage.firstNum.slice(0, -1)}
    else if (calcStorage.secondNum === "")
    {calcStorage.firstOP = calcStorage.firstOP.slice(0, -1)}
    else (calcStorage.secondNum = calcStorage.secondNum.slice(0, -1))
    console.log(calcStorage);

}

