let input = readline()

let modified_input = input.split(' ')

let fakeHour = modified_input[0]
let fakeMin = modified_input[1]

let hour='a', min='a', output='a'

if (fakeHour == 0) hour = '00'
else hour = String(12 - fakeHour)

if (fakeMin == 0) min = '00'
else min = String(60 - fakeMin)

if(min.length == 1) min = `0${min}`
if(hour.length == 1) hour = '0'+hour

output = `${hour}:${min}`
console.log(output)