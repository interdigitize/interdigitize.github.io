
<!DOCTYPE html>
<html>
	<head>



		<script type='text/javascript' src='js/kinetic-v5.1.0.min.js'></script>
		<style>
		div#wrapper {
			width: 320px;
			height: 480px;
			//margin: 0 auto;
			border: 1px dashed gray;
		}
		canvas {
			display:block;
			margin: 0 auto;
			margin-top: 0px;
			width: 320px;
			height: 480px;
			border: 1px solid blue;
		}
		canvas#canvas{
			position: relative;
			top: -964px;

		}
		canvas#canvasb{
			position: relative;
			top: -482px;

		}
		canvas#bgcanvas{

    		background-image: linear-gradient(bottom, rgb(105,173,212) 0%, rgb(23,82,145) 84%);
    		background-image: -o-linear-gradient(bottom, rgb(105,173,212) 0%, rgb(23,82,145) 84%);
    		background-image: -moz-linear-gradient(bottom, rgb(105,173,212) 0%, rgb(23,82,145) 84%);
    		background-image: -webkit-linear-gradient(bottom, rgb(105,173,212) 0%, rgb(23,82,145) 84%);
    		background-image: -ms-linear-gradient(bottom, rgb(105,173,212) 0%, rgb(23,82,145) 84%);

    		background-image: -webkit-gradient(
        		linear,
        		left bottom,
        		left top,
        		color-stop(0, rgb(105,173,212)),
        		color-stop(0.84, rgb(23,82,145))
    		);
		}
		div#score{
			position: relative;
			top: -1440px;
			left: 5px;
			width: 125px;
			height: 25px;
			color: yellow;
			font-weight: bold;
			font-size: 18px;
			font-family: helvetica, arial;
			background-color: rgba(150,150,150,.3);
			z-index: 7;
			padding-left: 5px;
			padding-top: 3px;
			border-radius: 6px;
		}
		div#time{
			position: relative;
			top: -1340px;
			left: 142px;
			width: 120px;
			height: 25px;
			color: rgba(200,200,200,1);
			font-weight: bold;
			font-size: 18px;
			font-family: helvetica, arial;
			background-color: ;
			z-index: 7;
			padding-left: 5px;
			padding-top: 3px;
		}
		div#music{
			position: relative;
			top: -1503px;
			left: 241px;
			width: 40px;
			height: 40px;
			background-color: ;
			background-image: url(../sounds/music.png);
			z-index: 7;
			-khtml-opacity:.65;
 			-moz-opacity:.65;
 			-ms-filter:"alpha(opacity=.65)";
  			filter:alpha(opacity=65);
  			filter: progid:DXImageTransform.Microsoft.Alpha(opacity=0.5.65);
  			opacity:.65;
		}
		div#sound{
			position: relative;
			top: -1543px;
			left: 278px;
			width: 40px;
			height: 40px;
			background-color: ;
			background-image: url(../sounds/audio.png);
			z-index: 7;
			-khtml-opacity:.65;
 			-moz-opacity:.65;
 			-ms-filter:"alpha(opacity=.65)";
  			filter:alpha(opacity=65);
  			filter: progid:DXImageTransform.Microsoft.Alpha(opacity=0.5.65);
  			opacity:.65;
		}
		div#sound:hover, div#music:hover {
			-khtml-opacity:.99;
 			-moz-opacity:.99;
 			-ms-filter:"alpha(opacity=.99)";
  			filter:alpha(opacity=99);
  			filter: progid:DXImageTransform.Microsoft.Alpha(opacity=0.99);
  			opacity:.99;
		}
		</style>





	</head>

<body>
<div id='wrapper'>

	<canvas id='bgcanvas'></canvas>
	<canvas id='canvasb'></canvas>
	<canvas id='canvas'></canvas>


	<div id="score"><div id="scorespan"></div></div>
	<div id="time"><div id="timespan"></div></div>
	<div id='music' onclick="musicSelector()"></div>
	<div id='sound' onclick="soundSelector()"></div>


<script >

//background noises code
	var soundsOnCnt = 0;
	var soundsOn = true;

	var jumpsnd = new Audio('jump2.mp3');
	var matchSnd = new Audio('../sounds/bonus.mp3');
	var tap1 = new Audio('jump2.mp3');
	var tap2 = new Audio('jump2.mp3');

	function soundSelector(){
		soundsOnCnt++;

	}

//load sound files



//background music code
	var pauseCount = 0;



	function musicSelector(){
		pauseCount++;
		if(pauseCount % 2 == 0){
			resumeMusic();
			document.getElementById('music').style.backgroundPosition="0px 0";
		}
		else{pauseMusic();
		document.getElementById('music').style.backgroundPosition="42px 0";
		}
	}



	myAudio = new Audio('../sounds/bte.mp3');
	myAudio.addEventListener('ended', function() {
	    this.currentTime = 0;
	    this.play();
	}, false);
	myAudio.volume = 0.15;
	myAudio.play();

	function pauseMusic() {
	myAudio.pause();

	}

	function resumeMusic() {

	myAudio = new Audio('../sounds/bte.mp3');
	myAudio.addEventListener('ended', function() {
	    this.currentTime = 0;
	    this.play();
	}, false);
	myAudio.volume = 0.15;
	myAudio.play();}





//falling snow background
var flakes = [],
    bgcanvas = document.getElementById("bgcanvas"),
    bgctx = bgcanvas.getContext("2d"),
    flakeCount = 60,
    mX = -100,
    mY = -100

