var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(25, window.innerWidth/window.innerHeight, 1, 10000);
var renderer = new THREE.WebGLRenderer();
camera.position.z = 4300;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const loader = new THREE.TextureLoader();
const bgTexture = loader.load('sky.jpg');
scene.background = bgTexture;

var sun_geometry = new THREE.SphereGeometry( 430, 30, 30 );
var sun_material = new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load('sun.jpg'), wireframe:false, side:THREE.DoubleSide});
var sun_sphere = new THREE.Mesh( sun_geometry, sun_material );

var earth_geometry = new THREE.SphereGeometry( 80, 20, 20 );
var earth_material = new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load('earth.jpg'), wireframe:false, side:THREE.DoubleSide});
var earth_sphere = new THREE.Mesh( earth_geometry, earth_material );
earth_sphere.position.x = 1500;

var moon_geometry = new THREE.SphereGeometry( 40, 15, 15 );
var moon_material = new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load('moon.jpg'), wireframe:false, side:THREE.DoubleSide});
var moon_sphere = new THREE.Mesh( moon_geometry, moon_material );
moon_sphere.position.x = 200;

scene.add( sun_sphere );
sun_sphere.add( earth_sphere );
earth_sphere.add( moon_sphere ); 

function render() {
    requestAnimationFrame(render);
    sun_sphere.rotation.y += 0.001;
    earth_sphere.rotation.y += 0.005;
    moon_sphere.rotation.y += 0.008;

    renderer.render(scene, camera);
};

render();