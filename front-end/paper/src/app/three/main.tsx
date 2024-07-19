import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const ThreeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const loader = new GLTFLoader();
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    const camera = new THREE.PerspectiveCamera(
      25,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    mountRef.current.appendChild(renderer.domElement);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    const boxGeometry = new THREE.BoxGeometry();
    const pyramidGeometry = new THREE.TetrahedronGeometry();

    const cubeMaterial = new THREE.MeshBasicMaterial({
      color: 0x000000,
      wireframe: true,
    });
    const pyramidMaterial = new THREE.MeshStandardMaterial({
      color: 0x000000,
      wireframe: true,
    });
    const pyramid = new THREE.Mesh(pyramidGeometry, pyramidMaterial);
    const cube = new THREE.Mesh(boxGeometry, cubeMaterial);
    scene.add(cube);
    scene.add(pyramid);

    pyramid.position.set(-2, 0, 0);

    camera.position.z = 10;


    loader.load(
      "../../../assets/papigga.glb",
      function (gltf: any) {
        const plane = gltf.scene

        plane.position.set(2, 0,0)
        scene.add(plane);

      },
      undefined,
      function (err: unknown) {
        console.error(err);
      }
    );
  
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.001;
      cube.rotation.y += 0.001;

      pyramid.rotation.x -= 0.001;
      pyramid.rotation.y -= 0.001;

  

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

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
