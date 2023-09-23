import { useControls } from 'leva'

export default function Ball() {
    const { widthSegments, heightSegments, scale, color, roughness, metalness, reflectivity } = useControls('Ball', {
        widthSegments: { value: 50, min: 1, max: 100, step: 1 },
        heightSegments: { value: 25, min: 1, max: 100, step: 1 },
        scale: { value: .25, min: 0.01, max: 5, step: 0.01 },
        color: '#2fd0e5',
        roughness: { value: 0.51, min: 0, max: 1, step: 0.01 },
        metalness: {  value: 0.87, min: 0, max: 1, step: 0.01 }, 
        reflectivity: {  value: 1.50, min: 0, max: 1.5, step: 0.01 }
    })

    return <mesh scale={ scale } >
        <sphereGeometry args={[2 , widthSegments, heightSegments]} />
        <meshPhysicalMaterial 
            reflectivity={reflectivity} 
            color={ color } 
            roughness={ roughness } 
            metalness={ metalness }
        />
    </mesh>
}