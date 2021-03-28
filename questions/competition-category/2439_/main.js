const input = readline()

const seperated = input.split(' ')

const day = seperated[0]
const n = seperated[1]

let sum = 1
for (let i = 1; i <= day; i++) {
	sum *= i
}
const re = new RegExp(n,"g");
const number = String(Number(sum)).match(re) ? String(Number(sum)).match(re).length : 0

console.log(number)