input.onButtonPressed(Button.A, function () {
    if (lidżba == 1) {
        _ = _ + 1
    } else if (lidżba == 0) {
        _1 += 1
        basic.showString("" + (_1))
    } else if (lidżba == -1) {
        wynik += 1
        basic.showString("" + (wynik))
    }
})
input.onButtonPressed(Button.AB, function () {
    if (lidżba == 1) {
        if (_ == 1) {
            lidżba = 0
            wynik = wynik + _1
            _1 = 0
            _ = 0
            basic.clearScreen()
        } else if (_ == 2) {
            lidżba = 0
            wynik = wynik - _1
            _1 = 0
            _ = 0
            basic.clearScreen()
        } else if (_ == 3) {
            lidżba = 0
            wynik = wynik * _1
            _1 = 0
            _ = 0
            basic.clearScreen()
        } else if (_ == 4) {
            lidżba = 0
            wynik = wynik ** _1
            _1 = 0
            _ = 0
            basic.clearScreen()
        }
    } else if (lidżba == 0 || lidżba == -1) {
        lidżba += 1
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (wynik))
})
let wynik = 0
let lidżba = 0
let _ = 0
let _1 = 0
_ = 0
_1 = 0
lidżba = -1
wynik = 0
basic.forever(function () {
    if (_ == 1) {
        basic.showString("+")
    } else if (_ == 2) {
        basic.showString("-")
    } else if (_ == 3) {
        basic.showString("*")
    } else if (_ == 4) {
        basic.showString("/")
    } else if (_ == 5) {
        _ = 1
    }
})
