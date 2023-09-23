export default function Ball() {

    return <mesh scale={ 0.25 } >
        <sphereGeometry />
        <meshStandardMaterial color="#dedede" roughness={ 0.5 } metalness={ 0.72 }/>
    </mesh>
}