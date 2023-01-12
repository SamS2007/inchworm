input.onButtonPressed(Button.A, function () {
    go = 1
})
input.onButtonPressed(Button.AB, function () {
    go = 2
})
input.onButtonPressed(Button.B, function () {
    go = 0
})
let go = 0
basic.showLeds(`
    . # # # .
    . # # # .
    # # # # #
    . # # # .
    . . # . .
    `)
music.playMelody("G F G A - F E D ", 120)
music.playMelody("C D E F G A B C5 ", 120)
music.playMelody("C D E F G A B C5 ", 120)
basic.forever(function () {
    if (go == 1) {
        servos.P0.setAngle(0)
        basic.pause(500)
        servos.P0.setAngle(180)
        basic.pause(500)
    }
})
basic.forever(function () {
    if (go == 2) {
        servos.P0.setAngle(0)
        basic.pause(500)
        servos.P0.setAngle(90)
        basic.pause(500)
    }
})
