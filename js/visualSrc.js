//
// CAMERA, SCENE, GUI DFN
//

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1500 );
var controls = new THREE.OrbitControls(camera);
camera.position.set( 0, 2, 7 );
camera.lookAt( 0, 0, 0 );
controls.update();


//
// RENDERER
//

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


//
// LIGHTING
//

// AMBIENT
var ambientLight = new THREE.AmbientLight( 0x000000 );
scene.add( ambientLight );

// POINT
var lights = [];
lights[ 0 ] = new THREE.PointLight( 0xffffff, 1, 0 );
lights[ 1 ] = new THREE.PointLight( 0xffffff, 1, 0 );
lights[ 0 ].position.set( 0, 7, 0 );
lights[ 1 ].position.set( 5, 7, 5 );

// SPOTLIGHT
var spotLight = new THREE.SpotLight( 0xffffff );
spotLight.angle = .3;
spotLight.distance = 3.0;

scene.add( lights[ 0 ] );
scene.add( lights[ 1 ] );


//
// MATERIAL DFN
//

// COLOR DFN
var color = new THREE.Color("rgb(10, 40, 200)");
var brightGreen = new THREE.Color("rgb(66, 244, 69)");
var lightBlue = new THREE.Color("rgb(31, 49, 242)");

var colorEggshell = new THREE.Color("rgb(84, 82,74)");
var spec = new THREE.Color("rgb(255, 0, 0)");

// MATERIALS
var material = new THREE.MeshToonMaterial( {
                color: (color),
                specular: ( 'skyblue' ),
                reflectivity: .2,
                shininess: .1,
              } );

var material5 = new THREE.MeshToonMaterial( {
                color: (colorEggshell),
                specular: ( 'skyblue' ),
                reflectivity: .2,
                shininess: .1,
              } );

var color2 = new THREE.Color("rgb(200, 20, 30)");

var material2 = new THREE.MeshToonMaterial( {
                color: (color2),
                specular: ( 'skyblue' ),
                reflectivity: .2,
                shininess: .1,
              } );

var material3 = new THREE.MeshToonMaterial( {
                color: (color),
                specular: ( 'skyblue' ),
                reflectivity: .2,
                shininess: .1,
                side: THREE.DoubleSide,
                transparent: true,
                opacity: .3,
              } );

var materialLine = new THREE.LineBasicMaterial( {
  color: 'skyblue',
  linewidth: 3,
  linecap: 'round', //ignored by WebGLRenderer
  linejoin:  'round' //ignored by WebGLRenderer
} );

var materialLineThinBright = new THREE.LineBasicMaterial( {
  color: 'lightBlue',
  linewidth: 2,
  linecap: 'round', //ignored by WebGLRenderer
  linejoin:  'round', //ignored by WebGLRenderer
  transparent: true,
  opacity: .8,
} );

var materialRay = new THREE.LineBasicMaterial( {
  color: brightGreen,
  linewidth: 4,
  linecap: 'round', //ignored by WebGLRenderer
  linejoin:  'round' //ignored by WebGLRenderer
} );

var materialRayCast = new THREE.LineBasicMaterial( {
  color: brightGreen,
  linewidth: 2,
  linecap: 'round', //ignored by WebGLRenderer
  linejoin:  'round' //ignored by WebGLRenderer
} );

var materialRayIntersect = new THREE.LineBasicMaterial( {
  color: 'red',
  linewidth: 10,
  linecap: 'round', //ignored by WebGLRenderer
  linejoin:  'round' //ignored by WebGLRenderer
} );

var rayLight = new THREE.LineBasicMaterial( {
  color: 'orange',
  linewidth: 10,
  linecap: 'round', //ignored by WebGLRenderer
  linejoin:  'round' //ignored by WebGLRenderer
} );

var rayShadow = new THREE.LineBasicMaterial( {
  color: 'gray',
  linewidth: 10,
  linecap: 'round', //ignored by WebGLRenderer
  linejoin:  'round' //ignored by WebGLRenderer
} );

var rayHalf = new THREE.LineBasicMaterial( {
  color: 'purple',
  linewidth: 10,
  linecap: 'round', //ignored by WebGLRenderer
  linejoin:  'round' //ignored by WebGLRenderer
} );

var normal = new THREE.LineBasicMaterial( {
  color: 'brown',
  linewidth: 10,
  linecap: 'round', //ignored by WebGLRenderer
  linejoin:  'round' //ignored by WebGLRenderer
} );


//
// FRUSTUM VERT DFN
//

var rightTopLineGeo = new THREE.Geometry();
rightTopLineGeo.vertices.push(new THREE.Vector3(0, .5, 4.3) );
rightTopLineGeo.vertices.push(new THREE.Vector3(.8, 1.6, 1));
rightTopLineGeo.vertices.push(new THREE.Vector3(.8, 1.6, -3));
var rightTopLine = new THREE.Line( rightTopLineGeo, materialLine );



var leftTopLineGeo = new THREE.Geometry();
leftTopLineGeo.vertices.push(new THREE.Vector3(0, .5, 4.3) );
leftTopLineGeo.vertices.push(new THREE.Vector3(-.8, 1.6, 1));
leftTopLineGeo.vertices.push(new THREE.Vector3(-.8, 1.6, -3));
var leftTopLine = new THREE.Line( leftTopLineGeo, materialLine );

var rightBottomLineGeo = new THREE.Geometry();
rightBottomLineGeo.vertices.push(new THREE.Vector3(0, .5, 4.3) );
rightBottomLineGeo.vertices.push(new THREE.Vector3(.8, 0, 1));
rightBottomLineGeo.vertices.push(new THREE.Vector3(.8, 0, -3));
var rightBottomLine = new THREE.Line( rightBottomLineGeo, materialLine );

var leftBottomLineGeo = new THREE.Geometry();
leftBottomLineGeo.vertices.push(new THREE.Vector3(0, .5, 4.3) );
leftBottomLineGeo.vertices.push(new THREE.Vector3(-.8, 0, 1));
leftBottomLineGeo.vertices.push(new THREE.Vector3(-.8, 0, -3));
var leftBottomLine = new THREE.Line( leftBottomLineGeo, materialLine );