bgcanvas.width = 320;
bgcanvas.height = 480;
flakeTicker = 0;
var secondary2 = new Array('zat','rgba(0,255,255','rgba(255,0,255','rgba(255,255,0');
var colorString = secondary2[1];


function snow() {
    bgctx.clearRect(0, 0, bgcanvas.width, bgcanvas.height);

    for (var i = 0; i < flakeCount; i++) {
        var flake = flakes[i],
            x = mX,
            y = mY,
            minDist = 150,
            x2 = flake.x,
            y2 = flake.y;

        var dist = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y)),
            dx = x2 - x,
            dy = y2 - y;

        if (dist < minDist) {
            var force = minDist / (dist * dist),
                xcomp = (x - x2) / dist,
                ycomp = (y - y2) / dist,
                deltaV = force / 2;

            flake.velX -= deltaV * xcomp;
            flake.velY -= deltaV * ycomp;

        } else {
            flake.velX *= .98;
            if (flake.velY <= flake.speed) {
                flake.velY = flake.speed
            }
            flake.velX += Math.cos(flake.step += .05) * flake.stepSize;
        }

	//change the flake colors

	if(flakeTicker <10000){
	var colorString = secondary2[1];
	}

	flakeTicker++;
	if(flakeTicker % 9000 == 0){

	var colorString = secondary2[Math.floor(Math.random()*4)];


	}



        bgctx.fillStyle = ""+colorString+"," + flake.opacity + ")";
        flake.y += flake.velY;
        flake.x += flake.velX;

        if (flake.y >= canvas.height || flake.y <= 0) {
            reset(flake);
        }


        if (flake.x >= canvas.width || flake.x <= 0) {
            reset(flake);
        }

        bgctx.beginPath();
        bgctx.rect(flake.x, flake.y, flake.size,flake.size);
        bgctx.fill();
    }
    requestAnimationFrame(snow);
};

function reset(flake) {
    flake.x = Math.floor(Math.random() * canvas.width);
    flake.y = 0;
    flake.size = (Math.random() * 4) + 9;
    flake.speed = (Math.random() * 1) + 0.55;
    flake.velY = flake.speed;
    flake.velX = 0;
    flake.opacity = (Math.random() * 0.5) + 0.3;
}

function init() {
    for (var i = 0; i < flakeCount; i++) {
        var x = Math.floor(Math.random() * 380),
            y = Math.floor(Math.random() * 420),
            size = (Math.random() * 3) +9,
            speed = (Math.random() * 1) + 0.5,
            opacity = (Math.random() * 0.5) + 0.3;

        flakes.push({
            speed: speed,
            velY: speed,
            velX: 0,
            x: x,
            y: y,
            size: size,
            stepSize: (Math.random()) / 30,
            step: 0,
            angle: 180,
            opacity: opacity
        });
    }

    snow();
};

canvas.addEventListener("mousemove", function(e) {
    mX = e.clientX,
    mY = e.clientY
});

init();

