
// write functions that can add, subtract, multiply and divide from the console log


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
// create the operate function to take the operator and two numbers and call one of the math functions

let output;

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
            } else {
            output = divideOP(a, b);}
            break;
        
    }
    return output;
}

console.log(operate(1, 3, "+"))


// create a function that displays the numbers typed on the text box when typed

const displayScreen = document.getElementById("displayNum");
const buttons = document.getElementsByClassName("numbutton");
const length = buttons.length;


let calcStorage = {
    firstNum: "",
    operatorS: "",
    secondNum: "",


};



for (let i = 0; i < length; i++){
    
    buttons[i].addEventListener("click", handle);
    buttons[i].addEventListener("keyup", handle);
    

}

function handle (event) {
    let value = event.target.value;
    
    switch (value){
    case '+':
    case '-':
    case '*':
    case '/':
    case '=':
        calcStorage.operatorS += value;
    break;
        default:
            if (calcStorage.operatorS === ""){calcStorage.firstNum += value;}
            else {calcStorage.secondNum += value;}
            /*if (calcStorage.operatorS == "+" || "-" || "*" || "/"){calcStorage.secondNum += value;}
            else {calcStorage.firstNum += value;} */
    }
    
    /*if (value === "+" || "-" || "*" || "/"){calcStorage.operatorS += value;}
    else if (calcStorage.operatorS === "+" || "-" || "*" || "/"){calcStorage.secondNum += value;}
    /*else {calcStorage.firstNum += value;}*/
    displayScreen.value += value;
    console.log(calcStorage);
}


ClearS = document.getElementById("ClearScreen");
ClearS.addEventListener("click", ClearScreens);
ClearS.addEventListener("keyup", ClearScreens);

function ClearScreens(){
    displayScreen.value = "";
    calcStorage = {
        firstNum: "",
        operatorS: "",
        secondNum: "",
    };
}

//calculate

calcB = document.getElementById("CalcS");
calcB.addEventListener("click", parseNo);

function parseNo(){
    let a = parseInt(calcStorage.firstNum);
    let b = parseInt(calcStorage.secondNum);
    operate(a, b, calcStorage.operatorS);
    displayScreen.value = output;
    console.log(output);
    
}



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