var farFrameLineGeo = new THREE.Geometry();
farFrameLineGeo.vertices.push(new THREE.Vector3(.8, 0, -3));
farFrameLineGeo.vertices.push(new THREE.Vector3(.8, 1.6, -3));
farFrameLineGeo.vertices.push(new THREE.Vector3(-.8, 1.6, -3));
farFrameLineGeo.vertices.push(new THREE.Vector3(-.8, 0, -3));
farFrameLineGeo.vertices.push(new THREE.Vector3(.8, 0, -3));

var farFrameLine = new THREE.Line(farFrameLineGeo, materialLine );

var nearFrameLineGeo = new THREE.Geometry();
nearFrameLineGeo.vertices.push(new THREE.Vector3(.8, 0, 1));
nearFrameLineGeo.vertices.push(new THREE.Vector3(.8, 1.6, 1));
nearFrameLineGeo.vertices.push(new THREE.Vector3(-.8, 1.6, 1));
nearFrameLineGeo.vertices.push(new THREE.Vector3(-.8, 0, 1));
nearFrameLineGeo.vertices.push(new THREE.Vector3(.8, 0, 1));

var nearFrameLine = new THREE.Line( nearFrameLineGeo, materialLine );


//
// GEOMETRY DFN
//
var planeGeo = new THREE.PlaneGeometry( 1.6, 1.6, 10 );
var cameraGeo = new THREE.SphereGeometry(.2, 10, 10);
var lightGeo = new THREE.SphereGeometry(.38, 10, 10);
var objectGeo = new THREE.SphereGeometry(.65, 20, 20);


//
// OBJECT DFN
//
var objectObj = new THREE.Mesh(objectGeo, material2);
var planeObj = new THREE.Mesh(planeGeo, material3);
var cameraObj = new THREE.Mesh(cameraGeo, material);
var lightObj = new THREE.Mesh(cameraGeo, material5);


//OBJECT POS DFN
objectObj.position.set(0, .8, -2);
cameraObj.position.set(0, .5, 4.3);
planeObj.position.set(0, .8, 1);
lightObj.position.set(-2, 2, -.3);
spotLight.position.set(-2, 2, -.3);

//
// SCENE ADDITIONS
//


//
// Ray Gen Parallel
//

var ray1_1 = new THREE.Geometry();
var ray1_2 = new THREE.Geometry();
var ray1_3 = new THREE.Geometry();


var ray2_1 = new THREE.Geometry();
var ray2_2 = new THREE.Geometry();
var ray2_3 = new THREE.Geometry();


var ray3_1 = new THREE.Geometry();
var ray3_2 = new THREE.Geometry();
var ray3_3 = new THREE.Geometry();


var ray4_1 = new THREE.Geometry();
var ray4_2 = new THREE.Geometry();
var ray4_3 = new THREE.Geometry();


var ray5_1 = new THREE.Geometry();
var ray5_2 = new THREE.Geometry();
var ray5_3 = new THREE.Geometry();

var cameraVec = new THREE.Vector3(0, .5, 2.3);

ray1_1.vertices.push(new THREE.Vector3(.6, 1.5, 3));
ray1_1.vertices.push(new THREE.Vector3(.6, 1.5, 1));

ray1_2.vertices.push(new THREE.Vector3(0, 1.5, 3));
ray1_2.vertices.push(new THREE.Vector3(0, 1.5, 1));

ray1_3.vertices.push(new THREE.Vector3(-.6, 1.5, 3));
ray1_3.vertices.push(new THREE.Vector3(-.6, 1.5, 1));


ray2_1.vertices.push(new THREE.Vector3(.6, 1.1, 3));
ray2_1.vertices.push(new THREE.Vector3(.6, 1.1, 1));

ray2_2.vertices.push(new THREE.Vector3(0, 1.1, 3));
ray2_2.vertices.push(new THREE.Vector3(0, 1.1, 1));

ray2_3.vertices.push(new THREE.Vector3(-.6, 1.1, 3));
ray2_3.vertices.push(new THREE.Vector3(-.6, 1.1, 1));


ray3_1.vertices.push(new THREE.Vector3(.6, .75, 3));
ray3_1.vertices.push(new THREE.Vector3(.6, .75, 1));

ray3_2.vertices.push(new THREE.Vector3(0, .75, 3));
ray3_2.vertices.push(new THREE.Vector3(0, .75, 1));

ray3_3.vertices.push(new THREE.Vector3(-.6, .75, 3));
ray3_3.vertices.push(new THREE.Vector3(-.6, .75, 1));


ray4_1.vertices.push(new THREE.Vector3(.6, .4, 3));
ray4_1.vertices.push(new THREE.Vector3(.6, .4, 1));

ray4_2.vertices.push(new THREE.Vector3(0, .4, 3));
ray4_2.vertices.push(new THREE.Vector3(0, .4, 1));

ray4_3.vertices.push(new THREE.Vector3(-.6, .4, 3));
ray4_3.vertices.push(new THREE.Vector3(-.6, .4, 1));


ray5_1.vertices.push(new THREE.Vector3(.6, .2, 3));
ray5_1.vertices.push(new THREE.Vector3(.6, .2, 1));

ray5_2.vertices.push(new THREE.Vector3(0, .2, 3));
ray5_2.vertices.push(new THREE.Vector3(0, .2, 1));

ray5_3.vertices.push(new THREE.Vector3(-.6, .2, 3));
ray5_3.vertices.push(new THREE.Vector3(-.6, .2, 1));


//parallel
var ray1_1Obj = new THREE.Line(ray1_1, materialRay);
var ray1_2Obj = new THREE.Line(ray1_2, materialRay);
var ray1_3Obj = new THREE.Line(ray1_3, materialRay);

var ray2_1Obj = new THREE.Line(ray2_1, materialRay);
var ray2_2Obj = new THREE.Line(ray2_2, materialRay);
var ray2_3Obj = new THREE.Line(ray2_3, materialRay);

var ray3_1Obj = new THREE.Line(ray3_1, materialRay);
var ray3_2Obj = new THREE.Line(ray3_2, materialRay);
var ray3_3Obj = new THREE.Line(ray3_3, materialRay);

