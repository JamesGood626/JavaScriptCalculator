var calculatorElement = document.querySelector(".calculator");

 
var arr = {
  arr1: [],
  numerousDigits: []
}

var multipleCasesHandled = {
  listener: function(e) {
  if(e.target !== e.currentTarget)  {
    var calcBtnPress = e.target.innerHTML;
    //Validates that calcNum was one of the number buttons pressed.
      if(!isNaN(calcBtnPress)) {
      var numToEnter = calcBtnPress;
      calculatorInput.multipleDigits(numToEnter);
      }
      else if (calcBtnPress === '.') {
        calculatorInput.multipleDigits(calcBtnPress);
      }
      else if((calcBtnPress === '÷' || calcBtnPress === 'x' || calcBtnPress === '-' || calcBtnPress === '+')
            && (arr.numerousDigits.length === 1 || arr.arr1.length === 1)) {
          if(arr.numerousDigits > 0) {
          calculatorInput.consolidateMultipleDigits();
          }
          var operator = calcBtnPress;
          calculatorInput.enterOperator(operator);
      }
      else if(calcBtnPress === '=' && arr.arr1.length === 2) {
          console.log("= has been pressed");
          if(arr.numerousDigits !== 0) {
          calculatorInput.consolidateMultipleDigits();
          }
          var array = arr.arr1;
          calculatorInput.calculateArray(array);
      }
      else if(calcBtnPress === 'C') {
          calculatorInput.resetArray();
      }
    }
  } //End multipleCasesHandled.listener
}

var calculatorInput = {
  displayArr: () => {
   if(arr.arr1.length !== 0 && (!isNaN(arr.arr1[arr.arr1.length - 1]))) {
      var calcInput = arr.arr1[arr.arr1.length - 1];
      var target = document.getElementById("calc-input");
      target.innerHTML = calcInput;
   }
   else if(arr.numerousDigits !== 0) {
      var target = document.getElementById("calc-input");
      var temp = arr.numerousDigits.join('');
      for(let i = arr.numerousDigits.length; i > 0; i--) {
         arr.numerousDigits.pop();
      }
      arr.numerousDigits.push(temp);
      target.innerHTML = temp;
   }
 }, //end calculatorInput.displayArr

  resetArray: () => {
    if (arr.arr1.length > 0) {
      for(let i = arr.arr1.length; i > 0; i--) {
        arr.arr1.pop();
      }
    }
    else if (arr.numerousDigits.length > 0) {
      for(let i = arr.numerousDigits.length; i > 0; i--) {
        arr.numerousDigits.pop();
      }
    }
    var target = document.getElementById("calc-input");
    target.innerHTML = '';
  }, //end calculatorInput.resetArray

  multipleDigits: function(num) {
    arr.numerousDigits.push(num);
    this.displayArr();
    calculatorElement.addEventListener("click", multipleCasesHandled.listener, false);
  }, //end calculatorInput.multipleDigits

  consolidateMultipleDigits: function() {
    console.log("Inside consolidate multiple digits");
    //initiated when any of the other buttons are pressed. only if there's something in the array
    this.enterNumber(arr.numerousDigits[0]);
    for(let i = arr.numerousDigits.length; i > 0; i--) {
       arr.numerousDigits.pop();
    }
  }, //End consolidateMultipleDigits

  enterNumber: function(calcNum) {
    if(arr.arr1.length === 0 || arr.arr1.length === 2) {
      arr.arr1.push(calcNum);
      console.log("result of first if statement");
      this.displayArr();
    }
    else if(arr.arr1.length > 3 || arr.arr1.length === 1) {
        for(let i = arr.arr1.length; i > 0; i--) {
          arr.arr1.pop();
        }
        arr.arr1.push(calcNum);
        this.displayArr();
    }
  }, //end calculatorInput.enterNumber
  
  enterOperator: function(operator) {
        if(operator === 'x') {
          operator = '*';
        }
        else if(operator === '÷') {
          operator = '/';
        }
        arr.arr1.push(operator);
        console.log(arr.arr1);
  }, //end calculatorInput.enterOperator

  calculateArray: function(calculate) {
        var total = eval(calculate.join(''));
        var calcInput = total;
        var target = document.getElementById("calc-input");
        target.innerHTML = total;
        console.log("The total is " + total);
        for(let i = arr.arr1.length; i > 0; i--) {
          arr.arr1.pop();
          console.log("result of calculateArray statement");
        }
        this.enterNumber(total);
    } //end calculatorInput.calculateArray
}


calculatorElement.addEventListener("click", multipleCasesHandled.listener, false);
