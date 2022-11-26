function insertCode () {
    basic.clearScreen()
    inserted = ""
    while (inserted.length < kod.length) {
        if (input.buttonIsPressed(Button.A)) {
            inserted = "" + inserted + "A"
            basic.pause(200)
            basic.clearScreen()
        }
        if (input.buttonIsPressed(Button.B)) {
            inserted = "" + inserted + "B"
            basic.pause(200)
            basic.clearScreen()
        }
        led.plot(inserted.length, 4)
    }
    basic.clearScreen()
    return kod.compare(inserted)
}
input.onButtonPressed(Button.AB, function () {
    basic.pause(200)
    if (insertCode() == 0) {
        basic.showIcon(IconNames.Yes)
        if (!(larmat)) {
            countDown(5)
        }
        larmat = !(larmat)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(2000)
        basic.clearScreen()
    } else {
        if (tries < 3) {
            basic.showIcon(IconNames.No)
            basic.pause(2000)
            basic.clearScreen()
            tries += 1
        } else {
            larmat = true
            pins.digitalWritePin(DigitalPin.P1, 1)
        }
    }
})
function countDown (seconds: number) {
    countdown = seconds
    while (countdown > 0) {
        basic.showNumber(countdown)
        basic.pause(1000)
        countdown += -1
    }
    basic.clearScreen()
}
let countdown = 0
let inserted = ""
let tries = 0
let kod = ""
let larmat = false
larmat = false
kod = "ABBA"
tries = 0
pins.digitalWritePin(DigitalPin.P0, 0)
pins.digitalWritePin(DigitalPin.P1, 0)
basic.forever(function () {
    if (larmat) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        if (input.acceleration(Dimension.Z) > 150) {
            pins.digitalWritePin(DigitalPin.P1, 1)
        }
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
