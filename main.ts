input.onButtonPressed(Button.A, function () {
    guess += 1
})
input.onButtonPressed(Button.B, function () {
    guess += -1
})
input.onGesture(Gesture.Shake, function () {
    if (guess == num) {
        basic.showString("You guessed correctly!")
    } else if (guess > num) {
        basic.showString("Higher")
    } else {
        basic.showString("Lower")
    }
})
let guess = 0
let num = 0
num = randint(0, 20)
basic.forever(function () {
    basic.showNumber(guess)
})
