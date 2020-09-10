
// Ray Gen Perspective


var ray1_1Per = new THREE.Geometry();
var ray1_2Per = new THREE.Geometry();
var ray1_3Per = new THREE.Geometry();


var ray2_1Per = new THREE.Geometry();
var ray2_2Per = new THREE.Geometry();
var ray2_3Per = new THREE.Geometry();


var ray3_1Per = new THREE.Geometry();
var ray3_2Per = new THREE.Geometry();
var ray3_3Per = new THREE.Geometry();


var ray4_1Per = new THREE.Geometry();
var ray4_2Per = new THREE.Geometry();
var ray4_3Per = new THREE.Geometry();


var ray5_1Per = new THREE.Geometry();
var ray5_2Per = new THREE.Geometry();
var ray5_3Per = new THREE.Geometry();

var cameraVec = new THREE.Vector3(0, .5, 2.3);

ray1_1Per.vertices.push(cameraVec);
ray1_1Per.vertices.push(new THREE.Vector3(.6, 1.5, 1));

ray1_2Per.vertices.push(cameraVec);
ray1_2Per.vertices.push(new THREE.Vector3(0, 1.5, 1));

ray1_3Per.vertices.push(cameraVec);
ray1_3Per.vertices.push(new THREE.Vector3(-.6, 1.5, 1));


ray2_1Per.vertices.push(cameraVec);
ray2_1Per.vertices.push(new THREE.Vector3(.6, 1.1, 1));

ray2_2Per.vertices.push(cameraVec);
ray2_2Per.vertices.push(new THREE.Vector3(0, 1.1, 1));

ray2_3Per.vertices.push(cameraVec);
ray2_3Per.vertices.push(new THREE.Vector3(-.6, 1.1, 1));


ray3_1Per.vertices.push(cameraVec);
ray3_1Per.vertices.push(new THREE.Vector3(.6, .75, 1));

ray3_2Per.vertices.push(cameraVec);
ray3_2Per.vertices.push(new THREE.Vector3(0, .75, 1));

ray3_3Per.vertices.push(cameraVec);
ray3_3Per.vertices.push(new THREE.Vector3(-.6, .75, 1));


ray4_1Per.vertices.push(cameraVec);
ray4_1Per.vertices.push(new THREE.Vector3(.6, .4, 1));

ray4_2Per.vertices.push(cameraVec);
ray4_2Per.vertices.push(new THREE.Vector3(0, .4, 1));

ray4_3Per.vertices.push(cameraVec);
ray4_3Per.vertices.push(new THREE.Vector3(-.6, .4, 1));


ray5_1Per.vertices.push(cameraVec);
ray5_1Per.vertices.push(new THREE.Vector3(.6, .2, 1));

ray5_2Per.vertices.push(cameraVec);
ray5_2Per.vertices.push(new THREE.Vector3(0, .2, 1));

ray5_3Per.vertices.push(cameraVec);
ray5_3Per.vertices.push(new THREE.Vector3(-.6, .2, 1));


//parallel
var ray1_1ObjPer = new THREE.Line(ray1_1Per, materialRay);
var ray1_2ObjPer = new THREE.Line(ray1_2Per, materialRay);
var ray1_3ObjPer = new THREE.Line(ray1_3Per, materialRay);

var ray2_1ObjPer = new THREE.Line(ray2_1Per, materialRay);
var ray2_2ObjPer = new THREE.Line(ray2_2Per, materialRay);
var ray2_3ObjPer = new THREE.Line(ray2_3Per, materialRay);

var ray3_1ObjPer = new THREE.Line(ray3_1Per, materialRay);
var ray3_2ObjPer = new THREE.Line(ray3_2Per, materialRay);
var ray3_3ObjPer = new THREE.Line(ray3_3Per, materialRay);

var ray4_1ObjPer = new THREE.Line(ray4_1Per, materialRay);
var ray4_2ObjPer = new THREE.Line(ray4_2Per, materialRay);
var ray4_3ObjPer = new THREE.Line(ray4_3Per, materialRay);

var ray5_1ObjPer = new THREE.Line(ray5_1Per, materialRay);
var ray5_2ObjPer = new THREE.Line(ray5_2Per, materialRay);
var ray5_3ObjPer = new THREE.Line(ray5_3Per, materialRay);

scene.add(ray1_1ObjPer);
scene.add(ray1_2ObjPer);
scene.add(ray1_3ObjPer);


scene.add(ray2_1ObjPer);
scene.add(ray2_2ObjPer);
scene.add(ray2_3ObjPer);

scene.add(ray3_1ObjPer);
scene.add(ray3_2ObjPer);
scene.add(ray3_3ObjPer);


scene.add(ray4_1ObjPer);
scene.add(ray4_2ObjPer);
scene.add(ray4_3ObjPer);

scene.add(ray5_1ObjPer);
scene.add(ray5_2ObjPer);
scene.add(ray5_3ObjPer);

//
// Cast Gen per
//

var ray1_1CastPer = new THREE.Geometry();
var ray1_2CastPer = new THREE.Geometry();
var ray1_3CastPer = new THREE.Geometry();


var ray2_1CastPer = new THREE.Geometry();
var ray2_2CastPer = new THREE.Geometry();
var ray2_3CastPer = new THREE.Geometry();


var ray3_1CastPer = new THREE.Geometry();
var ray3_2CastPer = new THREE.Geometry();
var ray3_3CastPer = new THREE.Geometry();


var ray4_1CastPer = new THREE.Geometry();
var ray4_2CastPer = new THREE.Geometry();
var ray4_3CastPer = new THREE.Geometry();


var ray5_1CastPer = new THREE.Geometry();
var ray5_2CastPer = new THREE.Geometry();
var ray5_3CastPer = new THREE.Geometry();
