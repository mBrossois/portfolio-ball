import { useControls } from 'leva'

export default function Ball() {
    const { scale, color, roughness, metalness } = useControls('Ball', {
        scale: {
            value: .25,
            min: 0.01,
            max: 5,
            step: 0.01
        },
        color: '#dedede',
        roughness: {
            value: 0.5,
            min: 0,
            max: 1,
            step: 0.01
        },
        metalness: { 
            value: 0.72,
            min: 0,
            max: 1,
            step: 0.01
        }
    })

    return <mesh scale={ scale } >
        <sphereGeometry />
        <meshStandardMaterial color={ color } roughness={ roughness } metalness={ metalness }/>
    </mesh>
}