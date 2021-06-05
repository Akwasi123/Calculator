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
        if (this.currentElement === '') return;
        if (this.memory !== '') {
            this.compute();
        }
        this.operation = operation;
        this.memory = this.currentElement;
        this.currentElement = '';
    }

    compute(){
        let computation;
        const prev = parseFloat(this.memory);
        const current = parseFloat(this.currentElement);
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
          case '+':
            computation = prev + current;
            break;
          case '-':
            computation = prev - current;
            break;
          case '*':
            computation = prev * current;
            break;
          case '÷':
            computation = prev / current;
            break;
          default:
            return;
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
        this.currentElementText.innerText = this.getDisplayNumber(this.currentElement);
        if (this.operation != null) {
        this.memoryText.innerText = `${this.getDisplayNumber(this.memory)} ${this.operation}`;
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
        calculator.addNumber(button.innerText);
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


const themeButtons = document.querySelector('.theme-toggle').children;
const body = document.body;
const entryPoint = document.querySelector('.entry-point');
const themeToggle = document.querySelector('.theme-toggle');
const keyPad = document.querySelector('.numpad');
const pageText = document.querySelectorAll('.t-change');
const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');

themeButtons[0].addEventListener('click', () =>{
    themeButtons[0].style.backgroundColor = 'hsl(6, 63%, 50%)';
    themeOne();
});

themeButtons[1].addEventListener('click', () =>{
    themeButtons[1].style.backgroundColor = 'hsl(6, 70%, 34%)';
    themeTwo();
});

themeButtons[2].addEventListener('click', () =>{themeButtons[1].style.backgroundColor = 'hsl(223, 31%, 20%)';
    themeButtons[2].style.backgroundColor = 'hsl(176, 100%, 44%)';
    themeThree();
});



function themeOne(){
    body.style.backgroundColor = "hsl(222, 26%, 31%)";
    entryPoint.style.backgroundColor = "hsl(224, 36%, 15%)";
    themeToggle.style.backgroundColor = "hsl(223, 31%, 20%)";
    keyPad.style.backgroundColor = "hsl(223, 31%, 20%)";
    deleteButton.style.backgroundColor = "hsl(225, 21%, 49%)";
    deleteButton.style.boxShadow = "0px 2px 3px hsl(224, 28%, 35%)";
    resetButton.style.backgroundColor = "hsl(225, 21%, 49%)";
    resetButton.style.boxShadow = "0px 2px 3px hsl(224, 28%, 35%)";
    equalsButton.style.backgroundColor = "hsl(6, 63%, 50%)";
    equalsButton.style.boxShadow = "0px 2px 3px hsl(6, 70%, 34%)";
    pageText[0].style.color = "hsl(0, 0%, 100%)";
    pageText[1].style.color = "hsl(0, 0%, 100%)";
    pageText[2].style.color = "hsl(0, 0%, 100%)";
    pageText[3].style.color = "hsl(0, 0%, 100%)";
    themeButtons[1].style.backgroundColor = 'hsl(223, 31%, 20%)';
    themeButtons[2].style.backgroundColor = 'hsl(223, 31%, 20%)';
    numberButtons.forEach(item =>{
        item.style.backgroundColor = "hsl(30, 25%, 89%)";
        item.style.color = "hsl(60, 10%, 19%)";
        item.style.boxShadow = "0px 2px 3px hsl(35, 11%, 61%)";
    });

    operationButtons.forEach(item =>{
        item.style.backgroundColor = "hsl(30, 25%, 89%)";
        item.style.color = "hsl(60, 10%, 19%)";
        item.style.boxShadow = "0px 2px 3px hsl(35, 11%, 61%)";
    });

    first.style.color = 'hsl(0, 0%, 100%)'
    second.style.color = 'hsl(0, 0%, 100%)'
    third.style.color = 'hsl(0, 0%, 100%)'
    
}

function themeTwo(){
    body.style.backgroundColor = "hsl(0, 0%, 90%)";
    entryPoint.style.backgroundColor = "hsl(0, 0%, 93%)";
    themeToggle.style.backgroundColor = "hsl(0, 5%, 81%)";
    keyPad.style.backgroundColor = "hsl(0, 5%, 81%)";
    deleteButton.style.backgroundColor = "hsl(185, 42%, 37%)";
    deleteButton.style.boxShadow = "0px 2px 3px hsl(185, 58%, 25%)";
    resetButton.style.backgroundColor = "hsl(185, 42%, 37%)";
    resetButton.style.boxShadow = "0px 2px 3px hsl(185, 58%, 25%)";
    equalsButton.style.backgroundColor = "hsl(25, 98%, 40%)";
    equalsButton.style.boxShadow = "0px 2px 3px hsl(25, 99%, 27%)";
    pageText[0].style.color = "black";
    pageText[1].style.color = "black";
    pageText[2].style.color = "black";
    pageText[3].style.color = "black";
    themeButtons[0].style.backgroundColor = 'hsl(0, 5%, 81%)';
    themeButtons[2].style.backgroundColor = 'hsl(0, 5%, 81%)';
    numberButtons.forEach(item =>{
        item.style.backgroundColor = "hsl(45, 7%, 89%)";
        item.style.color = "hsl(60, 10%, 19%)";
        item.style.boxShadow = "0px 2px 3px hsl(35, 11%, 61%)";
    });

    operationButtons.forEach(item =>{
        item.style.backgroundColor = "hsl(45, 7%, 89%)";
        item.style.color = "hsl(60, 10%, 19%)";
        item.style.boxShadow = "0px 2px 3px hsl(35, 11%, 61%)";
    });

    first.style.color = 'black'
    second.style.color = 'black'
    third.style.color = 'black'
}

function themeThree(){
    body.style.backgroundColor = "hsl(268, 75%, 9%)";
    entryPoint.style.backgroundColor = "hsl(268, 71%, 12%)";
    themeToggle.style.backgroundColor = "hsl(268, 71%, 12%)";
    keyPad.style.backgroundColor = "hsl(268, 71%, 12%)";
    deleteButton.style.backgroundColor = "hsl(281, 89%, 26%)";
    deleteButton.style.boxShadow = "0px 2px 3px hsl(285, 91%, 52%)";
    resetButton.style.backgroundColor = "hsl(281, 89%, 26%)";
    resetButton.style.boxShadow = "0px 2px 3px hsl(285, 91%, 52%)";
    equalsButton.style.backgroundColor = "hsl(176, 100%, 44%)";
    equalsButton.style.boxShadow = "0px 2px 3px hsl(177, 92%, 70%)";
    equalsButton.style.color = "black";
    pageText[0].style.color = "hsl(52, 100%, 62%)";
    pageText[1].style.color = "hsl(52, 100%, 62%)";
    pageText[2].style.color = "hsl(52, 100%, 62%)";
    pageText[3].style.color = "hsl(52, 100%, 62%)";
    themeButtons[0].style.backgroundColor = 'hsl(268, 71%, 12%)';
    themeButtons[1].style.backgroundColor = 'hsl(268, 71%, 12%)';
    numberButtons.forEach(item =>{
        item.style.backgroundColor = "hsl(268, 47%, 21%)";
        item.style.color = "hsl(52, 100%, 62%)";
        item.style.boxShadow = "0px 2px 3px hsl(290, 70%, 36%)";
    });

    operationButtons.forEach(item =>{
        item.style.backgroundColor = "hsl(268, 47%, 21%)";
        item.style.color = "hsl(52, 100%, 62%)";
        item.style.boxShadow = "0px 2px 3px hsl(290, 70%, 36%)";
    });

    first.style.color = 'hsl(52, 100%, 62%)'
    second.style.color = 'hsl(52, 100%, 62%)'
    third.style.color = 'hsl(52, 100%, 62%)'
}
