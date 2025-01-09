// Making it so that Jordan cant break
// Create object to keep track of values
const Calculator = {
    // Displays 0 on the calculator screen
    Display_Value: '0',
    //This holds the first operand for any expressions- setting it to null for now
    Firstt_Operand: null,
    //This checks whether or not the second operand has been inputted by the user
    Wait_Second_Operand: false,
    //This will hold the operator- we set it to null for now
    operator: null,

};

//This modifies values each time a button is clicked on
function Input_Digit(digit) {
    const {Display_Value, Wait_Second_Operand } = Calculator;
    //This checks if the Wait_Second_Operand is true & sets Display_Value
    // to the key that was clicked on
    if(Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;

    } else {
        //This overwrites Display_Value if the current value is 0
        // otherwise it adds on to it
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

// This section deals with decimal points
function Input_Decimal(dot) {
    //This ensures the accidental clicking of the decimal point doesnt
    // cause bugs in the application
    if (Calculator.Wait_Second_Operand === true) return;
    if(!Calculator.Display_Value.includes(dot)) {
        // We're saying if the Display_Value doesnt include a decimal point
        // then we want to insert one
        Calculator.Display_Value += dot;
    }
}

//This section handles operators
function Handle_Operator(Next_Operator) {
    const {Firstt_Operand, Display_Value, operator} = Calculator;
    //When an operator key is pressed we convert the current number
    //displayed on screen to a # & then store the result in
    // Calculator.First_Operand if it doesnt already exist
   const Value_Of_Input = parseFloat(Display_Value);
   //checks if an operator already exists & if Wait_Second_Operand is true,
   // then updates the operator and exits from the function.
   if(operator && Calculator.Wait_Second_Operand) {
    Calculator.operator = Next_Operator;
    return;
   }

   if(Firstt_Operand == null) {
    Calculator.Firstt_Operand = Value_Of_Input;
   } else if (operator) { // Checks if an operator already exists
    const Value_Now = Firstt_Operand || 0;
    //If operator exists- property lookup is performed for the operator
    //in the Perform_Calculation object & the function that matches the
    //operator is executed
    let result = Perform_Calculation[operator](Value_Now, Value_Of_Input);
    //Here we add a fixed amount of numbers after the decimal
    result = Number(result).toFixed(9);
    //This will remove any trailing 0's
    result = (result * 1).toString();
    Calculator.Display_Value = parseFloat(result);
    Calculator.Firstt_Operand = parseFloat(result);
   }
   Calculator.Wait_Second_Operand = true;
   Calculator.operator = Next_Operator;

}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.Firstt_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}



//This function updates the calcuator screen w/ the contents of Display_Value
function Update_Display() {
    //Makes use of the calculator-screen class to target the
    // input tag in the HTMl document
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();
//This section monitors button clicks
const keys = document.querySelector(".calculator-keys");

keys.addEventListener('click', (event) => {
    //The target variable is an object that represents the element 
    // that was clicked
    const { target } = event;
    //If the element that was clicked on is not a button- exit the function
    if(!target.matches('button')) {
        return;
    }



if(target.classList.contains('operator')) {
    Handle_Operator(target.value);
    Update_Display();
    return;
}


if(target.classList.contains('decimal')) {
    Input_Decimal(target.value);
    Update_Display();
    return;
}

//Ensures that AC clears all inputs from the Calculator screen
if(target.classList.contains('all-clear')) {
    Calculator_Reset();
    Update_Display();
    return;
}

Input_Digit(target.value);
Update_Display();

})