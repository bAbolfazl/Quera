const firstLine = readline()

const rowsNo = firstLine.split(' ')[0]
const colsNo = firstLine.split(' ')[1]

let counter = 0
const rows = []

for (let i = 0; i < rowsNo; ++i) {
    const row = readline()
    const rowItems = row.split(" ")

    rows.push(rowItems)
}

for (let i = 0; i < rows.length; ++i) {
    for (let j = 0; j < rows[i].length; ++j) {
        const thisItem = rows[i][j]

        if((i - 1) < 0 || (j - 1) < 0 || (i + 1) > (rows.length - 1) || (j + 1) > (rows[i].length -1))
        	continue

        const topItem = rows[i - 1][j]
        const bottomItem = rows[i + 1][j]
        const rightItem = rows[i][j + 1]
        const leftItem = rows[i][j - 1]

        if ((thisItem < topItem && thisItem < bottomItem && thisItem > rightItem && thisItem > leftItem)
        || (thisItem > topItem && thisItem > bottomItem && thisItem < rightItem && thisItem < leftItem)) {
        	++counter
        }
    }
}

console.log(counter)