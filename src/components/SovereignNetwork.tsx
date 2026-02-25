import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const NODE_COUNT = 60;
const EDGE_COUNT = 80;

function DataNodes() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const nodes = useMemo(() => {
    const arr = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      arr.push({
        pos: new THREE.Vector3(
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 6
        ),
        speed: 0.1 + Math.random() * 0.15,
        offset: Math.random() * Math.PI * 2,
        scale: 0.03 + Math.random() * 0.05,
      });
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    nodes.forEach((node, i) => {
      dummy.position.set(
        node.pos.x + Math.sin(t * node.speed + node.offset) * 0.3,
        node.pos.y + Math.cos(t * node.speed * 0.7 + node.offset) * 0.2,
        node.pos.z + Math.sin(t * node.speed * 0.5) * 0.15
      );
      const pulse = 1 + Math.sin(t * 1.5 + node.offset) * 0.3;
      dummy.scale.setScalar(node.scale * pulse);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, NODE_COUNT]}>
      <sphereGeometry args={[1, 12, 12]} />
      <meshStandardMaterial
        color="#b8964e"
        emissive="#b8964e"
        emissiveIntensity={0.6}
        metalness={0.9}
        roughness={0.2}
        transparent
        opacity={0.8}
      />
    </instancedMesh>
  );
}

function NetworkEdges() {
  const linesRef = useRef<THREE.Group>(null);

  const edges = useMemo(() => {
    const arr = [];
    for (let i = 0; i < EDGE_COUNT; i++) {
      const start = new THREE.Vector3(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6
      );
      const end = new THREE.Vector3(
        start.x + (Math.random() - 0.5) * 4,
        start.y + (Math.random() - 0.5) * 3,
        start.z + (Math.random() - 0.5) * 2
      );
      arr.push({ start, end, offset: Math.random() * Math.PI * 2 });
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (!linesRef.current) return;
    const t = clock.getElapsedTime();
    linesRef.current.children.forEach((child, i) => {
      const mat = child as THREE.Line;
      if (mat.material instanceof THREE.LineBasicMaterial) {
        mat.material.opacity = 0.08 + Math.sin(t * 0.5 + edges[i].offset) * 0.06;
      }
    });
  });

  return (
    <group ref={linesRef}>
      {edges.map((edge, i) => {
        const points = [edge.start, edge.end];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        return (
          <primitive key={i} object={new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: "#b8964e", transparent: true, opacity: 0.1 }))} />
        );
      })}
    </group>
  );
}

const SovereignNetwork = () => {
  return (
    <div className="absolute inset-0" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#b8964e" />
        <pointLight position={[-5, -3, 3]} intensity={0.4} color="#6b7280" />
        <DataNodes />
        <NetworkEdges />
      </Canvas>
    </div>
  );
};

export default SovereignNetwork;
