var arr = {
  arr1: []
}

var calculatorInput = {
  displayArr: function () {
  var calcInput = arr.arr1[arr.arr1.length - 1];
  var target = document.getElementById("calc-input");
  target.innerHTML = calcInput;
    console.log(arr.arr1);
  },
  enterZero: function() {
    if(arr.arr1.length > 0) {
      arr.arr1.pop();
    }
    arr.arr1.push(0);
    this.displayArr();
  },
  enterOne: function() {
    if(arr.arr1.length > 0) {
      arr.arr1.pop();
    }
    arr.arr1.push(1);
    this.displayArr();
  },
  enterTwo: function() {
    if(arr.arr1.length > 0) {
      arr.arr1.pop();
    }
    arr.arr1.push(2);
    this.displayArr();
  },
  enterThree: function() {
    if(arr.arr1.length > 0) {
      arr.arr1.pop();
    }
    arr.arr1.push(3);
    this.displayArr();
  },
  enterFour: function() {
    if(arr.arr1.length > 0) {
      arr.arr1.pop();
    }
    arr.arr1.push(4);
    this.displayArr();
  },
  enterFive: function() {
    if(arr.arr1.length > 0) {
      arr.arr1.pop();
    }
    arr.arr1.push(5);
    this.displayArr();
  },
  enterSix: function() {
    if(arr.arr1.length > 0) {
      arr.arr1.pop();
    }
    arr.arr1.push(6);
    this.displayArr();
  },
  enterSeven: function() {
    if(arr.arr1.length > 0) {
      arr.arr1.pop();
    }
    arr.arr1.push(7);
    this.displayArr();
  },
  enterEight: function() {
    if(arr.arr1.length > 0) {
      arr.arr1.pop();
    }
    arr.arr1.push(8);
    this.displayArr();
  },
  enterNine: function() {
    if(arr.arr1.length > 0) {
      arr.arr1.pop();
    }
    arr.arr1.push(9);
    this.displayArr();
  },
}

var calculatorFunctions = {
  addArray: function() {
      console.log('addArray ran');

    return function() {
      console.log('returned function ran');
      $('number').click();
      totalSum = arr1[0] + arr1[1];
      for(let i = arr1.length; i > 0; i--){
        arr1.pop();
      }
    }

  }
}

var addition = document.getElementById("addition");
var subtraction = document.getElementById("subtraction");
var returnedAddition = addition.addEventListener('click', calculator.addArray);
console.log(returnedAddition);
