var SpeechRecognition=window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start()
{
   
    recognition.start();


}
recgonition.onresult=function(event)
{
    console.log(event);
    var content=event.results[0][0].transcript;
    
    speak();
}

function speak()
{
    var synth=window.speechSynthesis;
    
    Webcam.attach(camera);

}
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quailty:90,
});
camera=document.getElementById("camera");
