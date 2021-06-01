const gridItems = document.querySelector(".numpad").children;
let entryPoint = document.getElementById('input');
let inputTExt = "";


// console.log(gridItems);
gridItems[0].addEventListener('click', () => {
    inputTExt += 7;
    entryPoint.value = inputTExt;
});

gridItems[1].addEventListener('click', () => {
    inputTExt += 8;
    entryPoint.value = inputTExt;
});
gridItems[2].addEventListener('click', () => {
    inputTExt += 9;
    entryPoint.value = inputTExt;
});

gridItems[4].addEventListener('click', () => {
    inputTExt += 4;
    entryPoint.value = inputTExt;
});

gridItems[5].addEventListener('click', () => {
    inputTExt += 5;
    entryPoint.value = inputTExt;
});

gridItems[6].addEventListener('click', () => {
    inputTExt += 6;
    entryPoint.value = inputTExt;
});

gridItems[8].addEventListener('click', () => {
    inputTExt += 1;
    entryPoint.value = inputTExt;
});

gridItems[9].addEventListener('click', () => {
    inputTExt += 2;
    entryPoint.value = inputTExt;
});

gridItems[10].addEventListener('click', () => {
    inputTExt += 3;
    entryPoint.value = inputTExt;
});

gridItems[12].addEventListener('click', () => {
    inputTExt += ".";
    entryPoint.value = inputTExt;
});

gridItems[13].addEventListener('click', () => {
    inputTExt += 0;
    entryPoint.value = inputTExt;
});

gridItems[3].addEventListener('click', () => {
    entryPoint.value = inputTExt.substring(0, inputTExt.length-1);
    inputTExt = entryPoint.value;
});




function clearAll(){
    inputTExt = "";
    entryPoint.value = null;
}


function add(){
    let sum = 0;
    for(let i = 0; i < inputTExt.length; i++){
        sum += inputTExt[i];
    }
    
}


