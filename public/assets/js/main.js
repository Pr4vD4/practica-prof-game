const code = document.querySelector('#game-code code')

const move =
`
robot.move(5)`

code.append(move)
code.append(move)

const gameView = document.querySelector('#game-view')
game.createFiled(gameView)