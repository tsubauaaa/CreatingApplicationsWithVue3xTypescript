// const num1 = 3;
// const num2 = 5;
// const num3 = 10;

// const calculateNum = num1 + num2

// const output = num1 + " + " + num2

// const result = addNumbers(1, 3)
// console.log(result);

let result = 0;
let log = [];

function addNumbers() {
    console.log("type of userInput:", typeof userInput.value);
    result = result + parseInt(userInput.value);
    const newLog = {
        type: "ADD",
        num: parseInt(userInput.value),
    }
    log.push(newLog);
    outputResult(result);
    console.log("type of log:", typeof log);
}

function clear() {
    result = 0;
    log.splice();
    outputResult(result);
    console.log("log: ", log)
}

addButton.addEventListener("click", addNumbers);
clearButton.addEventListener("click", clear);

// outputResult(calculateNum, output);
