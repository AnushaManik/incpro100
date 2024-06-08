 



var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();
function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
   
}

recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
     if(content == "take my selfie"){
        console.log("taking selfie in 5 seconds")
        speak();
        setTimeout(
            function(){
                img_id = "selfie1";
             takesnapshot();
             speak_data = "taking  next selfie in 5 seconds"
             var utterthis = new SpeechSynthesisUtterance(speak_data);
             synth.speak(utterthis);
            }
         
         ,5000);
    
    
         setTimeout(
            function(){
                img_id = "selfie2";
             takesnapshot();
             speak_data = "taking next selfie in 10 seconds"
             var utterthis = new SpeechSynthesisUtterance(speak_data);
             synth.speak(utterthis);
            }
         
         ,10000);
    
         setTimeout(
            function(){
                img_id = "selfie3";
             takesnapshot();
            
            }
         
         ,15000);

     }
    
}
function speak(){
    var synth = window.speechSynthesis 
    speakdata = "taking selfie in 5 seconds"
    var utterthis = new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterthis);
}

Webcam.set({
    width:320,
    height:320,
    image_format:'png',
    png_quality:50

});
camera=document.getElementById("camera");
Webcam.attach(camera);

function takesnapshot(){
    console.log(img_id);

    Webcam.snap(function(data_uri){
        if(img_id== "selfie1" ){
            document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'">';
        }
        if(img_id== "selfie2" ){
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'">';
        }
        if(img_id== "selfie3" ){
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'">';
        }
       

    });


    
}


