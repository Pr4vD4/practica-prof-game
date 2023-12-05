class Game {
    constructor(field) {

        this.field = field
        this.size = field.length

    }
    createFiled(field) {

        field.innerHTML = ''

        // Define square size
        const filedHeight = field.getBoundingClientRect().height
        const squareSize = filedHeight / this.field.length


        for (let i = 0; i < this.field.length; i++) {
            // Creating field rwo
            let fieldRow = document.createElement('div')
            fieldRow.className = 'fieldRow'
            for (let j = 0; j < this.field[i].length; j++) {

                // Creating filed square
                let square = document.createElement('div')
                square.className = 'square'
                square.style.width = squareSize + 'px'
                square.style.height = squareSize + 'px'

                square.dataset.y = i
                square.dataset.x = j

                // Paint in checkerboard pattern
                if ((i + j) % 2 === 0) {
                    square.className += ' square-dark'
                } else {
                    square.className += ' square-light'
                }

                fieldRow.append(square)
            }
            field.append(fieldRow)
        }

    }

        addObjects(field) {
        for (let i = 0; i < this.field.length; i++) {
            for (let j = 0; j < this.field[i].length; j++) {
                if (this.field[i][j] === 'r') {
                    let square = field.querySelector(`[data-x="${j}"][data-y="${i}"]`)

                    let robot = document.createElement('img')
                    robot.src = './assets/img/robot.png'
                    robot.className = 'game-object'

                    square.append(robot)

                }

                if (this.field[i][j] === 't') {
                    let square = field.querySelector(`[data-x="${j}"][data-y="${i}"]`)

                    let robot = document.createElement('img')
                    robot.src = './assets/img/target.png'
                    robot.className = 'game-object'

                    square.append(robot)

                }

            }
        }
    }

}

// const game = {
//     field: [
//         ['r','#','#'],
//         ['#','#','#'],
//         ['#','#','t'],
//     ],
//     createFiled(field) {
//
//         // Define square size
//         const filedHeight = field.getBoundingClientRect().height
//         const squareSize = filedHeight / this.field.length
//
//
//         for (let i = 0; i < this.field.length; i++) {
//             // Creating field rwo
//             let fieldRow = document.createElement('div')
//             fieldRow.className = 'fieldRow'
//             for (let j = 0; j < this.field[i].length; j++) {
//
//                 // Creating filed square
//                 let square = document.createElement('div')
//                 square.className = 'square'
//                 square.style.width = squareSize + 'px'
//                 square.style.height = squareSize + 'px'
//
//                 // Paint in checkerboard pattern
//                 if ((i + j) % 2 === 0) {
//                     square.className += ' square-dark'
//                 } else {
//                     square.className += ' square-light'
//                 }
//
//                 fieldRow.append(square)
//             }
//             field.append(fieldRow)
//         }
//
//     }
// }