var ray4_1Obj = new THREE.Line(ray4_1, materialRay);
var ray4_2Obj = new THREE.Line(ray4_2, materialRay);
var ray4_3Obj = new THREE.Line(ray4_3, materialRay);

var ray5_1Obj = new THREE.Line(ray5_1, materialRay);
var ray5_2Obj = new THREE.Line(ray5_2, materialRay);
var ray5_3Obj = new THREE.Line(ray5_3, materialRay);

scene.add(ray1_1Obj);
scene.add(ray1_2Obj);
scene.add(ray1_3Obj);


scene.add(ray2_1Obj);
scene.add(ray2_2Obj);
scene.add(ray2_3Obj);

scene.add(ray3_1Obj);
scene.add(ray3_2Obj);
scene.add(ray3_3Obj);


scene.add(ray4_1Obj);
scene.add(ray4_2Obj);
scene.add(ray4_3Obj);

scene.add(ray5_1Obj);
scene.add(ray5_2Obj);
scene.add(ray5_3Obj);

//
// Cast Gen
//

var ray1_1Cast = new THREE.Geometry();
var ray1_2Cast = new THREE.Geometry();
var ray1_3Cast = new THREE.Geometry();


var ray2_1Cast = new THREE.Geometry();
var ray2_2Cast = new THREE.Geometry();
var ray2_3Cast = new THREE.Geometry();


var ray3_1Cast = new THREE.Geometry();
var ray3_2Cast = new THREE.Geometry();
var ray3_3Cast = new THREE.Geometry();


var ray4_1Cast = new THREE.Geometry();
var ray4_2Cast = new THREE.Geometry();
var ray4_3Cast = new THREE.Geometry();


var ray5_1Cast = new THREE.Geometry();
var ray5_2Cast = new THREE.Geometry();
var ray5_3Cast = new THREE.Geometry();

var cameraVec = new THREE.Vector3(0, .5, 2.3);


ray1_1Cast.vertices.push(new THREE.Vector3(.6, 1.5, 1));
ray1_1Cast.vertices.push(new THREE.Vector3(.6, 1.5, -3));

/////////







// Ray Gen Perspective







///////////

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

var cameraVec = new THREE.Vector3(0, .5, 4.3);

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





// CAST PER !!



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

ray1_1CastPer.vertices.push(new THREE.Vector3(0, 1.5, 1));
ray1_1CastPer.vertices.push(new THREE.Vector3(0, 2.5, -3));


ray1_2CastPer.vertices.push(new THREE.Vector3(-.6, 1.5, 1));
ray1_2CastPer.vertices.push(new THREE.Vector3(-1.0, 2.5, -3));

ray1_3CastPer.vertices.push(new THREE.Vector3(.6, 1.5, 1));
ray1_3CastPer.vertices.push(new THREE.Vector3(1.0, 2.5, -3));



ray2_1CastPer.vertices.push(new THREE.Vector3(.6, 1.1, 1));
ray2_1CastPer.vertices.push(new THREE.Vector3(.9, 1.6, -3));


ray2_2CastPer.vertices.push(new THREE.Vector3(0, 1.1, 1));
ray2_2CastPer.vertices.push(new THREE.Vector3(0, 1.6, -3));


ray2_3CastPer.vertices.push(new THREE.Vector3(-.6, 1.1, 1));
ray2_3CastPer.vertices.push(new THREE.Vector3(-.9, 1.6, -3));



ray3_1CastPer.vertices.push(new THREE.Vector3(.6, .75, 1));
ray3_1CastPer.vertices.push(new THREE.Vector3(.9, .75, -3));


ray3_2CastPer.vertices.push(new THREE.Vector3(0, .75, 1));
ray3_2CastPer.vertices.push(new THREE.Vector3(0, .75, -3));


ray3_3CastPer.vertices.push(new THREE.Vector3(-.6, .75, 1));
ray3_3CastPer.vertices.push(new THREE.Vector3(-.9, .75, -3));



ray4_1CastPer.vertices.push(new THREE.Vector3(.6, .4, 1));
ray4_1CastPer.vertices.push(new THREE.Vector3(.9, .1, -3));


ray4_2CastPer.vertices.push(new THREE.Vector3(0, .4, 1));
ray4_2CastPer.vertices.push(new THREE.Vector3(0, .1, -3));


ray4_3CastPer.vertices.push(new THREE.Vector3(-.6, .4, 1));
ray4_3CastPer.vertices.push(new THREE.Vector3(-.9, .1, -3));



ray5_1CastPer.vertices.push(new THREE.Vector3(.6, .2, 1));
ray5_1CastPer.vertices.push(new THREE.Vector3(.9, -.2, -3));


ray5_2CastPer.vertices.push(new THREE.Vector3(0, .2, 1));
ray5_2CastPer.vertices.push(new THREE.Vector3(0, -.2, -3));


ray5_3CastPer.vertices.push(new THREE.Vector3(-.6, .2, 1));
ray5_3CastPer.vertices.push(new THREE.Vector3(-.9, -.2, -3));



var ray1_1CastObjPer = new THREE.Line(ray1_1CastPer, materialRayCast);
var ray1_2CastObjPer = new THREE.Line(ray1_2CastPer, materialRayCast);
var ray1_3CastObjPer = new THREE.Line(ray1_3CastPer, materialRayCast);

var ray2_1CastObjPer = new THREE.Line(ray2_1CastPer, materialRayCast);
var ray2_2CastObjPer = new THREE.Line(ray2_2CastPer, materialRayCast);
var ray2_3CastObjPer = new THREE.Line(ray2_3CastPer, materialRayCast);

var ray3_1CastObjPer = new THREE.Line(ray3_1CastPer, materialRayCast);
var ray3_2CastObjPer = new THREE.Line(ray3_2CastPer, materialRayIntersect);
var ray3_3CastObjPer = new THREE.Line(ray3_3CastPer, materialRayCast);

var ray4_1CastObjPer = new THREE.Line(ray4_1CastPer, materialRayCast);
var ray4_2CastObjPer = new THREE.Line(ray4_2CastPer, materialRayIntersect);
var ray4_3CastObjPer = new THREE.Line(ray4_3CastPer, materialRayCast);

