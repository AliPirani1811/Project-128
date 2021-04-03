song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;
scoreRightWrist = 0;

function preload()
{
	song = loadSound("music.mp3");
}



function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose' , gotPoses);
}

	

function draw() {
	image(video, 0, 0, 600, 500);
	fill("#FF0000");
	stroke("#FF0000";
	}




function modelLoaded(){
	console.log('Posenet is Initialized');
}
function play()
{
	song.play();
	song.setVolume();
	song.rate(1);
}

function gotPoses(results){

	console.log(results);
	scoreLeftWrist = results[0].pose.keypoints[9].score;
	console.log("scoreLeftWrist =" + scoreLeftWrist);



	if (results.length > 0){
		console.log(results);
		scoreLeftWrist = results[0].pose.keypoints[10].score;
		scoreRightWrist = results[0].pose.keypoints[9].score;
		console.log("scoreRightWrist = " + scoreRightWrist + " scoreLeftWrist = " + scoreLeftWrist);

		leftWristX = results[0].pose.leftWrist.x;
		leftWristY = results[0].pose.leftWrist.y;
		console.log("leftWristX = " + leftWristX + "leftWristY =" + leftWristY);

		rightWristX = results[0].pose.rightWrist.x;
		rightWristY = results[0].pose.rightWrist.y;
		console.log("rightWristX = " + rightWristX + "rightWristY =" + rightWristY);
	}
}