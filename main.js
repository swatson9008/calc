
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


/*const mathOperations = {
    "+": function(x, y){
        return x + y;
    },
    "-": function(x, y){
        return x - y;
    },
    "*": function(x, y){
        return x * y;
    },
    "/": function(x, y){
        return x / y;
    },

}

function operate(x, y, z)*/

/*let operator = "x"*/

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



// wire the functions to the html calculator