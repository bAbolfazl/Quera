readline();
const input = readline()
const melons = input.split(" ")

let max = 0;
let maxIndx;

melons.map((melon, i) => {
    if (max < Number(melon)) {
        max = melon;
        maxIndx = i
    }
})

console.log(maxIndx+1)