			var scene,cube,renderer,camera,animationHandle;
			var speed = 0.1;
			var eyedistance = 6, screenDistance=10;
			var movieTexture;
			function initAll()
			{
				initThree();
				initCamera();
				initScene();
				initObject();
			}
			function initThree()
			{
				renderer = new THREE.WebGLRenderer(
							{
								canvas:document.getElementById("coverCanvas"),
								antialias:true,
								precision:"highp",
								alpha:true,
								premultipliedAlpha:false,
								stencil:false,
								preserveDrawingBuffer:true,
								maxLights:1
							});

				var divLayer=$("#divCanvas");
				renderer.setSize(divLayer.width(),divLayer.height());
			}
			function initCamera()
			{
				var divLayer=$("#divCanvas");
				camera = new THREE.PerspectiveCamera( 75,divLayer.width()/divLayer.height(), 0.1, 1000 );
				camera.position.x = 0;
          		camera.position.y = screenDistance;
          		camera.position.z = 0;
          		camera.up.x = 0;
          		camera.up.y = 0;
				camera.up.z = -1;
				camera.lookAt({
            		x : 0,
            		y : 0,
            		z : 0
         		});
			}
			function startRender()
			{
				animationHandle=self.setInterval(function()
				{
					cube.rotation.x += speed;
					cube.rotation.y += speed;
					cube.rotation.z += speed;
					renderer.render(scene, camera);
				},30);
			}
			function stopRender()
			{
				clearInterval(animationHandle);
			}

			function initScene() {//initialize the two scenes
				scene = new THREE.Scene();
			}

			function initObject(){//initialize the objects

				var effectGeometry = new THREE.CubeGeometry(5,5,5);

				var effectMaterial = new THREE.MeshBasicMaterial({
				//		map:movieTexture,
				//		color: 0x00ff00
						map : new THREE.ImageUtils.loadTexture("/images/texture.png")
					});

				//		movieTexture.needsUpdate = true;

					cube = new THREE.Mesh( effectGeometry, effectMaterial );

					scene.add(cube);

					renderer.render(scene, camera);
			}

function setTitleSize
