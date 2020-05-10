const n = readline();
let i = 0;
let arr = new Array();
let time = new Array();
let spots;

while (i < n) {
    arr[i] = readline()
    spots = arr[i].split(" ")
    // console.log('spots', spots)
    if (Number(spots[0]) === Number(spots[1]) || Number(spots[0])-2 === Number(spots[1])) {
        if (!(spots[0] % 2) && !(spots[1] % 2)) {
            console.log(Number(spots[0]) + Number(spots[1]))
        } else if ((spots[0] % 2) && (spots[1] % 2)) {
            console.log(Number(spots[0]) + Number(spots[1] - 1))
        }
    } else {
        console.log(-1)
    }
    i++;
}