var ray5_1CastObjPer = new THREE.Line(ray5_1CastPer, materialRayCast);
var ray5_2CastObjPer = new THREE.Line(ray5_2CastPer, materialRayCast);
var ray5_3CastObjPer = new THREE.Line(ray5_3CastPer, materialRayCast);


scene.add(ray1_1CastObjPer);
scene.add(ray1_2CastObjPer);
scene.add(ray1_3CastObjPer);


scene.add(ray2_1CastObjPer);
scene.add(ray2_2CastObjPer);
scene.add(ray2_3CastObjPer);

scene.add(ray3_1CastObjPer);
scene.add(ray3_2CastObjPer);
scene.add(ray3_3CastObjPer);


scene.add(ray4_1CastObjPer);
scene.add(ray4_2CastObjPer);
scene.add(ray4_3CastObjPer);

scene.add(ray5_1CastObjPer);
scene.add(ray5_2CastObjPer);
scene.add(ray5_3CastObjPer);

















































//
// Light vec Line Segment
//

var lightVec = new THREE.Geometry();

lightVec.vertices.push(new THREE.Vector3(0, 1.1, -1.5));
lightVec.vertices.push(new THREE.Vector3(-2, 2, -.3));
var lightVecObj = new THREE.Line(lightVec, rayLight);
scene.add(lightVecObj);

var shadowVec = new THREE.Geometry();


shadowVec.vertices.push(new THREE.Vector3(0, 1.1, -1.5));
shadowVec.vertices.push(new THREE.Vector3(2, 0, -2.5));
var shadowVecObj = new THREE.Line(shadowVec, rayShadow);
scene.add(shadowVecObj);

var halfVec = new THREE.Geometry();

halfVec.vertices.push(new THREE.Vector3(0, 1.1, -1.5));
halfVec.vertices.push(new THREE.Vector3(-.7, 2, -.3));
var halfVecObj = new THREE.Line(halfVec, rayHalf);
scene.add(halfVecObj);


ray1_2Cast.vertices.push(new THREE.Vector3(0, 1.5, 1));
ray1_2Cast.vertices.push(new THREE.Vector3(0, 1.5, -3));


ray1_3Cast.vertices.push(new THREE.Vector3(-.6, 1.5, 1));
ray1_3Cast.vertices.push(new THREE.Vector3(-.6, 1.5, -3));



ray2_1Cast.vertices.push(new THREE.Vector3(.6, 1.1, 1));
ray2_1Cast.vertices.push(new THREE.Vector3(.6, 1.1, -3));


ray2_2Cast.vertices.push(new THREE.Vector3(0, 1.1, 1));
ray2_2Cast.vertices.push(new THREE.Vector3(0, 1.1, -2));


ray2_3Cast.vertices.push(new THREE.Vector3(-.6, 1.1, 1));
ray2_3Cast.vertices.push(new THREE.Vector3(-.6, 1.1, -3));



ray3_1Cast.vertices.push(new THREE.Vector3(.6, .75, 1));
ray3_1Cast.vertices.push(new THREE.Vector3(.6, .75, -2));


ray3_2Cast.vertices.push(new THREE.Vector3(0, .75, 1));
ray3_2Cast.vertices.push(new THREE.Vector3(0, .75, -2));


ray3_3Cast.vertices.push(new THREE.Vector3(-.6, .75, 1));
ray3_3Cast.vertices.push(new THREE.Vector3(-.6, .75, -2));



ray4_1Cast.vertices.push(new THREE.Vector3(.6, .4, 1));
ray4_1Cast.vertices.push(new THREE.Vector3(.6, .4, -3));


ray4_2Cast.vertices.push(new THREE.Vector3(0, .4, 1));
ray4_2Cast.vertices.push(new THREE.Vector3(0, .4, -2));


ray4_3Cast.vertices.push(new THREE.Vector3(-.6, .4, 1));
ray4_3Cast.vertices.push(new THREE.Vector3(-.6, .4, -3));



ray5_1Cast.vertices.push(new THREE.Vector3(.6, .2, 1));
ray5_1Cast.vertices.push(new THREE.Vector3(.6, .2, -3));


ray5_2Cast.vertices.push(new THREE.Vector3(0, .2, 1));
ray5_2Cast.vertices.push(new THREE.Vector3(0, .2, -2));


ray5_3Cast.vertices.push(new THREE.Vector3(-.6, .2, 1));
ray5_3Cast.vertices.push(new THREE.Vector3(-.6, .2, -3));



var ray1_1CastObj = new THREE.Line(ray1_1Cast, materialRayCast);
var ray1_2CastObj = new THREE.Line(ray1_2Cast, materialRayCast);
var ray1_3CastObj = new THREE.Line(ray1_3Cast, materialRayCast);

var ray2_1CastObj = new THREE.Line(ray2_1Cast, materialRayCast);
var ray2_2CastObj = new THREE.Line(ray2_2Cast, materialRayIntersect);
var ray2_3CastObj = new THREE.Line(ray2_3Cast, materialRayCast);

var ray3_1CastObj = new THREE.Line(ray3_1Cast, materialRayIntersect);
var ray3_2CastObj = new THREE.Line(ray3_2Cast, materialRayIntersect);
var ray3_3CastObj = new THREE.Line(ray3_3Cast, materialRayIntersect);

var ray4_1CastObj = new THREE.Line(ray4_1Cast, materialRayCast);
var ray4_2CastObj = new THREE.Line(ray4_2Cast, materialRayIntersect);
var ray4_3CastObj = new THREE.Line(ray4_3Cast, materialRayCast);

var ray5_1CastObj = new THREE.Line(ray5_1Cast, materialRayCast);
var ray5_2CastObj = new THREE.Line(ray5_2Cast, materialRayIntersect);
var ray5_3CastObj = new THREE.Line(ray5_3Cast, materialRayCast);


scene.add(ray1_1CastObj);
scene.add(ray1_2CastObj);
scene.add(ray1_3CastObj);


scene.add(ray2_1CastObj);
scene.add(ray2_2CastObj);
scene.add(ray2_3CastObj);

