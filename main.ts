input.onLogoEvent(TouchButtonEvent.Touched, function () {
    if (insertCode() == 0) {
        larmat = !(larmat)
        pins.digitalWritePin(DigitalPin.P2, 0)
    } else {
        basic.showNumber(2)
    }
})
function insertCode () {
    basic.clearScreen()
    inserted = ""
    while (inserted.length < 4) {
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
let inserted = ""
let kod = ""
let larmat = false
larmat = false
kod = "ABBA"
pins.setAudioPin(AnalogPin.P0)
basic.forever(function () {
    if (larmat) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        if (input.acceleration(Dimension.Z) > 150) {
            pins.digitalWritePin(DigitalPin.P2, 1)
        } else {
            basic.clearScreen()
        }
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
