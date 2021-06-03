class Calculator{
    constructor(memoryText, currentElementText){
        this.memoryText = memoryText;
        this.currentElementText = currentElementText;
        this.reset();
    }

    reset() {
        this.memory = '';
        this.currentElement = '';
        this.operation = undefined;
    }

    delete(){
        this.currentElement = this.currentElement.toString().slice(0, -1);
    }

    addNumber(number){
        if(number === '.' && this.currentElement.includes('.')){
            return;
        }

        this.currentElement = this.currentElement.toString() + number.toString();
    }

    chooseOperation(operation){
        if (this.currentElement === '') return
        if (this.memory !== '') {
            this.compute();
        }
        this.operation = operation;
        this.memory = this.currentElement;
        this.currentElement = '';
    }

    compute(){
        let computation
        const prev = parseFloat(this.memory)
        const current = parseFloat(this.currentElement)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
          case '+':
            computation = prev + current
            break
          case '-':
            computation = prev - current
            break
          case 'x`':
            computation = prev * current
            break
          case '÷':
            computation = prev / current
            break
          default:
            return
        }
        this.currentElement = computation;
        this.operation = undefined;
        this.memory = '';
    }

    getDisplayNumber(number){
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay;
        if (isNaN(integerDigits)) {
        integerDisplay = '';
        } else {
        integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 });
        }
        if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`;
        } else {
        return integerDisplay;
        }
    }

    updateDisplay(){
        this.currentElementText.innerText =
        this.getDisplayNumber(this.currentElement);
        if (this.operation != null) {
        this.memoryText.innerText =
            `${this.getDisplayNumber(this.memory)} ${this.operation}`;
        } else {
        this.memoryText.innerText = '';
        }
    }
}




MAX_LENGTH = 21;
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const deleteButton = document.querySelector('[data-delete]');
const resetButton = document.querySelector('[data-reset]');
const equalsButton = document.querySelector('[data-equal]');
const currentElementText =  document.querySelector('[data-current-element]');
const memoryText = document.querySelector('[data-memory-element]');

const calculator = new Calculator(memoryText, currentElementText);

numberButtons.forEach(button =>{
    button.addEventListener('click', () => {
        console.log(calculator.addNumber(button.innerText));
        calculator.updateDisplay();
    });
});

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  })
})

equalsButton.addEventListener('click', button => {
  calculator.compute();
  calculator.updateDisplay();
})

resetButton.addEventListener('click', button => {
  calculator.reset();
  calculator.updateDisplay();
})

deleteButton.addEventListener('click', button => {
  calculator.delete();
  calculator.updateDisplay();
})