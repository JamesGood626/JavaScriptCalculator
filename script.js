var arr = {
  arr1: [],
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
    if(arr.arr1.length === 2 && (arr.arr1[1] === "+" || arr.arr1[1] === "-" || arr.arr1[1] === "x" || arr.arr1[1] === "/"))
      {
         arr.arr1.push(calcNum);
      }
    else if(arr.arr1.length > 0 || arr.arr1.length > 3) {
        for(let i = arr.arr1.length; i > 0; i--) {
          arr.arr1.pop();
        }
      }
    else {
      arr.arr1.push(calcNum);
      }
    this.displayArr();
  },
  enterOperator: function(operator) {
      arr.arr1.push(operator);
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
    else if(calcBtnPress === '÷' || calcBtnPress === 'x' || calcBtnPress === '-' || calcBtnPress === '+' && arr.arr1.length === 1) {
      var operator = calcBtnPress;
      calculatorInput.enterOperator(operator);
    }
  }
}, false);
