console.log("runnig");
const a = document.querySelector('#avatar_container')
console.log(a)
console.log(a.innerHTML)
console.log(a.innerText)
console.log(a.textContent)
const toggle_btn_img = () => {
  let avatar = document.querySelector("#avatar");
  let btn = document.querySelector("#btn");

  avatar.classList.toggle("w3-hide");
  console.log(btn.innerText);
  if (btn.innerText === "Show!") {
    console.log(btn.innerText);
    btn.innerText = "Hide!";
  } else {
    btn.innerText = "Show!";
  }
};

