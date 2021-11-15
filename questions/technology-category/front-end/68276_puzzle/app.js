init_state = [
    [2, 3, 5],
    [1, 4, ''],
    [7, 8, 6]
]

let newState = [
    [2, 3, 5],
    [1, 4, ''],
    [7, 8, 6]
]
let empty = 5

let counter = -1

const resetBtn = document.querySelector('.btn')
const cells = document.querySelectorAll('.cell')
const status = document.querySelector('#game_status')
const moves = document.querySelector('#moves') 


// func
const init = () => {

    empty = 5
    counter = 0
    moves.innerText = 0
    cells.forEach((cell, index) => {
    const mod = index % 3
    const tag = Math.floor(index / 3)
    cell.innerText = [
    [2, 3, 5],
    [1, 4, ''],
    [7, 8, 6]
    ][tag][mod]

newState = [
    [2, 3, 5],
    [1, 4, ''],
    [7, 8, 6]
]
})
}

const onCellClick = (e) => {
    const value = Number(e.currentTarget.id)
    const valueNumber = document.getElementById(`${value}`).innerText  

    const value2 = Number(document.getElementById(`${empty}`).id)


    const mod = value % 3
    const tag = Math.floor(value / 3)

     const mod2 = value2 % 3
    const tag2 = Math.floor(value2 / 3)



    newState[tag][mod] = ''
    newState[tag2][mod2] = Number(valueNumber)
    // debugger
    document.getElementById(`${empty}`).innerText = valueNumber
    document.getElementById(`${value}`).innerText = ''
    

    empty = value
    
    moves.innerText = ++counter

    const win = check()
    if(win) {
        status.innerText = 'You won !'
    } 

}

const onResetBtnClick = () => {
    status.innerText ='Start moving Tile !'
    init()
}
const check = () => {
    let win = true
    let newState2 = []
    newState.forEach(row => newState2.push(...row))

    for(let index =0; index < newState2.length; index++) {
        if(newState2?.[index] === '') continue

        if (newState2?.[index - 1] > newState2?.[index]) {
            win = false
            break
    }    
}
    return win
}


// listeners
resetBtn.addEventListener('click', onResetBtnClick)
cells.forEach(cell => cell.addEventListener('click', onCellClick))

// invoke
init()