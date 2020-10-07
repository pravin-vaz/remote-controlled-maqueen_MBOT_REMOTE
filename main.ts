DFRobotMaqueenPlus.IR_callbackUser(function (value) {
    if (value == 32) {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 125)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 0)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.YELLOW)
        basic.pause(200)
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
    } else if (value == 129) {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 0)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 125)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.YELLOW)
        basic.pause(200)
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
    } else if (value == 64) {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 125)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 125)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.GREEN)
        basic.pause(200)
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
    } else if (value == 130) {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, 125)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 125)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.RED)
        basic.pause(200)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
    } else if (value == 33) {
        for (let index = 0; index < 4; index++) {
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 125)
            basic.pause(1000)
            DFRobotMaqueenPlus.mototStop(Motors.M1)
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 125)
            basic.pause(1000)
            DFRobotMaqueenPlus.mototStop(Motors.M2)
        }
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
    }
})
let value = 0
DFRobotMaqueenPlus.mototStop(Motors.ALL)
DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
basic.forever(function () {
    value = DFRobotMaqueenPlus.IR_read()
})
