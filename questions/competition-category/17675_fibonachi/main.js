const n = readline()

let output =''
let fib = [1, 2]

for (let i = 1; fib[i] < n; i++) {
    // console.log('s')
    fib[1+i] = fib[i - 1] + fib[i]
}
// console.log(fib)
// console.log(fib.includes(5))
// console.log(output)
for (let i = 1; i <= n; ++i) {

    if (fib.includes(i)) {
        // console.log('qq')
        output += '+'
        // console.log(output)
    } else {
        // console.log('oo')

        output += '-'
    }
}
console.log(output)