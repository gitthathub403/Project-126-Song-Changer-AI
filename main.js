song1 = "";
song2 = "";

song1_status = "";
song2_status = "";

leftWristX = 0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

scoreLeftWrist=0;
scoreRightWrist=0;

function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("");

}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("PoseNet is initialized ^w^");
}

function gotPoses() {
    if(results.length>0) {
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;

        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;

        console.log("RW X = "+rightWristX+", RW Y = "+rightWristY+", LW X = "+leftWristX+", LW Y = "+leftWristY);
    }
}

function draw() {
    image(video, 0, 0, 600, 400);
    
    fill("#FF0000");
    stroke("#FF0000");
}
