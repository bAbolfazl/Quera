const input = readline()
const words = input.split('')

console.log(input)

for (let i = 1; i < words.length; i++) {
    let output = '';
    const nextWord = words[i];
    for (let j = 0; j < i; j++) {
        words[j] = nextWord
    }
    words.forEach((word) => {
        output += word
    })
    console.log(output)
}

