status="";
objects=[];
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
    console.log(tofind);
}
function modelLoaded(){
    alert("COCO SSD LOADED");
    status=true;
}
function draw(){
    image(cam, 0, 0, 400, 270);
  if (status != "") {
    coco.detect(cam, gotResult);
    for (i = 0; i < objects.length; i++) {
      document.getElementById("stat").innerHTML = "Status : Object Detected";

      fill("#FF0000");
      percent = floor(objects[i].confidence * 100);
      text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
      noFill();
      stroke("#FF0000");
      rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);


      if (objects[i].label == tofind) {
        cam.stop();
        coco.detect(gotResult);
        document.getElementById("stat").innerHTML =tofind+ " Found";
        synth = window.speechSynthesis;
        utterThis = new SpeechSynthesisUtterance(tofind + "Found");
        synth.speak(utterThis);
      } else {
        document.getElementById("stat").innerHTML =tofind + " Not Found";
      }
    }
  }
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }else{
        objects=results;
        
    }
}