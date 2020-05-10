const n = readline();
const password = readline();
const passwordChars = password.split("");

let wheels = new Array();
let index = new Array();
let distance = new Array();
let output= 0;

for (let i = 0; i < n; i++) {
  wheels[i] = readline();
  index[i] = wheels[i].split("").findIndex(x => passwordChars[i] == x);
//   console.log('index i 1', index[i])
  index[i] = index[i] < 5 ? index[i] : 9 - index[i];
//   console.log('index i 2', index[i])
}

index.map(index => (output += index));
console.log(output)