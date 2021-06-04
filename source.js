status="";
var tofind="";
function setup(){
    canvas=createCanvas(400,270);
    canvas.position(400,300);
    cam=createCapture(VIDEO);
    cam.hide();
}
function start(){
    coco=ml5.objectDetector('cocossd',modelLoaded);
    $("#stat").html("STATUS: DETECTING");
    tofind=document.getElementById("uluy").value;
}
function modelLoaded(){
    alert("COCO SSD LOADED");
    status=true;
}
function draw(){
    image(cam,0,0,400,300);
}