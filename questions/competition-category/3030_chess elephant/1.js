const elephent = [1,1]
const person = [8,8]
let goal = new Array();

let input = readline();
const input_splited = input.split(" ");
const forbidden = [input_splited[0], input_splited[1]]

if(input_splited[0] == input_splited[1] && input_splited[0] == 2){
    goal = [7,7]
} else {
    goal = [2,2]
}

console.log(1)
console.log(`${goal[0]} ${goal[1]}`)