scene.add(ray3_1CastObj);
scene.add(ray3_2CastObj);
scene.add(ray3_3CastObj);


scene.add(ray4_1CastObj);
scene.add(ray4_2CastObj);
scene.add(ray4_3CastObj);

scene.add(ray5_1CastObj);
scene.add(ray5_2CastObj);
scene.add(ray5_3CastObj);



//
// Pixel Volume Guides
//

var guideV1 = new THREE.Geometry();
var guideV2 = new THREE.Geometry();
var guideH1 = new THREE.Geometry();
var guideH2 = new THREE.Geometry();
var guideH3 = new THREE.Geometry();
var guideH4 = new THREE.Geometry();


guideV1.vertices.push(new THREE.Vector3(.3, 1.6, 1));
guideV1.vertices.push(new THREE.Vector3(.3, 0, 1));

guideV2.vertices.push(new THREE.Vector3(-.3, 1.6, 1));
guideV2.vertices.push(new THREE.Vector3(-.3, 0, 1));


guideH1.vertices.push(new THREE.Vector3(.8, 1.3, 1));
guideH1.vertices.push(new THREE.Vector3(-.8, 1.3, 1));

guideH2.vertices.push(new THREE.Vector3(.8, .9, 1));
guideH2.vertices.push(new THREE.Vector3(-.8, .9, 1));

guideH3.vertices.push(new THREE.Vector3(.8, .6, 1));
guideH3.vertices.push(new THREE.Vector3(-.8, .6, 1));

guideH4.vertices.push(new THREE.Vector3(.8, .3, 1));
guideH4.vertices.push(new THREE.Vector3(-.8, .3, 1));


var guideV1Obj = new THREE.Line(guideV1, materialLineThinBright);
var guideV2Obj = new THREE.Line(guideV2, materialLineThinBright);

var guideH1Obj = new THREE.Line(guideH1, materialLineThinBright);
var guideH2Obj = new THREE.Line(guideH2, materialLineThinBright);
var guideH3Obj = new THREE.Line(guideH3, materialLineThinBright);
var guideH4Obj = new THREE.Line(guideH4, materialLineThinBright);


scene.add(guideV1Obj);
scene.add(guideV2Obj);

scene.add(guideH1Obj);
scene.add(guideH2Obj);
scene.add(guideH3Obj);
scene.add(guideH4Obj);

// OBJECTS
scene.add(cameraObj)
scene.add(objectObj);
scene.add(planeObj);
scene.add(lightObj);

// FRUSTUM

scene.add(rightTopLine);
scene.add(leftTopLine);
scene.add(rightBottomLine);
scene.add(leftBottomLine);
scene.add(farFrameLine);
scene.add(nearFrameLine);


//
// SPOTLIGHT CONT'D AND HELPER
//

spotLight.target = objectObj;
scene.add( spotLight );

var spotLightHelper = new THREE.SpotLightHelper( spotLight );
spotLightHelper.update();
scene.add( spotLightHelper );


//
// GRID
//

gridObj = new THREE.GridHelper( 6, 12 )
scene.add(gridObj);


//
// GUI
//

var gui = new dat.GUI({
    height : 10 * 32 - 1,
    width: 450,
});


// GUI OPTIONS
var options = {
  rayCast: false,
  rayIntersect: false,
  shade: false,
  buildSceneObjects: false,
  buildViewObjects: false,
  pixelSpace: false,
  rayGen: false,
  back: function(){
    back = false;
  },
  switchPer: false,
  currentView: function(){
    back = false;
  }

};


// GUI ADDITIONOS

// OBJECTS


gui.add(options, 'back').name('<a href=\'index.html\' style=\'color: white;\'>Back</a>')


// VIEW MODE
gui.add(options, 'currentView').name('Current View - Parallel')

gui.add(options, 'switchPer').name('Switch to Perspective').listen();
gui.open();



// TUTORIAL FUNCTIONS
var tutorial = gui.addFolder('Tutorial');
tutorial.add(options, 'buildSceneObjects').name('(1) Build Scene Objects').listen();
tutorial.add(options, 'buildViewObjects').name('(2) Illustrate View Plane').listen();
tutorial.add(options, 'pixelSpace').name('(3) Illustrate Pixel Space').listen();
tutorial.add(options, 'rayGen').name('(4) Ray Generation').listen();
tutorial.add(options, 'rayCast').name('(5) Ray Cast / Intersect').listen();
tutorial.add(options, 'shade').name('(7) Shading').listen();
tutorial.open();


function flipVis(param, object) {
  this.param = param;
  this.object = object;
  if (param == false) {
    object.visible = false;
  } else {
    object.visible = true;
  }
}

function visTrueAndUpdateGUI(param, object) {
  this.param = param;
  this.object = object;
  object.visible = true;
  param = true;

}

function visFalseAndUpdateGUI(param, object) {
  this.param = param;
  this.object = object;
  object.visible = false;
  param = false;
}



function buildViewObjects() {
  if (options.switchPer == false) {
    visTrueAndUpdateGUI(options.showP, planeObj);
    visTrueAndUpdateGUI(options.showF, farFrameLine);
  } else {
    visTrueAndUpdateGUI(options.showP, planeObj);
    visTrueAndUpdateGUI(options.showF, rightTopLine);
    visTrueAndUpdateGUI(options.showF, leftTopLine);
    visTrueAndUpdateGUI(options.showF, rightBottomLine);
    visTrueAndUpdateGUI(options.showF, leftBottomLine);
    visTrueAndUpdateGUI(options.showF, farFrameLine);
  }

  //visTrueAndUpdateGUI(options.showF, nearFrameLine);

};

function pixelSpace() {
  visTrueAndUpdateGUI(options.pixelSpace, guideV1Obj);
  visTrueAndUpdateGUI(options.pixelSpace, guideV2Obj);

  visTrueAndUpdateGUI(options.pixelSpace, guideH1Obj);
  visTrueAndUpdateGUI(options.pixelSpace, guideH2Obj);

  visTrueAndUpdateGUI(options.pixelSpace, guideH3Obj);
  visTrueAndUpdateGUI(options.pixelSpace, guideH4Obj);


};

