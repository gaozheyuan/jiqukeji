window.alert("asdas");
var sceneleft,sceneright,cubeleft,cuberight,rendererleft,rendererright,cameraleft,cameraright,animationHandle;
var allrenderer;
var speed = 0.1;
var eyedistance = 6, screenDistance=50;
var movieTexture;
function initAll()
{
	window.alert("0");
	initThree();
	window.alert("1");
	initCamera();
	window.alert("2");
	initScene();
	window.alert("3");
	initObject();
	window.alert("4");
}

function initThree()
{
	window.alert("asdasd");
	allrenderer = new THREE.WebGLRenderer(
		{
			canvas:document.getElementById("canvasAll"),
			antialias:true,
			precision:"highp",
			alpha:true,
			premultipliedAlpha:false,
			stencil:false,
			preserveDrawingBuffer:true,
			maxLights:1
		}
	);
	allrenderer.enableScissorTest(true);
	allrenderer.clear();
}
function initCamera()
{
	var divLayer=$("#divCanvas");
	cameraleft = new THREE.OrthographicCamera(-divLayer.width()/2,divLayer.width()/2,-divLayer.height()/2,divLayer.height()/2);
	cameraright = new THREE.OrthographicCamera(-divLayer.width()/2,divLayer.width()/2,-divLayer.height()/2,divLayer.height()/2);
	cameraleft.position.x = 100;
	cameraleft.position.y = screenDistance;
	cameraleft.position.z = 0;
	cameraleft.up.x = 0;
	cameraleft.up.y = 0;
	cameraleft.up.z = -1;
	cameraleft.lookAt({
		x : 0,
		y : 0,
		z : 0
	});

	cameraright.position.x = 100;
	cameraright.position.y = screenDistance;
	cameraright.position.z = 0;
	cameraright.up.x = 0;
	cameraright.up.y = 0;
	cameraright.up.z = -1;
	cameraright.lookAt({
		x : 0,
		y : 0,
		z : 0
	});
}

function startRender()
{
	animationHandle=self.setInterval(function()
	{
		var divLayer=$("#divCanvas");
		cubeleft.rotation.x += speed;
		cuberight.rotation.x += speed;
		cubeleft.rotation.y += speed;
		cuberight.rotation.y += speed;
		cubeleft.rotation.z += speed;
		cuberight.rotation.z += speed;
		allrenderer.setViewport(0,0,divLayer.width()/2,divLayer.height());
		allrenderer.setScissor(0,0,divLayer.width()/2.divLayer.height());
		allrenderer.render(sceneleft,cameraleft);
		allrenderer.setViewport(divLayer.width()/2,0,divLayer.width()/2,divLayer.height());
		allrenderer.setScissor(divLayer.width()/2,0,divLayer.width()/2,divLayer.height());
		allrenderer.render(sceneright,cameraright);
		//				rendererleft.render(sceneleft, cameraleft);
		//				rendererright.render(sceneright, cameraright);
	},30);
}

function stopRender()
{
	clearInterval(animationHandle);
}

function initScene() {//initialize the two scenes
	sceneleft = new THREE.Scene();
	sceneright = new THREE.Scene();
}

function initObject(){//initialize the objects

	var effectGeometry = new THREE.CubeGeometry(35,35,35);

	var effectMaterial = new THREE.MeshBasicMaterial({
		//		map:movieTexture,
		//		color: 0x00ff00
		map : new THREE.ImageUtils.loadTexture("/images/texture.png")
	});

	cubeleft = new THREE.Mesh( effectGeometry, effectMaterial );
	cuberight = new THREE.Mesh( effectGeometry, effectMaterial );

	sceneleft.add(cubeleft);
	sceneright.add(cuberight);
}
