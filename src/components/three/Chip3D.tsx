import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, RoundedBox } from '@react-three/drei'
import type { Group } from 'three'

function Pins() {
  const pins: { pos: [number, number, number]; rot: number }[] = []
  const count = 7
  const spacing = 1.7 / (count - 1)
  for (let i = 0; i < count; i++) {
    const offset = -0.85 + i * spacing
    pins.push({ pos: [offset, -0.04, 1.22], rot: 0 })
    pins.push({ pos: [offset, -0.04, -1.22], rot: 0 })
    pins.push({ pos: [1.22, -0.04, offset], rot: Math.PI / 2 })
    pins.push({ pos: [-1.22, -0.04, offset], rot: Math.PI / 2 })
  }
  return (
    <group>
      {pins.map((p, i) => (
        <mesh key={i} position={p.pos} rotation={[0, p.rot, 0]}>
          <boxGeometry args={[0.09, 0.06, 0.22]} />
          <meshStandardMaterial color="#8a97ab" metalness={0.9} roughness={0.25} />
        </mesh>
      ))}
    </group>
  )
}

function Traces() {
  // thin emissive lines radiating from the die to the package edge
  const lines: { pos: [number, number, number]; len: number; rot: number }[] = []
  const offsets = [-0.55, -0.28, 0, 0.28, 0.55]
  for (const o of offsets) {
    lines.push({ pos: [o, 0.15, 0.82], len: 0.75, rot: Math.PI / 2 })
    lines.push({ pos: [o, 0.15, -0.82], len: 0.75, rot: Math.PI / 2 })
    lines.push({ pos: [0.82, 0.15, o], len: 0.75, rot: 0 })
    lines.push({ pos: [-0.82, 0.15, o], len: 0.75, rot: 0 })
  }
  return (
    <group>
      {lines.map((l, i) => (
        <mesh key={i} position={l.pos} rotation={[0, l.rot, 0]}>
          <boxGeometry args={[l.len, 0.012, 0.025]} />
          <meshStandardMaterial
            color="#4f9dff"
            emissive="#4f9dff"
            emissiveIntensity={1.6}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  )
}

function Chip({ mouse }: { mouse: React.RefObject<{ x: number; y: number }> }) {
  const group = useRef<Group>(null)

  useFrame((state, delta) => {
    if (!group.current) return
    const t = state.clock.elapsedTime
    const targetY = t * 0.25 + (mouse.current?.x ?? 0) * 0.5
    const targetX = 0.5 + (mouse.current?.y ?? 0) * 0.35
    group.current.rotation.y += (targetY - group.current.rotation.y) * Math.min(delta * 3, 1)
    group.current.rotation.x += (targetX - group.current.rotation.x) * Math.min(delta * 3, 1)
  })

  return (
    <group ref={group}>
      {/* package body */}
      <RoundedBox args={[2.4, 0.3, 2.4]} radius={0.05} smoothness={3}>
        <meshStandardMaterial color="#151d2b" metalness={0.55} roughness={0.4} />
      </RoundedBox>

      {/* silicon die */}
      <mesh position={[0, 0.17, 0]}>
        <boxGeometry args={[1.15, 0.06, 1.15]} />
        <meshStandardMaterial
          color="#0b1420"
          metalness={0.8}
          roughness={0.2}
          emissive="#1f6fe0"
          emissiveIntensity={0.35}
        />
      </mesh>

      {/* glowing core */}
      <mesh position={[0, 0.205, 0]}>
        <boxGeometry args={[0.5, 0.015, 0.5]} />
        <meshStandardMaterial
          color="#39ff9e"
          emissive="#39ff9e"
          emissiveIntensity={2.2}
          toneMapped={false}
        />
      </mesh>

      {/* corner pin-1 dot */}
      <mesh position={[-0.95, 0.16, 0.95]}>
        <cylinderGeometry args={[0.06, 0.06, 0.02, 24]} />
        <meshStandardMaterial color="#39ff9e" emissive="#39ff9e" emissiveIntensity={1.2} />
      </mesh>

      <Traces />
      <Pins />
    </group>
  )
}

export default function Chip3D({ className }: { className?: string }) {
  const mouse = useRef({ x: 0, y: 0 })

  return (
    <div
      className={className}
      onPointerMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        mouse.current.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
        mouse.current.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
      }}
    >
      <Canvas
        camera={{ position: [0, 1.6, 4.2], fov: 42 }}
        dpr={[1, 1.8]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.55} />
        <directionalLight position={[4, 6, 3]} intensity={1.4} />
        <pointLight position={[-3, 2, -2]} intensity={0.7} color="#4f9dff" />
        <pointLight position={[0, 2.5, 0]} intensity={0.6} color="#39ff9e" />
        <Float speed={2} rotationIntensity={0.15} floatIntensity={0.7}>
          <Chip mouse={mouse} />
        </Float>
      </Canvas>
    </div>
  )
}
