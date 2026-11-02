const { makeMenu } = require("../../facilitators.js")
const { base } = require("../../constants.js")

Class.ramMiniboss = {
    PARENT: "genericBoss",
    CONTROLLERS: ["nearestDifferentMaster", "canRepel", "mapTargetToGoal"]
}
Class.fallenBooster = {
    PARENT: "ramMiniboss",
    LABEL: "Fallen Booster",
    COLOR: "gray",
    UPGRADE_COLOR: "gray",
    SIZE: 26,
    BODY: {
        SPEED: 1.5,
        HEALTH: 30,
        DAMAGE: 3,
        REGEN: 5,
        FOV: 1.4,
        DENSITY: 6
    },
    CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
    GUNS: [
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.triAngleFront, { recoil: 4 }]),
                TYPE: "bullet",
                LABEL: "Front"
            }
        },
        ...weaponMirror([
            {
                POSITION: {
                    LENGTH: 14,
                    WIDTH: 8,
                    ANGLE: 135,
                    DELAY: 0.6
                },
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                    TYPE: "bullet",
                    LABEL: "Thruster"
                }
            },
            {
                POSITION: {
                    LENGTH: 16,
                    WIDTH: 8,
                    ANGLE: 150,
                    DELAY: 0.1
                },
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                    TYPE: "bullet",
                    LABEL: "Thruster"
                }
            }
        ])
    ]
}
Class.bob = {
    PARENT: "ramMiniboss",
    LABEL: "Bob",
    SHAPE: 0,
    COLOR: "aqua",
    UPGRADE_COLOR: "aqua",
    SIZE: 18,
    BODY: {
        SPEED: 2 * base.SPEED,
        HEALTH: 5 * base.HEALTH,
        DAMAGE: 5 * base.DAMAGE,
        REGEN: 8 * base.REGEN,
        FOV: 0.5 * base.FOV,
        DENSITY: 6 * base.DENSITY
    },
    CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
    TURRETS: [
        {
            TYPE: ["hexagonHat_spin", { COLOR: "black" }],
            POSITION: [21.5, 0, 0, 0, 360, 0]
        },
        {
            TYPE: ["hexagonHat_spinFaster", { COLOR: "black" }],
            POSITION: [21.5, 0, 0, 30, 360, 0]
        },
        {
            TYPE: ["triangleHat_spin", { COLOR: "black" }],
            POSITION: [23.75, 0, 0, 0, 360, 0]
        }
    ]
}
Class.nemesis = {
    PARENT: "bob",
    LABEL: "Nemesis",
    COLOR: "red",
    UPGRADE_COLOR: "red",
    BODY: {
        REGEN: 1e5,
        HEALTH: 1e6,
        DENSITY: 30,
        DAMAGE: 1e5,
        FOV: 5
    }
}
