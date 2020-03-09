const states = [
  "Tehran",
  "Gilan",
  "Azarbayjan Sharghi",
  "Khoozestan",
  "Fars",
  "Esfahan",
  "Khorasan Razavi",
  "Qazvin",
  "Semnan",
  "Qom",
  "Markazi",
  "Zanjan",
  "Mazandaran",
  "Golestan",
  "Ardabil",
  "Azarbayjan Gharbi",
  "Hamedan",
  "Kordestan",
  "Kermanshah",
  "Lorestan",
  "Bushehr",
  "Kerman",
  "Hormozgan",
  "Chaharmahal va Bakhtiari",
  "Yazd",
  "Sistan va Baluchestan",
  "Ilam",
  "Kohkiluye va Boirahmad",
  "Khorasan Shomali",
  "Khorasan Jonubi",
  "Alborz"
];

const autoComplete = document.querySelector(".autocomplete");
const inputComponent = document.querySelector("#myInput");

let filteredStates;
let input;

const close = () => {
  autoComplete.innerHTML = "";
};

const render = () => {
  console.log(filteredStates);
  if (filteredStates == "") {
    let div = document.createElement("DIV");
    div.className = "not-found";
    div.innerHTML = 'Not Found!';
    autoComplete.appendChild(div);
  } else {
    filteredStates.map(state => {
      let div = document.createElement("DIV");
      div.className = "item";
      div.innerHTML = state;
      autoComplete.appendChild(div);

      div.addEventListener("click", () => {
        inputComponent.value = state;
        close();
      });
    });
  }
};

inputComponent.addEventListener("input", event => {
  close();
  input = event.target.value;
  filteredStates = states.filter(state =>
    state.toLowerCase().startsWith(input.toLowerCase())
  );
  if (input != "") {
    console.log(filteredStates);
    render();
  }
});

document.querySelector("body").addEventListener("click", () => {
  console.log("click");
  if (event.target.closest(".container")) return;
  console.log("close");

  close();
});
