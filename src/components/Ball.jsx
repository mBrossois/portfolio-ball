import { useControls } from 'leva'

export default function Ball() {
    const { scale, color, roughness, metalness, reflectivity } = useControls('Ball', {
        scale: {
            value: .25,
            min: 0.01,
            max: 5,
            step: 0.01
        },
        color: '#2fd0e5',
        roughness: {
            value: 0.51,
            min: 0,
            max: 1,
            step: 0.01
        },
        metalness: { 
            value: 0.87,
            min: 0,
            max: 1,
            step: 0.01
        }, 
        reflectivity: { 
            value: 1.50,
            min: 0,
            max: 1.5,
            step: 0.01
        }
    })

    return <mesh scale={ scale } >
        <sphereGeometry />
        <meshPhysicalMaterial 
            reflectivity={reflectivity} 
            color={ color } 
            roughness={ roughness } 
            metalness={ metalness }
        />
    </mesh>
}