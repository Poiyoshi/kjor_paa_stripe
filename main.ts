basic.forever(function () {
    if (bitbot.readLine(BBLineSensor.Left) == 1) {
        bitbot.stop(BBStopMode.Coast)
        bitbot.rotate(BBRobotDirection.Left, 30)
    } else if (bitbot.readLine(BBLineSensor.Right) == 1) {
        bitbot.stop(BBStopMode.Coast)
        bitbot.rotate(BBRobotDirection.Right, 30)
    } else {
        bitbot.go(BBDirection.Forward, 15)
    }
})
