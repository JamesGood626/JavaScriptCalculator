// 1. User inputs a series of numbers which are pushed to userInputArr
// 2. User selects operator; the series of numbers in step one are joined, and pushed to calculateArr[0], along with the            // operator to calculateArr[1]
// 3. User inputs more numbers -> Wait on user to press '=' after done entering numbers
   // Or User hits clear -> calculateArr is popped
// 4. When = is pressed, the second series of numbers will be joined and pushed to calculateArr[2], followed by
   // a call to the calculate function if calculatteArr.length === 3
// 5. calculateArr will be cleared and the result of the calculation will be pushed to calculateArr[0]


const calculatorElement = document.querySelector('calculator')
const display = document.getElementById('calc-display')


class Calculator {
  constructor(calc, display) {
    this.calculateArr = []
    this.auxArr = []
    this.display = display

    calculatorElement.addEventListener("click", this.checkUserInput.bind(this))
  }
  
  checkUserInput(e) {
    if(e.target.id === 'btn') {
      let input = e.target.innerHTML
      if (input === 'C') {
        this.clearArrays(false)
      }
      else if(isNaN(input)) {
        this.enterOperator(input)  
      }
      else {
        this.enterUserInput(input)
      }  
    }
  } // End checkUserInput

  enterUserInput(input) {
    this.auxArr.push(input)
    console.log('User input inside enterUserInput: ' + this.auxArr)
    this.display.innerHTML = this.auxArr.join('')
  } // End enterUserInput
  
  enterOperator(input) {
    let arr = this.calculateArr
    let length = this.calculateArr.length
    let setDigits = this.auxArr.join('')

    arr.push(setDigits)
    console.log("arr inside enterOperator: " + arr)
    this.clearArrays(false)
    
    if ((input === '÷' || input === 'x' || input === '-' || input === '+') && length === 0) {
      arr.push(input)
    }
    else if (input === '=' && length === 2) {
      let total = this.calculateTotal(arr[0], arr[2], arr[1])
      console.log("total inside enterOperator's else if: " + total)
      this.clearArrays(true, total)
      arr.push(total)
    }
  } // Enter enterOperator
  
  calculateTotal(a, b, operator) {
    let firstInt = Number(a)
    let secondInt = Number(b)

    switch(operator){
      case '+':
        return (firstInt + secondInt)
      case '-':
        return (firstInt - secondInt)
      case 'x':
        return (firstInt * secondInt)
      case '÷':
        return (firstInt / secondInt)
    }
  } // End calculateTotal

  clearArrays(both, total) {
    this.auxArr = []
    this.display.innerHTML = ''

    if(both === true) {
      let result = total.toString()
      this.calculateArr = []
      this.auxArr[0] = result
      this.display.innerHTML = result
    }
  } // End clearArrays
  
}

const calculator = new Calculator(calculatorElement, display)