import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Stars() {
  const ref = useRef();
  const count = 2000;
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i*3]   = (Math.random() - 0.5) * 20;
      p[i*3+1] = (Math.random() - 0.5) * 20;
      p[i*3+2] = (Math.random() - 0.5) * 20;
    }
    return p;
  }, []);
  useFrame(s => {
    if (ref.current) {
      ref.current.rotation.y = s.clock.elapsedTime * 0.015;
      ref.current.rotation.x = s.clock.elapsedTime * 0.007;
    }
  });
  return (
    <Points ref={ref} positions={positions} frustumCulled={false}>
      <PointMaterial color="#818cf8" size={0.018} sizeAttenuation transparent opacity={0.5} depthWrite={false}/>
    </Points>
  );
}

function CandlestickScene() {
  const group = useRef();
  const candles = useMemo(() => {
    const arr = [];
    let price = 0;
    for (let i = 0; i < 28; i++) {
      const move = (Math.random() - 0.46) * 0.35;
      const open = price;
      const close = price + move;
      const high = Math.max(open, close) + Math.random() * 0.12;
      const low  = Math.min(open, close) - Math.random() * 0.12;
      arr.push({ open, close, high, low, x: (i - 14) * 0.28 });
      price = close;
    }
    return arr;
  }, []);

  useFrame(s => {
    if (group.current) {
      group.current.rotation.y = Math.sin(s.clock.elapsedTime * 0.18) * 0.35;
      group.current.rotation.x = Math.sin(s.clock.elapsedTime * 0.1) * 0.08;
      group.current.position.y = Math.sin(s.clock.elapsedTime * 0.3) * 0.12;
    }
  });

  return (
    <group ref={group} position={[0, -0.2, 0]}>
      {candles.map((c, i) => {
        const bull = c.close >= c.open;
        const bodyH = Math.max(Math.abs(c.close - c.open), 0.025);
        const bodyY = (c.open + c.close) / 2;
        const wickH = c.high - c.low;
        const wickY = (c.high + c.low) / 2;
        const col = bull ? '#10b981' : '#f43f5e';
        const opacity = 0.75 + i * 0.005;
        return (
          <group key={i} position={[c.x, 0, 0]}>
            <mesh position={[0, bodyY, 0]}>
              <boxGeometry args={[0.13, bodyH, 0.06]}/>
              <meshStandardMaterial color={col} transparent opacity={opacity} emissive={col} emissiveIntensity={0.3}/>
            </mesh>
            <mesh position={[0, wickY, 0]}>
              <boxGeometry args={[0.025, wickH, 0.025]}/>
              <meshStandardMaterial color={col} transparent opacity={0.5}/>
            </mesh>
          </group>
        );
      })}
      {/* MA line */}
      {candles.slice(1).map((c, i) => {
        const prev = candles[i];
        const midY1 = (prev.high + prev.low) / 2;
        const midY2 = (c.high + c.low) / 2;
        const pts = [
          new THREE.Vector3(prev.x, midY1, 0),
          new THREE.Vector3(c.x, midY2, 0),
        ];
        const geo = new THREE.BufferGeometry().setFromPoints(pts);
        return (
          <line key={`ma-${i}`} geometry={geo}>
            <lineBasicMaterial color="#6366f1" transparent opacity={0.6}/>
          </line>
        );
      })}
    </group>
  );
}

function FloatingCode() {
  const group = useRef();
  const lines = useMemo(() => {
    const segments = [];
    const widths = [1.2, 0.9, 1.5, 0.7, 1.1, 0.8, 1.3, 0.6, 1.0, 0.9, 1.4, 0.5];
    const colors = ['#6366f1','#06b6d4','#10b981','#6366f1','#06b6d4','#10b981','#6366f1','#06b6d4','#10b981','#6366f1','#06b6d4','#10b981'];
    widths.forEach((w, i) => {
      const x = -3.8;
      const y = 2.2 - i * 0.38;
      const indent = (i % 3 === 1 ? 0.4 : i % 3 === 2 ? 0.8 : 0);
      segments.push({ x: x + indent, y, w, color: colors[i] });
    });
    return segments;
  }, []);

  const geos = useMemo(() =>
    lines.map(l => {
      const pts = [new THREE.Vector3(l.x, l.y, -1), new THREE.Vector3(l.x + l.w, l.y, -1)];
      return new THREE.BufferGeometry().setFromPoints(pts);
    }), [lines]);

  useFrame(s => {
    if (group.current) {
      group.current.position.y = Math.sin(s.clock.elapsedTime * 0.25) * 0.15;
      group.current.children.forEach((child, i) => {
        if (child.material) child.material.opacity = 0.1 + 0.15 * Math.abs(Math.sin(s.clock.elapsedTime * 0.5 + i * 0.4));
      });
    }
  });

  return (
    <group ref={group}>
      {geos.map((geo, i) => (
        <line key={i} geometry={geo}>
          <lineBasicMaterial color={lines[i].color} transparent opacity={0.2}/>
        </line>
      ))}
    </group>
  );
}

function GridPlane() {
  const ref = useRef();
  const geo = useMemo(() => {
    const verts = [];
    for (let i = -8; i <= 8; i++) {
      verts.push(-8, -2.2, i, 8, -2.2, i);
      verts.push(i, -2.2, -8, i, -2.2, 8);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
    return g;
  }, []);
  useFrame(s => {
    if (ref.current) ref.current.position.z = (s.clock.elapsedTime * 0.5) % 1;
  });
  return (
    <lineSegments ref={ref} geometry={geo}>
      <lineBasicMaterial color="#6366f1" transparent opacity={0.05}/>
    </lineSegments>
  );
}

function FloatingRing() {
  const ref = useRef();
  useFrame(s => {
    if (ref.current) {
      ref.current.rotation.x = s.clock.elapsedTime * 0.2;
      ref.current.rotation.z = s.clock.elapsedTime * 0.1;
    }
  });
  return (
    <mesh ref={ref} position={[3, 0.5, -1]}>
      <torusGeometry args={[0.8, 0.02, 16, 60]}/>
      <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.5} transparent opacity={0.4}/>
    </mesh>
  );
}

function FloatingDots() {
  const ref = useRef();
  const count = 80;
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const r = 3.5 + Math.random() * 0.5;
      p[i*3]   = Math.cos(angle) * r;
      p[i*3+1] = (Math.random() - 0.5) * 1.5;
      p[i*3+2] = Math.sin(angle) * r;
    }
    return p;
  }, []);
  useFrame(s => {
    if (ref.current) ref.current.rotation.y = s.clock.elapsedTime * 0.08;
  });
  return (
    <Points ref={ref} positions={positions} frustumCulled={false}>
      <PointMaterial color="#06b6d4" size={0.04} sizeAttenuation transparent opacity={0.7} depthWrite={false}/>
    </Points>
  );
}

export default function WebGLScene() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0.5, 6], fov: 52 }} gl={{ antialias: true, alpha: true }}>
        <fog attach="fog" args={['#050810', 8, 20]}/>
        <ambientLight intensity={0.15}/>
        <pointLight position={[5, 4, 5]} intensity={1.2} color="#6366f1"/>
        <pointLight position={[-4, -2, 3]} intensity={0.8} color="#06b6d4"/>
        <pointLight position={[0, 5, -3]} intensity={0.5} color="#10b981"/>
        <Stars/>
        <CandlestickScene/>
        <FloatingCode/>
        <GridPlane/>
        <FloatingRing/>
        <FloatingDots/>
      </Canvas>
    </div>
  );
}
