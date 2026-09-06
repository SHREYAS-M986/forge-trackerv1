import * as THREE from './three.module.min.js';

/*
  Illustrative, stylized humanoid built from primitive shapes (capsules, spheres, boxes).
  This is NOT a medically accurate body scan — it's a rough visual approximation that
  scales overall height with the user's height, and torso/limb thickness with a simple
  heuristic combining body-fat % and weight-vs-expected-weight-for-height.
*/

let scene, camera, renderer, canvasEl, group, animId;
let dragging = false, lastX = 0, rotY = 0.5, autoRotate = true;
let parts = {};

function buildLimb(radiusTop, radiusBottom, length, material){
  const geo = new THREE.CapsuleGeometry(Math.max(radiusTop, radiusBottom), length, 4, 12);
  return new THREE.Mesh(geo, material);
}

function buildRig(){
  const g = new THREE.Group();
  const skin = new THREE.MeshStandardMaterial({ color: 0xE8B98A, roughness: 0.7, metalness: 0.05 });
  const cloth = new THREE.MeshStandardMaterial({ color: 0x3A3F58, roughness: 0.8, metalness: 0.05 });

  // torso
  const torso = buildLimb(0.42, 0.34, 1.1, cloth);
  torso.position.y = 1.55;
  g.add(torso);

  // hips
  const hips = buildLimb(0.36, 0.36, 0.32, cloth);
  hips.position.y = 1.02;
  g.add(hips);

  // neck
  const neck = buildLimb(0.11, 0.11, 0.14, skin);
  neck.position.y = 2.2;
  g.add(neck);

  // head
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.22, 20, 16), skin);
  head.position.y = 2.5;
  g.add(head);

  // arms (upper + lower each side)
  const armSideSign = [1, -1];
  const upperArms = [], forearms = [];
  armSideSign.forEach(sign=>{
    const upperArm = buildLimb(0.11, 0.1, 0.6, skin);
    upperArm.position.set(sign*0.55, 1.85, 0);
    upperArm.rotation.z = sign * 0.12;
    g.add(upperArm);
    upperArms.push(upperArm);

    const forearm = buildLimb(0.095, 0.08, 0.55, skin);
    forearm.position.set(sign*0.62, 1.25, 0);
    forearm.rotation.z = sign * 0.05;
    g.add(forearm);
    forearms.push(forearm);
  });

  // legs (thigh + calf each side)
  const thighs = [], calves = [];
  armSideSign.forEach(sign=>{
    const thigh = buildLimb(0.17, 0.14, 0.75, cloth);
    thigh.position.set(sign*0.22, 0.55, 0);
    g.add(thigh);
    thighs.push(thigh);

    const calf = buildLimb(0.12, 0.09, 0.7, skin);
    calf.position.set(sign*0.22, -0.25, 0);
    g.add(calf);
    calves.push(calf);
  });

  parts = { torso, hips, neck, head, upperArms, forearms, thighs, calves };
  return g;
}

function applyBodyStats({ heightCm, weightKg, bodyFatPct }){
  const h = heightCm || 170;
  const w = weightKg || 70;
  const bf = (bodyFatPct==null || isNaN(bodyFatPct)) ? 20 : bodyFatPct;

  const heightScale = h / 170;
  const expectedWeight = 22 * Math.pow(h/100, 2); // BMI-22 reference
  const weightRatio = expectedWeight > 0 ? w / expectedWeight : 1;

  let girth = 1 + (bf - 18) * 0.018;               // body-fat driven
  girth = girth * (0.55 + 0.45 * weightRatio);       // weight-relative blend
  girth = Math.min(Math.max(girth, 0.7), 1.7);

  if(group){
    group.scale.set(heightScale, heightScale, heightScale);
  }
  const torsoGirth = girth;
  const limbGirth = 1 + (girth-1)*0.55; // limbs affected less dramatically than torso

  if(parts.torso) parts.torso.scale.set(torsoGirth, 1, torsoGirth);
  if(parts.hips) parts.hips.scale.set(torsoGirth*0.95, 1, torsoGirth*0.95);
  [...(parts.upperArms||[]), ...(parts.forearms||[]), ...(parts.thighs||[]), ...(parts.calves||[])]
    .forEach(m=> m.scale.set(limbGirth, 1, limbGirth));
}

function onPointerDown(e){
  dragging = true;
  autoRotate = false;
  lastX = (e.touches ? e.touches[0].clientX : e.clientX);
}
function onPointerMove(e){
  if(!dragging) return;
  const x = (e.touches ? e.touches[0].clientX : e.clientX);
  const dx = x - lastX;
  lastX = x;
  rotY += dx * 0.01;
}
function onPointerUp(){ dragging = false; }

function resize(){
  if(!canvasEl || !renderer) return;
  const w = canvasEl.clientWidth || 300;
  const h = canvasEl.clientHeight || 300;
  renderer.setSize(w, h, false);
  camera.aspect = w/h;
  camera.updateProjectionMatrix();
}

function animate(){
  animId = requestAnimationFrame(animate);
  if(autoRotate) rotY += 0.004;
  if(group) group.rotation.y = rotY;
  renderer.render(scene, camera);
}

function init(canvas){
  canvasEl = canvas;
  scene = new THREE.Scene();
  scene.background = null;

  camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
  camera.position.set(0, 1.3, 5.2);
  camera.lookAt(0, 1.1, 0);

  renderer = new THREE.WebGLRenderer({ canvas, antialias:true, alpha:true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1, 2));

  const ambient = new THREE.AmbientLight(0xffffff, 0.65);
  scene.add(ambient);
  const dir = new THREE.DirectionalLight(0xfff2d8, 0.9);
  dir.position.set(2, 4, 3);
  scene.add(dir);
  const dir2 = new THREE.DirectionalLight(0x8fb4ff, 0.35);
  dir2.position.set(-3, 1, -2);
  scene.add(dir2);

  group = buildRig();
  scene.add(group);

  canvas.addEventListener('pointerdown', onPointerDown);
  window.addEventListener('pointermove', onPointerMove);
  window.addEventListener('pointerup', onPointerUp);
  canvas.addEventListener('touchstart', onPointerDown, {passive:true});
  window.addEventListener('touchmove', onPointerMove, {passive:true});
  window.addEventListener('touchend', onPointerUp);

  window.addEventListener('resize', resize);
  resize();
  animate();
}

function setAutoRotate(val){ autoRotate = val; }
function destroy(){
  if(animId) cancelAnimationFrame(animId);
  window.removeEventListener('resize', resize);
  window.removeEventListener('pointermove', onPointerMove);
  window.removeEventListener('pointerup', onPointerUp);
}

window.BodyModel = { init, applyBodyStats, setAutoRotate, destroy, resize };
window.dispatchEvent(new Event('bodymodel-ready'));
