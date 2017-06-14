var arr = {
  arr1: []
}

var calculatorInput = {
  displayArr: () => {
  var calcInput = arr.arr1[arr.arr1.length - 1];
  var target = document.getElementById("calc-input");
  target.innerHTML = calcInput;
    console.log(arr.arr1);
  },
  //Strange... function operates fine with regular function declaration, but if I use the arrow syntax then this.displayArr(); must be changed to calculatorInput.displayArr(); Look into.
  enterNumber: function(calcNum) {
    if(arr.arr1.length > 0) {
      arr.arr1.pop();
    }
    arr.arr1.push(calcNum);
    this.displayArr();
  }

}

var calculatorFunctions = {
  addition: function(calculatorElement, firstNum) {
      //Read number that's currently in the array into a variable.
    var num1 = firstNum;
    calculatorElement.addEventListener("click", function(e) {

    }, false);


    }

  }

var calculatorElement = document.querySelector(".calculator");
calculatorElement.addEventListener("click", function(e) {
  if(e.target !== e.currentTarget)  {
    var calcBtnPress = e.target.innerHTML;
    //Validates that calcNum was one of the number buttons pressed.
    if(!isNaN(calcBtnPress)) {
      var numToEnter = calcBtnPress;
      calculatorInput.enterNumber(numToEnter);
    }
    else if(calcBtnPress === '÷' || calcBtnPress === 'x' || calcBtnPress === '-' || calcBtnPress === '+' && arr.arr1 !== 0) {
      switch (calcBtnPress) {
        case '÷': calculatorFunctions.divide();
        case 'x': calculatorFunctions.multiply();
        case '-': calculatorFunctions.subtraction();
        case '+': calculatorFunctions.addition(calculatorElement, arr.arr1[0]);
      }
    }
  }
    console.log(numToEnter); //pass to enterNumber function in the calculatorInput object.
}, false);
