import { useControls } from "leva"

export default function Lights() {

    const { positionDir } = useControls('directionalLight', {
        positionDir: {
            value: {"x": 1.13, "y":1.65,"z":0.45},
            step: 0.01
        }
    })

    return <>
        <ambientLight/>
        <directionalLight position={ [positionDir.x, positionDir.y, positionDir.z] }/>
    </>
}