const input = readline()
const arr = input.split(" ")
const min = Math.min(arr[0], arr[2])

let round = Math.floor(min / 2)
let arr2 = new Array();

if (min % 2 == 0) {
//   console.log('1')
    arr2[0] = round
    arr2[1] = round
    arr2[2] = round
    arr2[3] = round
		
    if (min == arr[0]) {
        --arr2[3]
    } 
} else {
//   console.log('2')
  
    arr2[0] = round
    arr2[1] = round
    arr2[2] = round
    arr2[3] = round

    if (min == arr[0]) {
        ++arr2[0]
    } else {
        ++arr2[0]
        ++arr2[1]
//         ++arr2[2]
    }
}

console.log(arr2[0] + ' ' + arr2[1] + ' ' + arr2[2] + ' ' + arr2[3])