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
  addArray: function() {
      console.log('addArray ran');

    }

  }

var calculatorElement = document.querySelector(".calculator");
calculatorElement.addEventListener("click", function(e) {
  if(e.target !== e.currentTarget)  {
    var calcNum = e.target.innerHTML;
    //Validates that calcNum was one of the number buttons pressed.
    if(!isNaN(calcNum)) {
      var numToEnter = calcNum;
      calculatorInput.enterNumber(numToEnter);
    }
  }
    console.log(numToEnter); //pass to enterNumber function in the calculatorInput object.
}, false);

var addition = document.getElementById("addition");
var subtraction = document.getElementById("subtraction");
var returnedAddition = addition.addEventListener('click', calculator.addArray);
