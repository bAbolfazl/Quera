const input = readline();

let output = "W";
let counter = 0;

while (input > counter) {
  output += "o";
  ++counter;
}

output += 'w!'

console.log(output)