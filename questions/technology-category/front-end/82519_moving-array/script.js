const CHANGE_TYPE = {
  UP: "UP",
  DOWN: "DOWN",
};
const ERROR_TYPE = {
  NOT_FOUND: "NOT_FOUND",
  NOT_POSSIBLE: "NOT_POSSIBLE",
  INVALID_INPUT: "INVALID_INPUT",
};
let numbers = [4, 6, 10, 23, 0, 24, 30, 2];

const numbersContainer = document.querySelector('#numbers-container')
const submitBtn = document.querySelector('#submit-btn')
const countInput = document.querySelector('#count-input')
const itemInput = document.querySelector('#item-input')
const errorContainer = document.querySelector('#error-container')


// func
function array_move(arr, old_index, new_index) {
  if (new_index >= arr.length) {
    var k = new_index - arr.length + 1;
    while (k--) {
      arr.push(undefined);
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  return arr; // for testing
};

const handle_submitBtn_click = () => {

  const countInputValue = countInput.value
  const itemInputValue = itemInput.value

  const hasError = handleErrors(countInputValue, itemInputValue)

  if (hasError) return

  const oldIndex = numbers.findIndex(x => x == Number(itemInputValue))
  const isUp = document.querySelector('input[name=type]').checked == true
  debugger


  const newArr = isUp ?
    array_move(numbers, oldIndex, oldIndex + Number(countInputValue)) :
    array_move(numbers, oldIndex, oldIndex - Number(countInputValue))

  handle_numbers(newArr)
}

const handleErrors = (count, item) => {
  const isUp = document.querySelector('input[name=type]').checked == true

  // debugger
  if (!count || !item) { errorContainer.innerHTML = `<p id="error"> ${ERROR_TYPE.INVALID_INPUT} </p>`; return true }
  if (!numbers.includes(Number(item))) { errorContainer.innerHTML = `<p id="error"> ${ERROR_TYPE.NOT_FOUND} </p>`; return true }

  const index = numbers.findIndex(x => x == Number(item))
  // console.log(index)
  // console.log(count)
  // console.log(numbers.length)
  // console.log(isUp)

  if ((isUp && ((Number(count) + index) >= numbers.length))) {
    // alert('hi')
    errorContainer.innerHTML = `<p id="error"> ${ERROR_TYPE.NOT_POSSIBLE} </p>`;
    return true
  }
  if (!isUp && ((index - Number(count)) < 0)) {
    // alert('hi2')
    errorContainer.innerHTML = `<p id="error"> ${ERROR_TYPE.NOT_POSSIBLE} </p>`;
    return true
  }

  errorContainer.innerHTML = ''
  return false
}

const handle_numbers = (numbers) => {
  // debugger
  const numbersSpans = numbers.map(item => `<span>${item}</span>`).join('')
  numbersContainer.innerHTML = numbersSpans
}
// events
submitBtn.addEventListener('click', handle_submitBtn_click)

// imediate
handle_numbers(numbers)
