const n = readline()

let arr = new Array()

let output = 1
let count5 = 0

let a, b, c;

for (let i = 0; i < n; ++i) {
    arr[i] = readline()
    if (arr[i] === 5) {
        count5++
        output *= 5
    } else if (arr[i] === 2) {
        output /= 2
    }
}

if (count5 !== 0) {
    a = 5
} else {
    a = 2
}

if (output == output.toFixed()) {

} else {
    
}

b = Math.log(output) / Math.log(a)

console.log(a)
console.log(b)