</script>

	<script type='text/javascript'>

	//create and call  timer
	var clockTime = 60;
	var gameTime = true;
	document.getElementById('timespan').innerHTML = clockTime;

	var ticksnd = new Audio('../sounds/switch-3.mp3');
	ticksnd.volume=0.2;

	var gameStart = new Audio('../sounds/switch-3.mp3');
	gameStart.volume=0.3;


	function startGameMusic(){
		//gamestart sound
	}

	if(clockTime == 59){
	startGameMusic();


	}


	function fgameTime(){ gameTime = false;}

	window.setTimeout("Tick()", 1000);

	function Tick() {
	if(clockTime >0){clockTime--; ticksnd.play();}

	if(clockTime >= 0){
	window.setTimeout("Tick()", 1000);}


	document.getElementById('timespan').innerHTML = clockTime;

	if(clockTime == 0){fgameTime();}

	//move counter when it's one digit
	if(clockTime <10){document.getElementById('time').style.left = "152px";}

	}



	//put points in frame
	var scorePoints = 0;
	document.getElementById('scorespan').innerHTML = "Points: "+scorePoints;



	//request animation frame
		(function() {
    			var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame ||
    			    function(callback) {
        			window.setTimeout(callback, 5000/60);
    			};

   			window.requestAnimationFrame = requestAnimationFrame;
		})();



		//all global variables before update loop






		//items to run into
		var cube = [];
		var primary = new Array('rgba(0,255,0,.85)','rgba(255,0,0,.85)','rgba(0,0,255,.85)')
		var secondary = new Array('rgba(255,255,0,.9)','rgba(255,0,255,.9)','rgba(0,255,255,.9)');

		//all the cubes

		//cube1
		cube.push({
			width: 75,
			height: 75,
			color: primary[0],
			borderW: 1,
			x: 48,
			y: 200
		});

		//cube2
		cube.push({
			width: 75,
			height: 75,
			color: primary[2],
			borderW: 1,
			x: 125,
			y: 200
		});

		//cube3
		cube.push({
			width: 75,
			height: 75,
			color: primary[1],
			borderW: 1,
			x: 202,
			y: 200
		});

		//cube 4
		cube.push({
			width: 75,
			height: 75,
			color: primary[0],
			borderW: 1,
			x: 48,
			y: 277
		});

		//cube5
		cube.push({
			width: 75,
			height: 75,
			color: primary[2],
			borderW: 1,
			x: 125,
			y: 277
		});

		//cube6
		cube.push({
			width: 75,
			height: 75,
			color: primary[1],
			borderW: 1,
			x: 202,
			y: 277
		});

		//cube 7
		cube.push({
			width: 75,
			height: 75,
			color: primary[0],
			borderW: 1,
			x: 48,
			y: 354
		});

		//cube8
		cube.push({
			width: 75,
			height: 75,
			color: primary[2],
			borderW: 1,
			x: 125,
			y: 354
		});

		//cube9
		cube.push({
			width: 75,
			height: 75,
			color: primary[1],
			borderW: 1,
			x: 202,
			y: 354
		});


		var canvas = document.getElementById('canvas');
		var ctx = canvas.getContext('2d');

		var canvasb = document.getElementById('canvasb');
		var ctx2 = canvasb.getContext('2d');

		var width = 320;
		var height = 480;

		canvas.width = width;
		canvas.height = height;

		var movecube1right = false;
		var movecube1down = false;

		var movecube2right = false;
		var movecube2down = false;
		var movecube2left = false;

		var movecube3left = false;
		var movecube3down = false;

		var movecube4right = false;
		var movecube4down = false;
		var movecube4up = false;

		var movecube5right = false;
		var movecube5left = false;
		var movecube5up = false;
		var movecube5down = false;

		var movecube6left = false;
		var movecube6up = false;
		var movecube6down = false;

		var movecube7right = false;
		var movecube7up = false;

		var movecube8left = false;
		var movecube8up = false;
		var movecube8right = false;

		var movecube9left = false;
		var movecube9up = false;

		var moves = new Array();
		var movesX = new Array();
		var movesY = new Array();

		var callprimary = 0;
		var moveList = new Array();

		//tap dot
		var bdot = new Image();
		bdot.src = "../pics/bdot.jpg";
		ctx2.drawImage(bdot,100,400,10,10);

		var randColor1 = Math.floor(Math.random() * primary.length);

		var timer = true;
		var adjacent = true;

		// ctx.drawImage(bdot,0,0,10,10,80,232,10,10);

		//main game loop right here so make sure that you notice this line and put things in the right place ok?
		function update(){

		if(soundsOnCnt%2 == 0){
			jumpsnd.volume=0.25;
			matchSnd.volume=0.25;
			ticksnd.volume=0.25;
			tap1.volume=0.25;
			tap2.volume=0.25;
			document.getElementById('sound').style.backgroundPosition="0 0";
		}
		else{
			jumpsnd.volume=0.0;
			matchSnd.volume=0.0;
			ticksnd.volume=0.0;
			tap1.volume=0.0;
			tap2.volume=0.0;
			document.getElementById('sound').style.backgroundPosition="42px 0";
		}

		//update stuff
		if(!gameTime){ //stuff to happen when game ends within loop
		for (var i = 0; i < cube.length; i++) {cube[i].color = "rgba(192,192,192,.6)";}

		}


		function generateNewCube(firstcube,secondcube){



			//generate new dimensions based on the cubes  chosen
			if(firstcube == 1){var fx=48,fy=200;}
			else if(firstcube == 2){var fx=125,fy=200;}
			else if(firstcube == 3){var fx=202,fy=200;}
			else if(firstcube == 4){var fx=48,fy=277;}
			else if(firstcube == 5){var fx=125,fy=277;}
			else if(firstcube == 6){var fx=202,fy=277;}
			else if(firstcube == 7){var fx=48,fy=354;}
			else if(firstcube == 8){var fx=125,fy=354;}
			else if(firstcube == 9){var fx=202,fy=354;}

			function newPrimary(){
			//select a random primary color
			randColor1 = Math.floor(Math.random() * primary.length);
			var randColor2 = primary[randColor1];

			//recreate cube 1
			cube[firstcube-1].width = 75;
			cube[firstcube-1].height = 75;
			cube[firstcube-1].color = randColor2;
			cube[firstcube-1].borderW = 1;
			cube[firstcube-1].x = fx;
			cube[firstcube-1].y = fy;

			//sound indicating that gameplay has resumed
			jumpsnd.play();

			setTimeout(listenersBack,100);

			function listenersBack(){
			//bring back handlers after generating last block
			canv.addEventListener('touchstart',touchHandler,false);canv.addEventListener('click',clickHandler,false);
			}

			}

			//generate new coordinates for the second cube
			if(secondcube == 1){var sx=48,sy=200;}
			else if(secondcube == 2){var sx=125,sy=200;}
			else if(secondcube == 3){var sx=202,sy=200;}
			else if(secondcube == 4){var sx=48,sy=277;}
			else if(secondcube == 5){var sx=125,sy=277;}
			else if(secondcube == 6){var sx=202,sy=277;}
			else if(secondcube == 7){var sx=48,sy=354;}
			else if(secondcube == 8){var sx=125,sy=354;}
			else if(secondcube == 9){var sx=202,sy=354;}


			//make new amalgam cube
			cube[secondcube-1].width = 75;
			cube[secondcube-1].height = 75;

			//give the new secondary color
			if(cube[firstcube-1].color == primary[0] && cube[secondcube-1].color == primary[1]){cube[secondcube-1].color = secondary[0];}
			else if(cube[firstcube-1].color == primary[1] && cube[secondcube-1].color == primary[0]){cube[secondcube-1].color = secondary[0];}
			else if(cube[firstcube-1].color == primary[1] && cube[secondcube-1].color == primary[2]){cube[secondcube-1].color = secondary[1];}
			else if(cube[firstcube-1].color == primary[2] && cube[secondcube-1].color == primary[1]){cube[secondcube-1].color = secondary[1];}
			else if(cube[firstcube-1].color == primary[2] && cube[secondcube-1].color == primary[0]){cube[secondcube-1].color = secondary[2];}
			else if(cube[firstcube-1].color == primary[0] && cube[secondcube-1].color == primary[2]){cube[secondcube-1].color = secondary[2];}
			else if(cube[secondcube-1].color == secondary[0] || [secondcube-1].color == secondary[1] || [secondcube-1].color == secondary[2]){
				cube[secondcube-1].color = cube[secondcube-1].color;
			}
			cube[secondcube-1].borderW = 1;
			cube[secondcube-1].x = sx;
			cube[secondcube-1].y = sy;

			//delete first cube's properties
			cube[firstcube-1].width = null;
			cube[firstcube-1].height = null;
			cube[firstcube-1].color = null;
			cube[firstcube-1].borderW = null;
			cube[firstcube-1].x = null;
			cube[firstcube-1].y = null;


			//generate new primary in place of first cube
			setTimeout(callNewPrimary,100);

			function callNewPrimary(){
			callprimary++;
			if(callprimary ==1){
			newPrimary();
			}
			}

			callprimary=0;
			movesX[0]=null;movesY[0]=null; moveList=[];

		}

		function generateMatch(cube1,cube2){


			randColor1 = Math.floor(Math.random() * primary.length);
			//delete both cubes
			cube[cube1-1].color=primary[randColor1];

			if(cube2 != 6){
			randColor2 = Math.floor(Math.random() * primary.length);
			cube[cube2-1].color=primary[randColor2];}
			else if(cube2 == 6){randColor2 = Math.floor(Math.random() * primary.length); cube[5].color=primary[randColor2];}








			//play new generate sound
			jumpsnd.play();




		}

		function points1(){
		timer=false;
		scorePoints=scorePoints+100; 	document.getElementById('scorespan').innerHTML = "Points: "+scorePoints;

		}


		//check for win conditions matching 2 rows
		function winCheck(){

			var TimeToClear = 1000;

			//detect secondary colors
			for(x=0;x<9;x++){
				if(cube[x].color == secondary[0] || cube[x].color == secondary[1] || cube[x].color == secondary[2] ){

					//matching with cube1
					if(cube[0].color == secondary[0] || cube[0].color == secondary[1] || cube[0].color == secondary[2]){
						if(cube[1].color == cube[0].color ){

							//happy sounds and animations
							matchSnd.play();

							setTimeout(function() {	points(1,2);},TimeToClear);

							function points(a,b){
							//add points
							if(timer){

							points1();
							generateMatch(a,b);
							}

							}
							timer=true;

						}
						else if(cube[0].color == cube[3].color){
							//happy sounds and animations
							matchSnd.play();

							setTimeout(function() {	points(1,4);},TimeToClear);

							function points(a,b){
							//add points
							if(timer){

							points1();
							generateMatch(a,b);
							}

							}
							timer=true;

						}
					}

					if(cube[1].color == secondary[0] || cube[1].color == secondary[1] || cube[1].color == secondary[2]){
						if(cube[1].color == cube[0].color ){

							//happy sounds and animations
							matchSnd.play();

							setTimeout(function() {points(2,1);},TimeToClear);

							function points(a,b){
							//add points
							if(timer){

							points1();
							generateMatch(a,b);
							}

							}
							timer=true;

						}
						else if(cube[1].color == cube[2].color){
							//happy sounds and animations
							matchSnd.play();

							setTimeout(function() {points(2,3);},TimeToClear);

							function points(a,b){
							//add points
							if(timer){

							points1();
							generateMatch(a,b);
							}

							}
							timer=true;

						}
						else if(cube[1].color == cube[4].color){
							//happy sounds and animations
							matchSnd.play();

							setTimeout(function() {points(2,5);},TimeToClear);

							function points(a,b){
							//add points
							if(timer){

							points1();
							generateMatch(a,b);
							}

							}
							timer=true;

						}

					}

					if(cube[2].color == secondary[0] || cube[2].color == secondary[1] || cube[2].color == secondary[2]){
						if(cube[2].color == cube[1].color ){

							//happy sounds and animations
							matchSnd.play();

							setTimeout(function() {points(3,2);},TimeToClear);

							function points(a,b){
							//add points
							if(timer){

							points1();
							generateMatch(a,b);
							}

							}
							timer=true;

						}
						else if(cube[2].color == cube[5].color){
							//happy sounds and animations
							matchSnd.play();

							setTimeout(function() {points(3,6);},TimeToClear);

							function points(a,b){
							//add points
							if(timer){

							points1();
							generateMatch(a,b);
							}

							}
							timer=true;

						}
					}

					if(cube[3].color == secondary[0] || cube[3].color == secondary[1] || cube[3].color == secondary[2]){
						if(cube[3].color == cube[0].color ){

							//happy sounds and animations
							matchSnd.play();

							setTimeout(function() {points(4,1);},TimeToClear);

							function points(a,b){
							//add points
							if(timer){

							points1();
							generateMatch(a,b);
							}

							}
							timer=true;

						}
						else if(cube[3].color == cube[4].color){
							//happy sounds and animations
							matchSnd.play();

							setTimeout(function() {points(4,5);},TimeToClear);

							function points(a,b){
							//add points
							if(timer){

							points1();
							generateMatch(a,b);
							}

							}
							timer=true;

						}
						else if(cube[3].color == cube[6].color){
							//happy sounds and animations
							matchSnd.play();

							setTimeout(function() {points(4,7);},TimeToClear);

							function points(a,b){
							//add points
							if(timer){

							points1();
							generateMatch(a,b);
							}

							}
							timer=true;

						}
					}

					if(cube[4].color == secondary[0] || cube[4].color == secondary[1] || cube[4].color == secondary[2]){
						if(cube[4].color == cube[1].color ){

							//happy sounds and animations
							matchSnd.play();

							setTimeout(function() {points(5,2);},TimeToClear);

							function points(a,b){
							//add points
							if(timer){

							points1();
							generateMatch(a,b);
							}

							}
							timer=true;

						}
						else if(cube[4].color == cube[3].color){
							//happy sounds and animations
							matchSnd.play();

							setTimeout(function() {points(5,4);},TimeToClear);

							function points(a,b){
							//add points
							if(timer){

							points1();
							generateMatch(a,b);
							}

							}
							timer=true;

						}
						else if(cube[4].color == cube[7].color){
							//happy sounds and animations
							matchSnd.play();

							setTimeout(function() {points(5,8);},TimeToClear);

							function points(a,b){
							//add points
							if(timer){

							points1();
							generateMatch(a,b);
							}

							}
							timer=true;

						}
						else if(cube[4].color == cube[5].color){
							//happy sounds and animations
							matchSnd.play();

							setTimeout(function() {points(5,6);},TimeToClear);

							function points(a,b){
							//add points
							if(timer){

							points1();
							generateMatch(a,b);
							}

							}
							timer=true;

						}
					}

					if(cube[5].color == secondary[0] || cube[5].color == secondary[1] || cube[5].color == secondary[2]){
						if(cube[5].color == cube[2].color ){

							//happy sounds and animations
							matchSnd.play();

							setTimeout(function() {points(6,3);},TimeToClear);

							function points(a,b){
							//add points
							if(timer){

							points1();
							generateMatch(a,b);
							}

							}
							timer=true;

						}
						else if(cube[5].color == cube[4].color){
							//happy sounds and animations
							matchSnd.play();

							setTimeout(function() {points(6,5);},TimeToClear);

							function points(a,b){
							//add points
							if(timer){

							points1();
							generateMatch(a,b);
							}

							}
							timer=true;

						}
						else if(cube[5].color == cube[8].color){
							//happy sounds and animations
							matchSnd.play();

							setTimeout(function() {points(6,9);},TimeToClear);

							function points(a,b){
							//add points
							if(timer){

							points1();
							generateMatch(a,b);
							}

							}
							timer=true;

						}
					}

					if(cube[6].color == secondary[0] || cube[6].color == secondary[1] || cube[6].color == secondary[2]){
						if(cube[6].color == cube[3].color ){

							//happy sounds and animations
							matchSnd.play();

							setTimeout(function() {points(7,4);},TimeToClear);

							function points(a,b){
							//add points
							if(timer){

							points1();
							generateMatch(a,b);
							}

							}
							timer=true;

						}
						else if(cube[6].color == cube[7].color){
							//happy sounds and animations
							matchSnd.play();

							setTimeout(function() {points(7,8);},TimeToClear);

							function points(a,b){
							//add points
							if(timer){

							points1();
							generateMatch(a,b);
							}

							}
							timer=true;

						}
					}

					if(cube[7].color == secondary[0] || cube[7].color == secondary[1] || cube[7].color == secondary[2]){
						if(cube[7].color == cube[6].color ){

							//happy sounds and animations
							matchSnd.play();

							setTimeout(function() {points(8,7);},TimeToClear);

							function points(a,b){
							//add points
							if(timer){

							points1();
							generateMatch(a,b);
							}

							}
							timer=true;

						}
						else if(cube[7].color == cube[8].color){
							//happy sounds and animations
							matchSnd.play();

							setTimeout(function() {points(8,9);}, TimeToClear);

							function points(a,b){
							//add points
							if(timer){

							points1();
							generateMatch(a,b);
							}

							}
							timer=true;

						}
						else if(cube[7].color == cube[4].color){
							//happy sounds and animations
							matchSnd.play();

							setTimeout(function() {points(8,5);}, TimeToClear);

							function points(a,b){
							//add points
							if(timer){

							points1();
							generateMatch(a,b);
							}

							}
							timer=true;

						}
					}

					if(cube[8].color == secondary[0] || cube[8].color == secondary[1] || cube[8].color == secondary[2]){
						if(cube[8].color == cube[7].color ){

							//happy sounds and animations
							matchSnd.play();

							setTimeout(function() {points(9,8);}, TimeToClear);

							function points(a,b){
							//add points
							if(timer){

							points1();
							generateMatch(a,b);
							}

							}
							timer=true;

						}
						else if(cube[8].color == cube[5].color){
							//happy sounds and animations
							matchSnd.play();



							setTimeout(function() {points(9,6);},TimeToClear);

							function points(a,b){
							//add points
							if(timer){
							points1();
							generateMatch(a,b);


							}

							}
							timer=true;

						}
					}





				}
			}

		}


		//check for match win state
		winCheck();




		//if a non-adjacent block is tapped



		//if they tap the same square twice
		if(moveList[0] == moveList[1]){moveList[0]=moveList[1];moveList.pop(); }


		//record first move, tap, or click
		if((moveList.length) == 0){

			if(movesX[0]<123 && movesX[0]>50 && movesY[0]>200 && movesY[0]<275){moveList[0]=1;tap1.play();movesX[0]=null;movesY[0]=null;};
			if(movesX[0]<198 && movesX[0]>123 && movesY[0]>200 && movesY[0]<275){moveList[0]=2;tap1.play();movesX[0]=null;movesY[0]=null;};
			if(movesX[0]<273 && movesX[0]>198 && movesY[0]>200 && movesY[0]<275){moveList[0]=3;tap1.play();movesX[0]=null;movesY[0]=null;};
			if(movesX[0]<123 && movesX[0]>50 && movesY[0]>275 && movesY[0]<350){moveList[0]=4;tap1.play();movesX[0]=null;movesY[0]=null;};
			if(movesX[0]<198 && movesX[0]>123 && movesY[0]>275 && movesY[0]<350){moveList[0]=5;tap1.play();movesX[0]=null;movesY[0]=null;};
			if(movesX[0]<273 && movesX[0]>198 && movesY[0]>275 && movesY[0]<350){moveList[0]=6;tap1.play();movesX[0]=null;movesY[0]=null;};
			if(movesX[0]<123 && movesX[0]>50 && movesY[0]>350 && movesY[0]<425){moveList[0]=7;tap1.play();movesX[0]=null;movesY[0]=null;};
			if(movesX[0]<198 && movesX[0]>123 && movesY[0]>350 && movesY[0]<425){moveList[0]=8;tap1.play();movesX[0]=null;movesY[0]=null;};
			if(movesX[0]<273 && movesX[0]>198 && movesY[0]>350 && movesY[0]<425){moveList[0]=9;tap1.play();movesX[0]=null;movesY[0]=null;};

			if(moveList[0] == 1){ctx2.drawImage(bdot,0,0,10,10,81.5,500,10,10);}



			adjacent=true;
		}





		//record second move, tap, or click
		if((moveList.length)==1){

			if(movesX[0]<123 && movesX[0]>50 && movesY[0]>200 && movesY[0]<275){moveList[1]=1;movesX[0]=null;movesY[0]=null;};
			if(movesX[0]<198 && movesX[0]>123 && movesY[0]>200 && movesY[0]<275){moveList[1]=2;movesX[0]=null;movesY[0]=null;};
			if(movesX[0]<273 && movesX[0]>198 && movesY[0]>200 && movesY[0]<275){moveList[1]=3;movesX[0]=null;movesY[0]=null;};
			if(movesX[0]<123 && movesX[0]>50 && movesY[0]>275 && movesY[0]<350){moveList[1]=4;movesX[0]=null;movesY[0]=null;};
			if(movesX[0]<198 && movesX[0]>123 && movesY[0]>275 && movesY[0]<350){moveList[1]=5;movesX[0]=null;movesY[0]=null;};
			if(movesX[0]<273 && movesX[0]>198 && movesY[0]>275 && movesY[0]<350){moveList[1]=6;movesX[0]=null;movesY[0]=null;};
			if(movesX[0]<123 && movesX[0]>50 && movesY[0]>350 && movesY[0]<425){moveList[1]=7;movesX[0]=null;movesY[0]=null;};
			if(movesX[0]<198 && movesX[0]>123 && movesY[0]>350 && movesY[0]<425){moveList[1]=8;movesX[0]=null;movesY[0]=null;};
			if(movesX[0]<273 && movesX[0]>198 && movesY[0]>350 && movesY[0]<425){moveList[1]=9;movesX[0]=null;movesY[0]=null;};
			adjacent=true;
		}

		//if they tap non-adjacent squares, illegal moves
		if(moveList.length == 2){
		if(moveList[0] == 1 && moveList[1] == 2 || moveList[0] == 2 && moveList[1] ==1 ){ adjacent = true;console.log(adjacent);}
		else if(moveList[0] == 1 && moveList[1] == 4 || moveList[0] == 4 && moveList[1] ==1 ){ adjacent = true;console.log(adjacent);}
		else if(moveList[0] == 2 && moveList[1] == 5 || moveList[0] == 5 && moveList[1] ==2 ){ adjacent = true;console.log(adjacent);}
		else if(moveList[0] == 2 && moveList[1] == 3 || moveList[0] == 3 && moveList[1] ==2 ){ adjacent = true;console.log(adjacent);}
		else if(moveList[0] == 3 && moveList[1] == 6 || moveList[0] == 6 && moveList[1] ==3 ){ adjacent = true;console.log(adjacent);}
		else if(moveList[0] == 4 && moveList[1] == 5 || moveList[0] == 5 && moveList[1] ==4 ){ adjacent = true;console.log(adjacent);}
		else if(moveList[0] == 5 && moveList[1] == 6 || moveList[0] == 6 && moveList[1] ==5 ){ adjacent = true;console.log(adjacent);}
		else if(moveList[0] == 4 && moveList[1] == 7 || moveList[0] == 7 && moveList[1] ==4 ){ adjacent = true;console.log(adjacent);}
		else if(moveList[0] == 6 && moveList[1] == 9 || moveList[0] == 9 && moveList[1] ==6 ){ adjacent = true;console.log(adjacent);}
		else if(moveList[0] == 8 && moveList[1] == 7 || moveList[0] == 7 && moveList[1] ==8 ){ adjacent = true;console.log(adjacent);}
		else if(moveList[0] == 5 && moveList[1] == 8 || moveList[0] == 8 && moveList[1] ==5 ){ adjacent = true;console.log(adjacent);}
		else if(moveList[0] == 8 && moveList[1] == 9 || moveList[0] == 9 && moveList[1] ==8 ){ adjacent = true;console.log(adjacent);}
		else {adjacent = false; console.log(adjacent);}}

		if(!adjacent){ moveList.shift();




		}

		//moved the squares after getting two moves next to each other
		if(moveList[0] == 1 && moveList[1] == 2){movecube1right=true;moveList=[];canv.removeEventListener('touchstart',touchHandler,false);canv.removeEventListener('click',clickHandler,false);}
		if(moveList[0] == 1 && moveList[1] == 4){movecube1down=true;moveList=[];canv.removeEventListener('touchstart',touchHandler,false);canv.removeEventListener('click',clickHandler,false);}
		if(moveList[0] == 2 && moveList[1] == 1){movecube2left=true;moveList=[];canv.removeEventListener('touchstart',touchHandler,false);canv.removeEventListener('click',clickHandler,false);}
		if(moveList[0] == 2 && moveList[1] == 5){movecube2down=true;moveList=[];canv.removeEventListener('touchstart',touchHandler,false);canv.removeEventListener('click',clickHandler,false);}
		if(moveList[0] == 2 && moveList[1] == 3){movecube2right=true;moveList=[];canv.removeEventListener('touchstart',touchHandler,false);canv.removeEventListener('click',clickHandler,false);}
		if(moveList[0] == 3 && moveList[1] == 2){movecube3left=true;moveList=[];canv.removeEventListener('touchstart',touchHandler,false);canv.removeEventListener('click',clickHandler,false);}
		if(moveList[0] == 3 && moveList[1] == 6){movecube3down=true;moveList=[];canv.removeEventListener('touchstart',touchHandler,false);canv.removeEventListener('click',clickHandler,false);}
		if(moveList[0] == 4 && moveList[1] == 1){movecube4up=true;moveList=[];canv.removeEventListener('touchstart',touchHandler,false);canv.removeEventListener('click',clickHandler,false);}
		if(moveList[0] == 4 && moveList[1] == 5){movecube4right=true;moveList=[];canv.removeEventListener('touchstart',touchHandler,false);canv.removeEventListener('click',clickHandler,false);}
		if(moveList[0] == 4 && moveList[1] == 7){movecube4down=true;moveList=[];canv.removeEventListener('touchstart',touchHandler,false);canv.removeEventListener('click',clickHandler,false);}
		if(moveList[0] == 5 && moveList[1] == 2){movecube5up=true;moveList=[];canv.removeEventListener('touchstart',touchHandler,false);canv.removeEventListener('click',clickHandler,false);}
		if(moveList[0] == 5 && moveList[1] == 4){movecube5left=true;moveList=[];canv.removeEventListener('touchstart',touchHandler,false);canv.removeEventListener('click',clickHandler,false);}
		if(moveList[0] == 5 && moveList[1] == 6){movecube5right=true;moveList=[];canv.removeEventListener('touchstart',touchHandler,false);canv.removeEventListener('click',clickHandler,false);}
		if(moveList[0] == 5 && moveList[1] == 8){movecube5down=true;moveList=[];canv.removeEventListener('touchstart',touchHandler,false);canv.removeEventListener('click',clickHandler,false);}
		if(moveList[0] == 6 && moveList[1] == 3){movecube6up=true;moveList=[];}
		if(moveList[0] == 6 && moveList[1] == 5){movecube6left=true;moveList=[];}
		if(moveList[0] == 6 && moveList[1] == 9){movecube6down=true;moveList=[];}
		if(moveList[0] == 7 && moveList[1] == 4){movecube7up=true;moveList=[];}
		if(moveList[0] == 7 && moveList[1] == 8){movecube7right=true;moveList=[];}
		if(moveList[0] == 8 && moveList[1] == 7){movecube8left=true;moveList=[];}
		if(moveList[0] == 8 && moveList[1] == 5){movecube8up=true;moveList=[];}
		if(moveList[0] == 8 && moveList[1] == 9){movecube8right=true;moveList=[];}
		if(moveList[0] == 9 && moveList[1] == 8){movecube9left=true;moveList=[];}
		if(moveList[0] == 9 && moveList[1] == 6){movecube9up=true;moveList=[];}


   		//wipe the canvas clean
		ctx.clearRect(0,0,width,height);
		//all animation below

		//bg flakes




		//stop moving the cube and generate new cubes
		if(movecube1right){
		if(cube[0].x >= cube[1].x){movecube1right=false;setTimeout(generateNewCube(1,2),200);}}

		if(movecube1down){
		if(cube[0].y >= cube[3].y){movecube1down=false;	setTimeout(generateNewCube(1,4),200);}}

		if(movecube2right){
		if(cube[1].x >= cube[2].x){movecube2right=false;setTimeout(generateNewCube(2,3),200);}}

		if(movecube2down){
		if(cube[1].y >= cube[4].y){movecube2down=false;setTimeout(generateNewCube(2,5),200);}}

		if(movecube2left){
		if(cube[1].x <= cube[0].x){movecube2left=false;generateNewCube(2,1);}}

		if(movecube3left){
		if(cube[2].x <= cube[1].x){movecube3left=false;setTimeout(generateNewCube(3,2),200);}}

		if(movecube3down){
		if(cube[2].y >= cube[5].y){movecube3down=false;setTimeout(generateNewCube(3,6),200);}}

		if(movecube4right){
		if(cube[3].x >= cube[4].x){movecube4right=false;setTimeout(generateNewCube(4,5),200);}}

		if(movecube4down){
		if(cube[3].y >= cube[6].y){movecube4down=false;setTimeout(generateNewCube(4,7),200);}}

		if(movecube4up){
		if(cube[3].y <= cube[0].y){movecube4up=false;generateNewCube(4,1);}}

		if(movecube5right){
		if(cube[4].x >= cube[5].x){movecube5right=false;setTimeout(generateNewCube(5,6),200);}}

		if(movecube5left){
		if(cube[4].x <= cube[3].x){movecube5left=false;setTimeout(generateNewCube(5,4),200);}}

		if(movecube5up){
		if(cube[4].y <= cube[1].y){movecube5up=false;setTimeout(generateNewCube(5,2),200);}}

		if(movecube5down){
		if(cube[4].y >= cube[7].y){movecube5down=false;setTimeout(generateNewCube(5,8),200);}}

		if(movecube6left){
		if(cube[5].x <= cube[4].x){movecube6left=false;setTimeout(generateNewCube(6,5),200);}}

		if(movecube6up){
		if(cube[5].y <= cube[2].y){movecube6up=false;setTimeout(generateNewCube(6,3),200);}}

		if(movecube6down){
		if(cube[5].y >= cube[8].y){movecube6down=false;setTimeout(generateNewCube(6,9),200);}}

		if(movecube7right){
		if(cube[6].x >= cube[7].x){movecube7right=false;setTimeout(generateNewCube(7,8),200);}}

		if(movecube7up){
		if(cube[6].y <= cube[3].y){movecube7up=false;setTimeout(generateNewCube(7,4),200);}}

		if(movecube8up){
		if(cube[7].y <= cube[4].y){movecube8up=false;setTimeout(generateNewCube(8,5),200);}}

		if(movecube8left){
		if(cube[7].x <= cube[6].x){movecube8left=false;setTimeout(generateNewCube(8,7),200);}}

		if(movecube8right){
		if(cube[7].x >= cube[8].x){movecube8right=false;setTimeout(generateNewCube(8,9),200);}}

		if(movecube9up){
		if(cube[8].y <= cube[4].y){movecube9up=false;setTimeout(generateNewCube(9,6),200);}}

		if(movecube9left){
		if(cube[8].x <= cube[7].x){movecube9left=false;setTimeout(generateNewCube(9,8),200);}}

		var mSpeed = 20;

		//move the cubes
		if(movecube1right){cube[0].x=cube[0].x+mSpeed;}
		if(movecube1down){cube[0].y=cube[0].y+mSpeed;}
		if(movecube2right){cube[1].x=cube[1].x+mSpeed;}
		if(movecube2down){cube[1].y=cube[1].y+mSpeed;}
		if(movecube2left){cube[1].x=cube[1].x-mSpeed;}
		if(movecube3left){cube[2].x=cube[2].x-mSpeed;}
		if(movecube3down){cube[2].y=cube[2].y+mSpeed;}
		if(movecube4right){cube[3].x=cube[3].x+mSpeed;}
		if(movecube4down){cube[3].y=cube[3].y+mSpeed;}
		if(movecube4up){cube[3].y=cube[3].y-mSpeed;}
		if(movecube5right){cube[4].x=cube[4].x+mSpeed;}
		if(movecube5down){cube[4].y=cube[4].y+mSpeed;}
		if(movecube5left){cube[4].x=cube[4].x-mSpeed;}
		if(movecube5up){cube[4].y=cube[4].y-mSpeed;}
		if(movecube6left){cube[5].x=cube[5].x-mSpeed;}
		if(movecube6up){cube[5].y=cube[5].y-mSpeed;}
		if(movecube6down){cube[5].y=cube[5].y+mSpeed;}
		if(movecube7right){cube[6].x=cube[6].x+mSpeed;}
		if(movecube7up){cube[6].y=cube[6].y-mSpeed;}
		if(movecube8left){cube[7].x=cube[7].x-mSpeed;}
		if(movecube8up){cube[7].y=cube[7].y-mSpeed;}
		if(movecube8right){cube[7].x=cube[7].x+mSpeed;}
		if(movecube9up){cube[8].y=cube[8].y-mSpeed;}
		if(movecube9left){cube[8].x=cube[8].x-mSpeed;}





		//create the cubes
 		for (var i = 0; i < cube.length; i++) {

 			ctx.fillStyle = cube[i].color;
 			ctx.beginPath();
 			ctx.rect(cube[i].x, cube[i].y, cube[i].width, cube[i].height);
 			ctx.fill();

 			ctx.lineWidth = cube[i].borderW;
      			ctx.strokeStyle = 'black';
      			ctx.stroke();

 		}

		if(gameTime){requestAnimationFrame(update);}


		}


		//detect keys
		window.addEventListener("keydown", function(e) {

		});

		window.addEventListener("keyup", function(e) {


		});

		var canv = document.getElementById('canvas');
		canv.addEventListener('touchstart',touchHandler,false);
		canv.addEventListener('click',clickHandler,false);



			//check cube 1
		function touchHandler(e){

			//save first two consecutive tap X positions
			var touchobj = e.changedTouches[0];
			movesX[0]= parseInt(touchobj.clientX);
			movesY[0]= parseInt(touchobj.clientY);

			//this works alert(moves[0]);

			e.preventDefault();


		}

		function clickHandler(e){
			var clickedX = e.pageX - this.offsetLeft;
    			var clickedY = e.pageY - this.offsetTop;
    			movesX[0]=clickedX;
    			movesY[0]=clickedY;

			e.preventDefault();
		}

		//this is not working for some reason

		window.addEventListener("load", function(){update();});
	</script>

</div>
</body>
</html>
