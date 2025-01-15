function getReceipt() {
    // This initializes the string so it can get passed from
    // function to function, growing line by line into a full receipt  
    //in my notes- a medium pizza w/ pepperoni and bacon
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName('size');
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";      // <h3>You ordered:</h3>Medium Pizza<br>
            console.log(text1);
        }
    }

    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {           //sizeTotal = 10
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }

    runningTotal = sizeTotal;    //running total = 10
    console.log(selectedSize + " = $" + sizeTotal + ".00");      //Medium Pizza = $10.00
    console.log("size text1: " + text1);                    // size text1: You ordered: Medium Pizza
    console.log("subtotal $" + runningTotal + ".00");       // subtotal $10.00
    //these variables will get passed on to each function
    getTopping(runningTotal, text1);                        //getTopping(10, You ordered: Medium Pizza)
};


function getTopping(runningTotal, text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName('toppings');
    var veggieArray = document.getElementsByClassName('veggies');

    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: (" + toppingArray[j].value + ")");    //"selected topping item: ("Pepperoni"); "selected topping item: ("Bacon")
            text1 = text1 + toppingArray[j].value + "<br>";
            console.log(text1);  //<h3>You Ordered:</h3>Medium Pizza<br>Pepperoni<br>Bacon<br>

        }
    }

    for (var j = 0; j < veggieArray.length; j++) {
        if (veggieArray[j].checked) {
            selectedTopping.push(veggieArray[j].value);
            console.log("selected topping item: (" + veggieArray[j].value + ")");    //"selected topping item: ("Pepperoni"); "selected topping item: ("Bacon")
            text1 = text1 + veggieArray[j].value + "<br>";
            console.log(text1);  //<h3>You Ordered:</h3>Medium Pizza<br>Pepperoni<br>Bacon<br>

        }
    }

    var toppingCount = selectedTopping.length;  //2
    console.log(selectedTopping.length);
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);    //this puts toppingTotal at 1
    } else {
        toppingTotal = 0;
    }

    runningTotal = (runningTotal + toppingTotal) //  10 + 1
    console.log("total selected topping items: " + toppingCount); //total selected topping items: 2
    console.log(toppingCount + " topping - 1 free topping = " + "$" + toppingTotal + ".00"); // 2 topping - 1 free topping = $1.00
    console.log("topping text1: " + text1);  //topping text1: You ordered: Medium Pizza Pepperoni Bacon
    console.log("Purchase Total: " + "S" + runningTotal + ".00"); //Purchase Total: $11.00
    document.getElementById("showText").innerHTML = text1;  //You ordered: Medium Pizza Pepperoni Bacon
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";  //Total: $11.00 (h3 in bold)
};