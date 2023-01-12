function preload()
{

}

function setup()
{

}

function draw()
{
    
}

Webcam.set({
    width:350,
    height:300,
    image_format :'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function captureImage()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/q2HiV0OeX/', modelLoaded);

function check()
{
    image = document.getElementById("image_captured");
    classifier.classify(image,gotResults);
}

function gotResults(results,error)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
    }
}

function speak()
{
    var synth = window.speechSynthesis;
    var speak_data = "The prediction is " + prediction;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}