function rayGen() {
  visTrueAndUpdateGUI(options.rayGen, ray1_1Obj);
  visTrueAndUpdateGUI(options.rayGen, ray1_2Obj);
  visTrueAndUpdateGUI(options.rayGen, ray1_3Obj);

  visTrueAndUpdateGUI(options.rayGen, ray2_1Obj);
  visTrueAndUpdateGUI(options.rayGen, ray2_2Obj);
  visTrueAndUpdateGUI(options.rayGen, ray2_3Obj);

  visTrueAndUpdateGUI(options.rayGen, ray3_1Obj);
  visTrueAndUpdateGUI(options.rayGen, ray3_2Obj);
  visTrueAndUpdateGUI(options.rayGen, ray3_3Obj);

  visTrueAndUpdateGUI(options.rayGen, ray4_1Obj);
  visTrueAndUpdateGUI(options.rayGen, ray4_2Obj);
  visTrueAndUpdateGUI(options.rayGen, ray4_3Obj);

  visTrueAndUpdateGUI(options.rayGen, ray5_1Obj);
  visTrueAndUpdateGUI(options.rayGen, ray5_2Obj);
  visTrueAndUpdateGUI(options.rayGen, ray5_3Obj);
};

function rayGenPer() {
  visFalseAndUpdateGUI(options.rayGen, ray1_1Obj);
  visFalseAndUpdateGUI(options.rayGen, ray1_2Obj);
  visFalseAndUpdateGUI(options.rayGen, ray1_3Obj);

  visFalseAndUpdateGUI(options.rayGen, ray2_1Obj);
  visFalseAndUpdateGUI(options.rayGen, ray2_2Obj);
  visFalseAndUpdateGUI(options.rayGen, ray2_3Obj);

  visFalseAndUpdateGUI(options.rayGen, ray3_1Obj);
  visFalseAndUpdateGUI(options.rayGen, ray3_2Obj);
  visFalseAndUpdateGUI(options.rayGen, ray3_3Obj);

  visFalseAndUpdateGUI(options.rayGen, ray4_1Obj);
  visFalseAndUpdateGUI(options.rayGen, ray4_2Obj);
  visFalseAndUpdateGUI(options.rayGen, ray4_3Obj);

  visFalseAndUpdateGUI(options.rayGen, ray5_1Obj);
  visFalseAndUpdateGUI(options.rayGen, ray5_2Obj);
  visFalseAndUpdateGUI(options.rayGen, ray5_3Obj);





  visTrueAndUpdateGUI(options.rayGen, ray1_1ObjPer);
  visTrueAndUpdateGUI(options.rayGen, ray1_2ObjPer);
  visTrueAndUpdateGUI(options.rayGen, ray1_3ObjPer);

  visTrueAndUpdateGUI(options.rayGen, ray2_1ObjPer);
  visTrueAndUpdateGUI(options.rayGen, ray2_2ObjPer);
  visTrueAndUpdateGUI(options.rayGen, ray2_3ObjPer);

  visTrueAndUpdateGUI(options.rayGen, ray3_1ObjPer);
  visTrueAndUpdateGUI(options.rayGen, ray3_2ObjPer);
  visTrueAndUpdateGUI(options.rayGen, ray3_3ObjPer);

  visTrueAndUpdateGUI(options.rayGen, ray4_1ObjPer);
  visTrueAndUpdateGUI(options.rayGen, ray4_2ObjPer);
  visTrueAndUpdateGUI(options.rayGen, ray4_3ObjPer);

  visTrueAndUpdateGUI(options.rayGen, ray5_1ObjPer);
  visTrueAndUpdateGUI(options.rayGen, ray5_2ObjPer);
  visTrueAndUpdateGUI(options.rayGen, ray5_3ObjPer);
};

function buildSceneObjects() {
  visTrueAndUpdateGUI(options.showS, objectObj);
}

function rayCast() {
  visTrueAndUpdateGUI(options.rayGen, ray1_1CastObj);
  visTrueAndUpdateGUI(options.rayGen, ray1_2CastObj);
  visTrueAndUpdateGUI(options.rayGen, ray1_3CastObj);

  visTrueAndUpdateGUI(options.rayGen, ray2_1CastObj);
  visTrueAndUpdateGUI(options.rayGen, ray2_2CastObj);
  visTrueAndUpdateGUI(options.rayGen, ray2_3CastObj);

  visTrueAndUpdateGUI(options.rayGen, ray3_1CastObj);
  visTrueAndUpdateGUI(options.rayGen, ray3_2CastObj);
  visTrueAndUpdateGUI(options.rayGen, ray3_3CastObj);

  visTrueAndUpdateGUI(options.rayGen, ray4_1CastObj);
  visTrueAndUpdateGUI(options.rayGen, ray4_2CastObj);
  visTrueAndUpdateGUI(options.rayGen, ray4_3CastObj);

  visTrueAndUpdateGUI(options.rayGen, ray5_1CastObj);
  visTrueAndUpdateGUI(options.rayGen, ray5_2CastObj);
  visTrueAndUpdateGUI(options.rayGen, ray5_3CastObj);

};

function rayCastPer() {
  visTrueAndUpdateGUI(options.rayGen, ray1_1CastObjPer);
  visTrueAndUpdateGUI(options.rayGen, ray1_2CastObjPer);
  visTrueAndUpdateGUI(options.rayGen, ray1_3CastObjPer);

  visTrueAndUpdateGUI(options.rayGen, ray2_1CastObjPer);
  visTrueAndUpdateGUI(options.rayGen, ray2_2CastObjPer);
  visTrueAndUpdateGUI(options.rayGen, ray2_3CastObjPer);

  visTrueAndUpdateGUI(options.rayGen, ray3_1CastObjPer);
  visTrueAndUpdateGUI(options.rayGen, ray3_2CastObjPer);
  visTrueAndUpdateGUI(options.rayGen, ray3_3CastObjPer);

  visTrueAndUpdateGUI(options.rayGen, ray4_1CastObjPer);
  visTrueAndUpdateGUI(options.rayGen, ray4_2CastObjPer);
  visTrueAndUpdateGUI(options.rayGen, ray4_3CastObjPer);

  visTrueAndUpdateGUI(options.rayGen, ray5_1CastObjPer);
  visTrueAndUpdateGUI(options.rayGen, ray5_2CastObjPer);
  visTrueAndUpdateGUI(options.rayGen, ray5_3CastObjPer);





  visFalseAndUpdateGUI(options.rayGen, rightTopLine)
  visFalseAndUpdateGUI(options.rayGen, leftBottomLine)
  visFalseAndUpdateGUI(options.rayGen, rightBottomLine)
  visFalseAndUpdateGUI(options.rayGen, leftTopLine)


  visFalseAndUpdateGUI(options.rayGen, farFrameLine)

};

