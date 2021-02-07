let direction = 0
basic.forever(function () {
    direction = input.compassHeading()
    if (direction > 45 && direction <= 135) {
        basic.showString("E")
    } else if (direction > 135 && direction <= 225) {
        basic.showString("S")
    } else if (direction > 225 && direction <= 315) {
        basic.showString("W")
    } else if (direction > 315 || direction <= 45) {
        basic.showString("N")
    }
})
