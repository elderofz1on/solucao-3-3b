input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 4; index++) {
        led.plot(2, 2)
        basic.pause(500)
        led.unplot(2, 2)
        basic.pause(500)
    }
})
basic.forever(function () {
	
})
