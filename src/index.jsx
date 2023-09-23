import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Ball from './components/ball'
import Lights from './components/Ligts'

const root = ReactDOM.createRoot(document.querySelector('#root'))

const cameraSettings = {
    fov: 45,
    near: 0.1,
    far: 200,
    position: [ 3, 2, 6]
}

root.render(
    <Canvas 
        camera={ cameraSettings }>
        <Lights />
        <Ball />
    </Canvas>
)