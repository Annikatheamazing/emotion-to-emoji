Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/vTMzD8acQ/modeljson', modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function modelLoaded() {
    console.log('Model Loaded!');
}

function speak(){
    var synth = window.speechSynthisis;
    speak_data_1 = "The First Prediction is" + prediction_1;
    speak_data_2 = "And The Second Prediction is" + prediction_2;
    var utterThis = new SpeechSynthesisisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
 
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[1].label;
        prediction_1 = results[0].label ;
        prediction_2 = results[1].label ;
        speak();
        if(results[0].label == "happy") 
        {
            document.getElementById("update_emoji").innerHTML = "&#129396"
        }
        if(results[0].label == "sad")
        {
            document.getElementById("update_emoji").innerHTML = "&#129395"
        }  
        if(results[0].label == "shocked")
            {
                document.getElementById("update_emoji").innerHTML = "&#129315"
            }          
            if(results[0].label == "emmbaresed")
                {
                    document.getElementById("update_emoji").innerHTML = "&#129321"
                }      
                if(results[0].label == "excited")
                    {
   
                        document.getElementById("update_emoji").innerHTML = " &#129315"
                    }                   
    }
}
