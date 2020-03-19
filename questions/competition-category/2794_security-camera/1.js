let arr = new Array()
let inputX = new Array()
let inputY = new Array()
let outputX;
let outputY;


for (let i = 0; i < 3; ++i) {
    arr[i] = readline()
    inputX[i] = arr[i].split(" ")[0]
    inputY[i] = arr[i].split(" ")[1]
}

if (inputX[0] === inputX[1]) {
    outputX = inputX[2]
} else if (inputX[2] === inputX[1]) {
    outputX = inputX[0]
} else if (inputX[0] === inputX[2]) {
    outputX = inputX[1]
}

if (inputY[0] === inputY[1]) {
    outputY = inputY[2]
} else if (inputY[2] === inputY[1]) {
    outputY = inputY[0]
} else if (inputY[0] === inputY[2]) {
    outputY = inputY[1]
}

console.log(`${outputX} ${outputY}`)