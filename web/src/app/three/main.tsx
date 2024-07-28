import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import randomLightHex from "./helpers/HSLtoHEX";

interface icosahedron {
  mesh: THREE.Mesh;
  rotationSpeed: { x: number; y: number };
}

const ThreeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Initialising 3D model loader, scene, and lights
    const loader = new GLTFLoader();
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xfefbea);

    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 2);
    scene.add(ambientLight);

    // Directional lights
    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 3);
    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 3);
    
    directionalLight1.position.set(2, 1, 1);
    directionalLight2.position.set(1, -3, 0);
    scene.add(directionalLight1);
    scene.add(directionalLight2);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      25,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 15;
    camera.position.y = 7;
    camera.rotation.x = -0.287514;

    // Renderer
    const renderer = new THREE.WebGLRenderer({antialias: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );

    // Mounting the renderer element to the parent element
    mountRef.current.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.01;
    controls.enableZoom = false;
    controls.rotateSpeed = 0.1;
    controls.enablePan = false;

    // Icosahedrons
    let icosahedronGeometry: THREE.IcosahedronGeometry | null = null;
    let icosahedronMaterial: THREE.Material | null = null;
    
    const icosahedron = (icosahedronGeometry: THREE.IcosahedronGeometry, icosahedronMaterial: THREE.Material) =>
      new THREE.Mesh(icosahedronGeometry, icosahedronMaterial);

    const numOfIcosahedrons = 3000;
    const icosahedrons: icosahedron[] = [];
    let detail: number = 0;
    let colour: string = ''

    for (let i = 0; i < numOfIcosahedrons; i++) {
      detail = Math.floor(Math.random() * 2);
      colour = randomLightHex((Math.floor(Math.random() * 360)), 36, 83)
      if (detail === 1) {
        detail = 3;
      }
      console.log(colour)

      icosahedronGeometry = new THREE.IcosahedronGeometry(1, detail);
      icosahedronMaterial = new THREE.MeshStandardMaterial({
        color: colour,
        roughness: 0.5,
        metalness: 0.5,
      });

      const newIcosahedron = icosahedron(icosahedronGeometry, icosahedronMaterial);
      newIcosahedron.position.set(
        Math.random() * 350 - 225,
        Math.random() * 225 - 145,
        Math.random() * 450 - 275
      );
      scene.add(newIcosahedron);

      const rotationSpeed = {
        x: Math.random() * 0.003 + 0.001,
        y: Math.random() * 0.002 + 0.001,
      };
      icosahedrons.push({ mesh: newIcosahedron, rotationSpeed: rotationSpeed });
    }

    let plane: THREE.Object3D | null = null;
    loader.load(
      "../../../assets/papigga.glb",
      function (gltf: any) {
        plane = gltf.scene;
        if (plane) {
          plane.position.set(-12, 0, 0);
          plane.rotation.y = 180 * (Math.PI / 180);
          scene.add(plane);
        }
      },
      undefined,
      function (err: unknown) {
        console.error(err);
      }
    );

    let time: number = 0;
    let rise: number = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      icosahedrons.forEach(({ mesh, rotationSpeed }) => {
        mesh.rotation.x += rotationSpeed.x;
        mesh.rotation.y += rotationSpeed.y;
      });

      rise += 0.000045;
      time += 1;
      if (plane && time < 1500) {
        plane.position.x += 0.0149;
      } else if (plane && time >= 1500) {
        plane.position.x += 0.03 + rise ** 2;
        if (plane.rotation.z > -0.9) {
          plane.rotation.z -= 0.0014; // Decrease rotation if condition is met
        }
        plane.position.y += rise ** 2;
      }

      renderer.render(scene, camera);
      controls.update();
    };
    animate();
    console.log("Animating...");

    const handleResize = () => {
      if (!mountRef.current) return;
      camera.aspect =
        mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        mountRef.current.clientWidth,
        mountRef.current.clientHeight
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
};

export default ThreeScene;
