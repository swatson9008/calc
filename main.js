
/// Variables 

const displayScreen = document.getElementById("displayNum");
const buttons = document.getElementsByClassName("numbutton");
const length = buttons.length;

let firstOutput;
let secondOutput;

let output;
let outputS;
let outputFinal;
let outputF;

///object for numbers and operators

let calcStorage = {
    firstNum: "",
    firstOP: "",
    secondNum: "",
    secondOP: "",

};

//calculate listeners

calcB = document.getElementById("CalcS");
calcB.addEventListener("click", calcArray);


///loop for button listeners

for (let i = 0; i < length; i++){
    
    buttons[i].addEventListener("click", handle);
    buttons[i].addEventListener("keyup", handle);
    

}

//clear screen listeners

ClearS = document.getElementById("ClearScreen");
ClearS.addEventListener("click", ClearScreens);
ClearS.addEventListener("keyup", ClearScreens);




function handle (event) {
    let value = event.target.value;
    
    switch (value){
    case '+':
    case '-':
    case '*':
    case '/':
    case '=':
        if (calcStorage.firstOP === ""){calcStorage.firstOP += value;
            displayScreen.value += value;}
        else {calcStorage.secondOP += value;
        calcArray();
        calcStorage.firstOP = value;
        calcStorage.secondOP = "";
        calcStorage.secondNum = "";
        calcStorage.firstNum = outputS;
        displayScreen.value += value;
        }
    break;
        default:
            if (calcStorage.firstOP === ""){calcStorage.firstNum += value;
                displayScreen.value += value;
            }
            else {calcStorage.secondNum += value;
                displayScreen.value += value;}

    }

    console.log(calcStorage);
}


function calcArray(){
    let firstNo = parseInt(calcStorage.firstNum);
    let secondNo = parseInt(calcStorage.secondNum);
    let firstOPs = calcStorage.firstOP;
    
    operate(firstNo, secondNo, firstOPs);
    console.log(outputS);

}

///parsing floating numbers

function ParseFloat(str,val) {
    str = str.toString();
    str = str.slice(0, (str.indexOf(".")) + val + 1); 
    return Number(str);   
};

// addition
function addOP(a, b){
    sumTotal = a+b;
    return sumTotal;
    
};

console.log(addOP(1,2));

// subtraction
function subOP(a, b){
    subTotal = a-b;
    return subTotal;
};

console.log(subOP(9,4));

// multiplication
function multiOP(a, b){
    multiTotal = a*b;
    return multiTotal;
};

console.log(multiOP(6,6));

// division
function divideOP(a, b){
    divideTotal = a / b;
    return divideTotal;
};

console.log(divideOP(30,2));


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

function ClearScreens(){
    displayScreen.value = "";
    calcStorage = {
        firstNum: "",
        firstOP: "",
        secondNum: "",
        secondOP: "",
    };
}

/*

function handle (event) {
    let value = event.target.value;
    
    switch (value){
    case '+':
    case '-':
    case '*':
    case '/':
    case '=':
        if (calcStorage.firstOP === ""){calcStorage.firstOP += value;}
        else {calcStorage.secondOP += value;}
    break;
        default:
            if (calcStorage.firstOP === ""){calcStorage.firstNum += value;}
            else if (calcStorage.secondOP === ""){calcStorage.secondNum += value;}
            else {calcStorage.thirdNum += value;}
            /*if (calcStorage.operatorS == "+" || "-" || "*" || "/"){calcStorage.secondNum += value;}
            else {calcStorage.firstNum += value;} */ /*
        }
    
        /*if (value === "+" || "-" || "*" || "/"){calcStorage.operatorS += value;}
        else if (calcStorage.operatorS === "+" || "-" || "*" || "/"){calcStorage.secondNum += value;}
        /*else {calcStorage.firstNum += value;}
        displayScreen.value += value;
        console.log(calcStorage);
    }
    

function calcArray(){
    let firstNo = parseInt(calcStorage.firstNum);
    let secondNo = parseInt(calcStorage.secondNum);
    let thirdNo = parseInt(calcStorage.thirdNum);
    let firstOPs = calcStorage.firstOP;
    let secondOPs = calcStorage.secondOP;
    if (firstOPs === "*" || "/"){
        firstOutput = operate (firstNo, secondNo, firstOPs);
        secondOutput = operate (firstOutput, thirdNo, secondOPs);
        displayScreen.value = secondOutput;
        console.log(secondOutput);
    }
    else if (secondOPs === "*" || "/"){
        firstOutput = operate (secondNo, thirdNo, secondOPs);
        secondOutput = operate (firstNo, firstOutput, firstOPs);
        displayScreen.value = secondOutput;
        console.log(secondOutput);
    }
    else if (thirdNo === ""){
        firstOutput = operate (firstNo, secondNo, firstOPs);
        displayScreen.value = firstOutput;
        console.log(firstOutput);
    
    }
    else {
        firstOutput = operate (firstNo, secondNo, firstOPs);
        secondOutput = operate (firstOutput, thirdNo, secondOPs);
        displayScreen.value = secondOutput;
        console.log(secondOutput);
    }
    /*operate(a, b, calcStorage.firstOP);*/
    /*displayScreen.value = ParseFloat(finalOutput, 2);
    console.log(finalOutput);*/
    



/*function calcArray() {
  console.log("hi");
  /*console.log(calcStorage);
  console.log(calcStorage.firstNum);
  // console.log(operate());

/*calcB.addEventListener("click", (e) => 
e.preventDefault(), calcArray());

function calcArray(){
    
    console.log(calcStorage.firstNum);
};*/



/*const opButtons = document.querySelectorAll(".operatorButtons")
const opLength = opButtons.length;*/

//for operators

/*for (let i = 0; i < length; i++){
    
    opButtons[i].addEventListener("click", handleOP);
    opButtons[i].addEventListener("keyup", handleOP);

}*/

/*function handleOP (event) {
    const value = event.target.value;
        if (displayScreen.value = ""){
            alert("enter a number first")
        }
        else {
    displayScreen.value += value
    calcStorage.push(event.target.value);
    console.log(calcStorage);};
}*/

//clear function

/*for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", addNums(){
        displayScreen.value += this.value;
    });
}




/*

const buttons1 = document.getElementById("No1");

const buttons2 = document.getElementById("No2");

buttons1.addEventListener("click", e=> {
    e.preventDefault();
    displayScreen.value = e.target.value;}
    );

buttons2.addEventListener("click", e=> {
        e.preventDefault();
        displayScreen.value = e.target.value;}
        );

/*for (let i=0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", e=> {
        e.preventDefault();
        displayScreen.value = e.target.value;
    })
}

/*No1 = document.getElementById("No1").addEventListener("click", () => {
    displayScreen.insertAdjacentText('afterbegin', 1);
});


/*function displayInput(x){
displayScreen.insertAdjacentHTML(afterbegin.value, x);
     };



*/ 