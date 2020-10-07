def on_ir_callbackuser(value):
    if value == 7:
        DFRobotMaqueenPlus.motot_run(Motors.M1, Dir.CW, 125)
        DFRobotMaqueenPlus.motot_run(Motors.M2, Dir.CW, 0)
        DFRobotMaqueenPlus.set_rgb_light(RGBLight.RGBL, Color.YELLOW)
        basic.pause(200)
        DFRobotMaqueenPlus.motot_stop(Motors.ALL)
    elif value == 9:
        DFRobotMaqueenPlus.motot_run(Motors.M1, Dir.CW, 0)
        DFRobotMaqueenPlus.motot_run(Motors.M2, Dir.CW, 125)
        DFRobotMaqueenPlus.set_rgb_light(RGBLight.RGBR, Color.YELLOW)
        basic.pause(200)
        DFRobotMaqueenPlus.motot_stop(Motors.ALL)
    elif value == 64:
        DFRobotMaqueenPlus.motot_run(Motors.M1, Dir.CW, 125)
        DFRobotMaqueenPlus.motot_run(Motors.M2, Dir.CW, 125)
        DFRobotMaqueenPlus.set_rgb_light(RGBLight.RGBA, Color.GREEN)
        basic.pause(200)
        DFRobotMaqueenPlus.motot_stop(Motors.ALL)
    elif value == 25:
        DFRobotMaqueenPlus.motot_run(Motors.M1, Dir.CCW, 125)
        DFRobotMaqueenPlus.motot_run(Motors.M2, Dir.CCW, 125)
        DFRobotMaqueenPlus.set_rgb_light(RGBLight.RGBA, Color.RED)
        basic.pause(200)
        DFRobotMaqueenPlus.motot_stop(Motors.ALL)
    elif value == 21:
        for index in range(4):
            DFRobotMaqueenPlus.motot_run(Motors.M1, Dir.CW, 125)
            basic.pause(1000)
            DFRobotMaqueenPlus.motot_run(Motors.M2, Dir.CW, 125)
            basic.pause(1000)
    elif value == 22:
        DFRobotMaqueenPlus.set_rgb_light(RGBLight.RGBL, Color.RED)
    else:
        pass
DFRobotMaqueenPlus.IR_callbackUser(on_ir_callbackuser)

value = 0
DFRobotMaqueenPlus.motot_stop(Motors.ALL)

def on_forever():
    global value
    value = DFRobotMaqueenPlus.IR_read()
basic.forever(on_forever)
