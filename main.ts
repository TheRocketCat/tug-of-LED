input.onButtonPressed(Button.A, function () {
    dotx += -1
})
input.onButtonPressed(Button.B, function () {
    dotx += 1
})
let dotx = 2
basic.forever(function () {
    basic.clearScreen()
    led.plot(dotx, 2)
})
