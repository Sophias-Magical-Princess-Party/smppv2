var cont=0;
var xx = setInterval(function(){
    switch(cont)
    {
    case 0:{
        $("#banner-1").fadeOut(400);
        $("#banner-2").fadeIn(400);
        $("#bButton1").removeClass("bg-purple-800");
        $("#bButton1").addClass("bg-purple-400");
        $("#bButton2").addClass("bg-purple-800");
        $("#bButton2").removeClass("bg-purple-400");
        cont=1;
        break;
    }
    case 1:{
        $("#banner-2").fadeOut(400);
        $("#banner-1").fadeIn(400);
        $("#bButton2").removeClass("bg-purple-800");
        $("#bButton2").addClass("bg-purple-400");
        $("#bButton1").addClass("bg-purple-800");
        $("#bButton1").removeClass("bg-purple-400");
        cont=0;
        break;
    }

    }},8000);

function loopSlider(){
  xx;
}

function reinitLoop(time){
    clearInterval(xx);
    setTimeout(loopSlider(),time);
}



function sliderButton1(){
    $("#banner-2").fadeOut(400);
    $("#banner-1").fadeIn(400);
    $("#bButton2").removeClass("bg-purple-800");
    $("#bButton2").addClass("bg-purple-400");
    $("#bButton1").addClass("bg-purple-800");
    $("#bButton1").removeClass("bg-purple-400");
    reinitLoop(4000);
    cont=0
}
    
function sliderButton2(){
    $("#banner-1").fadeOut(400);
    $("#banner-2").fadeIn(400);
    $("#bButton1").removeClass("bg-purple-800");
    $("#bButton1").addClass("bg-purple-400");
    $("#bButton2").addClass("bg-purple-800");
    $("#bButton2").removeClass("bg-purple-400");
    reinitLoop(4000);
    cont=1
}



$(window).ready(function(){
    $("#banner-2").hide();
    $("#bButton1").removeClass("bg-purple-400");
    $("#bButton1").addClass("bg-purple-800");
    loopSlider();
});