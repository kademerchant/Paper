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
    scene.background = new THREE.Color(0xfefbea);
    const camera = new THREE.PerspectiveCamera(
      25,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 7;
    camera.rotation.y = 0.7;
    camera.position.y = 7;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    mountRef.current.appendChild(renderer.domElement);
    /*const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;*/

    // const boxGeometry = new THREE.BoxGeometry();
    const pyramidGeometry = new THREE.TetrahedronGeometry();

    /*const cubeMaterial = new THREE.MeshBasicMaterial({
      color: 0x000000,
      wireframe: true,
    });*/
    const pyramidMaterial = new THREE.MeshStandardMaterial({
      color: 0x000000,
      wireframe: true,
    });
    const pyramid = () => {
      const newPyramid = new THREE.Mesh(pyramidGeometry, pyramidMaterial);
      return newPyramid;
    };
    // const cube = new THREE.Mesh(boxGeometry, cubeMaterial);
    // scene.add(cube);

    const numOfPyramids = 1500;
    // const numOfCubes = 50;

    const pyramids = [];
    // const cubes = [];

    for (let i = 0; i < numOfPyramids; i++) {
      const newPyramid = pyramid();
      newPyramid.position.set(
        Math.random() * 600 - 300,
        Math.random() * 400 - 200,
        Math.random() * 300 - 150
      );
      scene.add(newPyramid);
      pyramids.push(newPyramid);
    }
    let plane: THREE.Object3D | null = null;
    loader.load(
      "../../../assets/papigga.glb",
      function (gltf: any) {
        plane = gltf.scene;
        if (plane) {
          plane.position.set(-4, 0, 0);
          plane.rotation.y = 180 * (Math.PI / 180)
          scene.add(plane);
        }
      },
      undefined,
      function (err: unknown) {
        console.error(err);
      }
    );

    let time = 0
    const animate = () => {
      requestAnimationFrame(animate);
      //cube.rotation.x += 0.001;
      //cube.rotation.y += 0.001;

      if (camera.rotation.y >= 0.2 && plane) {
        camera.rotation.y -= 0.00044;
        camera.rotation.x -= 0.00025;
        camera.position.z += 0.01;
        plane.position.x += 0.0014
      } else if (camera.rotation.y >= 0.14 && plane) {
        camera.rotation.y -= 0.00044;
        camera.rotation.x -= 0.000016;
        camera.position.z += 0.007;
        plane.position.x += 0.0149;
      } else if (camera.rotation.y > -1.2 && plane) {
        camera.rotation.y -= 0.00045;
        plane.position.x += 0.0149;
      } else if (camera.rotation.y > -1.4 && plane) {
        time += 0.0003
        plane.position.x += 0.024
        plane.rotation.z -= 0.001
        plane.position.y += time**2
      }

      /*controls.update();*/
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
