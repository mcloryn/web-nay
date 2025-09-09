import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

const ActionFigure = () => {
  const groupRef = useRef()

  // Biar dummy figure muter pelan
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01
    }
  })

  return (
    <group ref={groupRef}>
      {/* Badan */}
      <mesh position={[0, -0.5, 0]}>
        <boxGeometry args={[1, 1.5, 0.5]} />
        <meshStandardMaterial color="pink" />
      </mesh>

      {/* Kepala */}
      <mesh position={[0, 1.2, 0]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial color="peachpuff" />
      </mesh>

      {/* Kaki kiri */}
      <mesh position={[-0.3, -1.6, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.8, 32]} />
        <meshStandardMaterial color="purple" />
      </mesh>

      {/* Kaki kanan */}
      <mesh position={[0.3, -1.6, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.8, 32]} />
        <meshStandardMaterial color="purple" />
      </mesh>

      {/* Tangan kiri */}
      <mesh position={[-0.8, 0.3, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.8, 32]} />
        <meshStandardMaterial color="orange" />
      </mesh>

      {/* Tangan kanan */}
      <mesh position={[0.8, 0.3, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.8, 32]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </group>
  )
}

export default ActionFigure
