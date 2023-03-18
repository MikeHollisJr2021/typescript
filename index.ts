import * as THREE from 'three';

// Define the parameters of the Mobius strip
const a = 1;
const b = 0.3;
const numTwists = 2;

// Create the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Define the curve of the Mobius strip
const curve = new THREE.Curve();
curve.getPoint = (t: number) => {
  const angle = t * 2 * Math.PI;
  const x = (a + b * angle) * Math.cos(angle);
  const y = (a + b * angle) * Math.sin(angle);
  const z = numTwists * angle / (2 * Math.PI);
  return new THREE.Vector3(x, y, z);
};

// Create the tube geometry and mesh
const tubeGeometry = new THREE.TubeGeometry(curve, 100, 0.02, 20, false);
const tubeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const tubeMesh = new THREE.Mesh(tubeGeometry, tubeMaterial);

//
