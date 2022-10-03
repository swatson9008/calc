
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


function operate(a, b, c){

    switch(c){
        case "+":
            output = addOP(a, b);
            break;
        case "-":
            output = subOP(a, b);
            break;
        case "x":
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

console.log(operate(1,2, "+"))


// create a function that displays the numbers typed on the text box when typed

const displayScreen = document.getElementById("displayNum");
const buttons = document.querySelectorAll(".numButtons");
const length = buttons.length;

const opButtons = document.querySelectorAll(".operatorButtons")
const opLength = opButtons.length;

let calcStorage = [];

for (let i = 0; i < length; i++){
    
    buttons[i].addEventListener("click", handle);
    buttons[i].addEventListener("keyup", handle);
    

}

function handle (event) {
    const value = event.target.value;
    displayScreen.value += value;
    calcStorage.push(event.target.value);
    console.log(calcStorage);
}


//for operators

for (let i = 0; i < length; i++){
    
    opButtons[i].addEventListener("click", handleOP);
    opButtons[i].addEventListener("keyup", handleOP);

}

function handleOP (event) {
    const value = event.target.value;
        if (displayScreen.value = ""){
            alert("enter a number first")
        }
        else {
    displayScreen.value += value
    calcStorage.push(event.target.value);
    console.log(calcStorage);};
}

//clear function

ClearS = document.getElementById("ClearScreen");
ClearS.addEventListener("click", ClearScreens);
ClearS.addEventListener("keyup", ClearScreens);

function ClearScreens(){
    displayScreen.value = "";
    calcStorage = "";
}

// wire the functions to the html calculator




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