function shade() {
  visTrueAndUpdateGUI(options.showE, lightObj);
  visTrueAndUpdateGUI(options.showL, spotLight);
  visFalseAndUpdateGUI(options.rayGen, ray1_1Obj);
  visFalseAndUpdateGUI(options.rayGen, ray1_2Obj);
  visFalseAndUpdateGUI(options.rayGen, ray1_3Obj);

  visFalseAndUpdateGUI(options.rayGen, ray2_1Obj);
  visFalseAndUpdateGUI(options.rayGen, ray2_2Obj);
  visFalseAndUpdateGUI(options.rayGen, ray2_3Obj);

  visFalseAndUpdateGUI(options.rayGen, ray3_1Obj);
  visFalseAndUpdateGUI(options.rayGen, ray3_2Obj);
  visFalseAndUpdateGUI(options.rayGen, ray3_3Obj);

  visFalseAndUpdateGUI(options.rayGen, ray4_1Obj);
  visFalseAndUpdateGUI(options.rayGen, ray4_2Obj);
  visFalseAndUpdateGUI(options.rayGen, ray4_3Obj);

  visFalseAndUpdateGUI(options.rayGen, ray5_1Obj);
  visFalseAndUpdateGUI(options.rayGen, ray5_2Obj);
  visFalseAndUpdateGUI(options.rayGen, ray5_3Obj);

  visFalseAndUpdateGUI(options.rayGen, ray1_1CastObj);
  visFalseAndUpdateGUI(options.rayGen, ray1_2CastObj);
  visFalseAndUpdateGUI(options.rayGen, ray1_3CastObj);

  visFalseAndUpdateGUI(options.rayGen, ray2_1CastObj);

  visFalseAndUpdateGUI(options.rayGen, ray2_3CastObj);



  visFalseAndUpdateGUI(options.rayGen, ray4_1CastObj);

  visFalseAndUpdateGUI(options.rayGen, ray4_3CastObj);

  visFalseAndUpdateGUI(options.rayGen, ray5_1CastObj);

  visFalseAndUpdateGUI(options.rayGen, ray5_3CastObj);

  visFalseAndUpdateGUI(options.pixelSpace, guideV1Obj);
  visFalseAndUpdateGUI(options.pixelSpace, guideV2Obj);

  visFalseAndUpdateGUI(options.pixelSpace, guideH1Obj);
  visFalseAndUpdateGUI(options.pixelSpace, guideH2Obj);

  visFalseAndUpdateGUI(options.pixelSpace, guideH3Obj);
  visFalseAndUpdateGUI(options.pixelSpace, guideH4Obj);

  visTrueAndUpdateGUI(options.pixelSpace, halfVecObj);
  visTrueAndUpdateGUI(options.pixelSpace, lightVecObj);
  visTrueAndUpdateGUI(options.pixelSpace, shadowVecObj);


};

