var button=document.querySelectorAll(".abc");
    for(var i=0;i<button.length;i++){
        button[i].addEventListener("click",function(){
              var key=this.innerHTML;
              playsound(key);
              buttonAnimation(key);
        });
    }
    document.addEventListener("keydown", function(event){

    var key = event.key.toUpperCase();  
    playsound(key);
    buttonAnimation(key);

});


function playsound(key){
    switch(key){
        case "W":new Audio("./sounds/tom-2.mp3").play();
        break;
        case "A":new Audio("./sounds/tom-1.mp3").play();
        break;
        case "S":new Audio("./sounds/tom-3.mp3").play();
        break;
        case "D":new Audio("./sounds/tom-4.mp3").play();
        break;
        case "J":new Audio("./sounds/snare.mp3").play();
        break;
        case "K":new Audio("./sounds/crash.mp3").play();
        break;
        case "L":new Audio("./sounds/kick-bass.mp3").play();
        break;
        default: console.log("Wrong input").play();
    }
}
function buttonAnimation(key){

    var activeButton = document.querySelector("." + key);

    if(activeButton){
        activeButton.classList.add("pressed");

        setTimeout(function(){
            activeButton.classList.remove("pressed");
        }, 100);
    }
}

