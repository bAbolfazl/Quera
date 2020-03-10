let arr = readline().split(' ');

let n = parseInt(arr[0])
let lit = parseInt(arr[1])

let loop = new Array();
let sum = 0;

for (let i = 0; i < n; i++) {
	loop[i] = parseInt(readline());
  	sum += loop[i];
}


sum >= lit ? print('YES'): print('NO')