var currentNumberWapper = document.getElementById("currentNumber")
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    if(currentNumber >= 5){
        currentNumber=0
        currentNumberWapper.innerHTML = currentNumber
        console.log(currentNumber)
    } 
    currentNumberWapper.innerHTML = currentNumber
    document.getElementById("demo").innerHTML = currentNumber;
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWapper.innerHTML = currentNumber
}

document.getElementById("incremento").addEventListener("click", increment())
