import { useControls } from "leva"

export default function Lights() {

    const { positionDir, intensityDir } = useControls('directionalLight', {
        positionDir: {
            value: {"x": 1.13, "y":1.65,"z":0.45},
            step: 0.01
        },
        intensityDir: {
            value: 2.3600000000000003,
            min: 0,
            max: 5,
            step: 0.01
        }
    })

    const { intensityAmb } = useControls('ambientLight', {
        intensityAmb: {
            value: 1.35,
            min: 0,
            max: 5,
            step: 0.01
        }
    })

    return <>
        <ambientLight intensity={intensityAmb}/>
        <directionalLight intensity={intensityDir} position={ [positionDir.x, positionDir.y, positionDir.z] }/>
    </>
}