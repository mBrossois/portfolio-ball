import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { StrictMode } from 'react'
import { Perf } from 'r3f-perf'
import Portfolio from './components/Portfolio'
import { Leva } from 'leva'
import { ACESFilmicToneMapping, SRGBColorSpace } from 'three'

const root = ReactDOM.createRoot(document.querySelector('#root'))

const cameraSettings = {
    fov: 45,
    near: 0.1,
    far: 200,
    position: [ 3, 2, 6]
}

root.render(
    <StrictMode>
        <Leva collapsed={false} />
        <Canvas 
            gl={ { 
                antialias: true, 
                toneMapping: ACESFilmicToneMapping, 
                outputColorSpace: SRGBColorSpace 
            } }
            camera={ cameraSettings }>
                <Perf position="top-left" />
                <Portfolio />
        </Canvas>
    </StrictMode>
)