let i = 0;
let arr = new Array();

let splited = new Array();
let output;

//  console.log(arr[4].includes('MOLLANA'))
while (i < 5) {
  arr.push(readline());
  //   console.log(arr[i].includes("Molana"))
  if (arr[i].includes("MOLANA") || arr[i].includes("HAFEZ")) {
    splited.push(i);
  }
  i++;
}
splited.map(splited => {
  if (output == undefined) {
    output = ++splited;
  } else {
    output += ` ${++splited}`;
  }
});

if (output) {
  console.log(output);
} else {
  console.log("NOT FOUND!");
}