function reset() {
  if (options.switchPer == false) {
    visFalseAndUpdateGUI(options.showE, cameraObj);
  } else {
    visTrueAndUpdateGUI(options.showE, cameraObj);
  }
  visFalseAndUpdateGUI(options.showL, spotLight);
  visFalseAndUpdateGUI(options.showLH, spotLightHelper);
  visFalseAndUpdateGUI(options.showLO, lightObj);
  visFalseAndUpdateGUI(options.showS, objectObj);
  visFalseAndUpdateGUI(options.showF, rightTopLine);
  visFalseAndUpdateGUI(options.showF, leftTopLine);
  visFalseAndUpdateGUI(options.showF, rightBottomLine);
  visFalseAndUpdateGUI(options.showF, leftBottomLine);
  visFalseAndUpdateGUI(options.showF, farFrameLine);
  visFalseAndUpdateGUI(options.showF, nearFrameLine);

  visFalseAndUpdateGUI(options.showP, planeObj);
  visFalseAndUpdateGUI(options.showGrid, gridObj);

  visFalseAndUpdateGUI(options.rayGen, ray1_1Obj);
  visFalseAndUpdateGUI(options.rayGen, ray1_2Obj);
  visFalseAndUpdateGUI(options.rayGen, ray1_3Obj);

  visFalseAndUpdateGUI(options.rayGen, ray2_1Obj);
  visFalseAndUpdateGUI(options.rayGen, ray2_2Obj);
  visFalseAndUpdateGUI(options.rayGen, ray2_3Obj);

  visFalseAndUpdateGUI(options.rayGen, ray3_1Obj);
  visFalseAndUpdateGUI(options.rayGen, ray3_2Obj);
  visFalseAndUpdateGUI(options.rayGen, ray3_3Obj);

  visFalseAndUpdateGUI(options.rayGen, ray4_1Obj);
  visFalseAndUpdateGUI(options.rayGen, ray4_2Obj);
  visFalseAndUpdateGUI(options.rayGen, ray4_3Obj);

  visFalseAndUpdateGUI(options.rayGen, ray5_1Obj);
  visFalseAndUpdateGUI(options.rayGen, ray5_2Obj);
  visFalseAndUpdateGUI(options.rayGen, ray5_3Obj);

  visFalseAndUpdateGUI(options.rayGen, ray1_1CastObj);
  visFalseAndUpdateGUI(options.rayGen, ray1_2CastObj);
  visFalseAndUpdateGUI(options.rayGen, ray1_3CastObj);

  visFalseAndUpdateGUI(options.rayGen, ray2_1CastObj);
  visFalseAndUpdateGUI(options.rayGen, ray2_2CastObj);
  visFalseAndUpdateGUI(options.rayGen, ray2_3CastObj);

  visFalseAndUpdateGUI(options.rayGen, ray3_1CastObj);
  visFalseAndUpdateGUI(options.rayGen, ray3_2CastObj);
  visFalseAndUpdateGUI(options.rayGen, ray3_3CastObj);

  visFalseAndUpdateGUI(options.rayGen, ray4_1CastObj);
  visFalseAndUpdateGUI(options.rayGen, ray4_2CastObj);
  visFalseAndUpdateGUI(options.rayGen, ray4_3CastObj);

  visFalseAndUpdateGUI(options.rayGen, ray5_1CastObj);
  visFalseAndUpdateGUI(options.rayGen, ray5_2CastObj);
  visFalseAndUpdateGUI(options.rayGen, ray5_3CastObj);





  visFalseAndUpdateGUI(options.rayGen, ray1_1ObjPer);
  visFalseAndUpdateGUI(options.rayGen, ray1_2ObjPer);
  visFalseAndUpdateGUI(options.rayGen, ray1_3ObjPer);

  visFalseAndUpdateGUI(options.rayGen, ray2_1ObjPer);
  visFalseAndUpdateGUI(options.rayGen, ray2_2ObjPer);
  visFalseAndUpdateGUI(options.rayGen, ray2_3ObjPer);

  visFalseAndUpdateGUI(options.rayGen, ray3_1ObjPer);
  visFalseAndUpdateGUI(options.rayGen, ray3_2ObjPer);
  visFalseAndUpdateGUI(options.rayGen, ray3_3ObjPer);

  visFalseAndUpdateGUI(options.rayGen, ray4_1ObjPer);
  visFalseAndUpdateGUI(options.rayGen, ray4_2ObjPer);
  visFalseAndUpdateGUI(options.rayGen, ray4_3ObjPer);

  visFalseAndUpdateGUI(options.rayGen, ray5_1ObjPer);
  visFalseAndUpdateGUI(options.rayGen, ray5_2ObjPer);
  visFalseAndUpdateGUI(options.rayGen, ray5_3ObjPer);

  visFalseAndUpdateGUI(options.rayGen, ray1_1CastObj);
  visFalseAndUpdateGUI(options.rayGen, ray1_2CastObj);
  visFalseAndUpdateGUI(options.rayGen, ray1_3CastObj);

  visFalseAndUpdateGUI(options.rayGen, ray2_1CastObj);
  visFalseAndUpdateGUI(options.rayGen, ray2_2CastObj);
  visFalseAndUpdateGUI(options.rayGen, ray2_3CastObj);

  visFalseAndUpdateGUI(options.rayGen, ray3_1CastObj);
  visFalseAndUpdateGUI(options.rayGen, ray3_2CastObj);
  visFalseAndUpdateGUI(options.rayGen, ray3_3CastObj);

  visFalseAndUpdateGUI(options.rayGen, ray4_1CastObj);
  visFalseAndUpdateGUI(options.rayGen, ray4_2CastObj);
  visFalseAndUpdateGUI(options.rayGen, ray4_3CastObj);

  visFalseAndUpdateGUI(options.rayGen, ray5_1CastObj);
  visFalseAndUpdateGUI(options.rayGen, ray5_2CastObj);
  visFalseAndUpdateGUI(options.rayGen, ray5_3CastObj);


  visFalseAndUpdateGUI(options.rayGen, ray1_1CastObjPer);
  visFalseAndUpdateGUI(options.rayGen, ray1_2CastObjPer);
  visFalseAndUpdateGUI(options.rayGen, ray1_3CastObjPer);

  visFalseAndUpdateGUI(options.rayGen, ray2_1CastObjPer);
  visFalseAndUpdateGUI(options.rayGen, ray2_2CastObjPer);
  visFalseAndUpdateGUI(options.rayGen, ray2_3CastObjPer);

  visFalseAndUpdateGUI(options.rayGen, ray3_1CastObjPer);
  visFalseAndUpdateGUI(options.rayGen, ray3_2CastObjPer);
  visFalseAndUpdateGUI(options.rayGen, ray3_3CastObjPer);

  visFalseAndUpdateGUI(options.rayGen, ray4_1CastObjPer);
  visFalseAndUpdateGUI(options.rayGen, ray4_2CastObjPer);
  visFalseAndUpdateGUI(options.rayGen, ray4_3CastObjPer);

  visFalseAndUpdateGUI(options.rayGen, ray5_1CastObjPer);
  visFalseAndUpdateGUI(options.rayGen, ray5_2CastObjPer);
  visFalseAndUpdateGUI(options.rayGen, ray5_3CastObjPer);

  visFalseAndUpdateGUI(options.pixelSpace, guideV1Obj);
  visFalseAndUpdateGUI(options.pixelSpace, guideV2Obj);

  visFalseAndUpdateGUI(options.pixelSpace, guideH1Obj);
  visFalseAndUpdateGUI(options.pixelSpace, guideH2Obj);

  visFalseAndUpdateGUI(options.pixelSpace, guideH3Obj);
  visFalseAndUpdateGUI(options.pixelSpace, guideH4Obj);

  visFalseAndUpdateGUI(options.pixelSpace, halfVecObj);
  visFalseAndUpdateGUI(options.pixelSpace, lightVecObj);
  visFalseAndUpdateGUI(options.pixelSpace, shadowVecObj);

};



function animate() {
  reset();

  if (options.buildSceneObjects == true) {
    buildSceneObjects();
  }

  if (options.buildViewObjects == true) {
    buildViewObjects();
  }

  if (options.rayGen == true) {
    if (options.switchPer == true) {
      rayGenPer();
    } else {
      rayGen();
    }
  }



  if (options.pixelSpace == true) {
    pixelSpace();
  }

  if (options.rayCast == true) {
    if (options.switchPer == true) {
      rayCastPer();
    } else {
      rayCast();
    }

  }

  if (options.shade == true) {
    shade();
  }



  requestAnimationFrame(animate);

  controls.update();
  spotLightHelper.update();
  renderer.render(scene, camera);
}

animate();
