const wieght = readline()
const height = readline()

const bmi = wieght / (height * height)

let output;

if (bmi < 18.5) {
    output = 'Underweight'

} else if (bmi < 25) {
    output = 'Normal'
} else if (bmi < 30) {
    output = 'Overweight'
} else {
    output = 'Obese'
}

console.log(bmi.toFixed(2))
console.log(output)