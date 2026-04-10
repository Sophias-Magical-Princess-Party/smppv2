var cont=0;
var xx= setInterval(function(){
    switch(cont)
    {
    case 0:{
        $("#slider-1").fadeOut(400);
        $("#slider-2").delay(400).fadeIn(400);
        $("#sButton1").removeClass("bg-purple-800");
        $("#sButton1").addClass("bg-purple-400");
        $("#sButton2").addClass("bg-purple-800");
        $("#sButton2").removeClass("bg-purple-400");
        cont=1;
        break;
    }
    case 1:{
        $("#slider-2").fadeOut(400);
        $("#slider-3").delay(400).fadeIn(400);
        $("#sButton2").removeClass("bg-purple-800");
        $("#sButton2").addClass("bg-purple-400");
        $("#sButton3").addClass("bg-purple-800");
        $("#sButton3").removeClass("bg-purple-400");
        cont=2;
        break;
    }
    case 2:{
        $("#slider-3").fadeOut(400);
        $("#slider-4").delay(400).fadeIn(400);
        $("#sButton3").removeClass("bg-purple-800");
        $("#sButton3").addClass("bg-purple-400");
        $("#sButton4").addClass("bg-purple-800");
        $("#sButton4").removeClass("bg-purple-400");
        cont=3;
        break;
    }
    case 3:{
        $("#slider-4").fadeOut(400);
        $("#slider-5").delay(400).fadeIn(400);
        $("#sButton4").removeClass("bg-purple-800");
        $("#sButton4").addClass("bg-purple-400");
        $("#sButton5").addClass("bg-purple-800");
        $("#sButton5").removeClass("bg-purple-400");
        cont=4;
        break;
    }
    case 4:{
        $("#slider-5").fadeOut(400);
        $("#slider-1").delay(400).fadeIn(400);
        $("#sButton5").removeClass("bg-purple-800");
        $("#sButton5").addClass("bg-purple-400");
        $("#sButton1").addClass("bg-purple-800");
        $("#sButton1").removeClass("bg-purple-400");
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
    $("#slider-5").fadeOut(400);
    $("#slider-1").delay(400).fadeIn(400);
    $("#sButton5").removeClass("bg-purple-800");
    $("#sButton5").addClass("bg-purple-400");
    $("#sButton1").addClass("bg-purple-800");
    $("#sButton1").removeClass("bg-purple-400");
    reinitLoop(4000);
    cont=0
}
    
function sliderButton2(){
    $("#slider-1").fadeOut(400);
    $("#slider-2").delay(400).fadeIn(400);
    $("#sButton1").removeClass("bg-purple-800");
    $("#sButton1").addClass("bg-purple-400");
    $("#sButton2").addClass("bg-purple-800");
    $("#sButton2").removeClass("bg-purple-400");
    reinitLoop(4000);
    cont=1
}

function sliderButton3(){
    $("#slider-2").fadeOut(400);
    $("#slider-3").delay(400).fadeIn(400);
    $("#sButton2").removeClass("bg-purple-800");
    $("#sButton2").addClass("bg-purple-400");
    $("#sButton3").addClass("bg-purple-800");
    $("#sButton3").removeClass("bg-purple-400");
    reinitLoop(4000);
    cont=2
}

function sliderButton4(){
    $("#slider-3").fadeOut(400);
    $("#slider-4").delay(400).fadeIn(400);
    $("#sButton3").removeClass("bg-purple-800");
    $("#sButton3").addClass("bg-purple-400");
    $("#sButton4").addClass("bg-purple-800");
    $("#sButton4").removeClass("bg-purple-400");
    reinitLoop(4000);
    cont=3
}

function sliderButton5(){
    $("#slider-4").fadeOut(400);
    $("#slider-5").delay(400).fadeIn(400);
    $("#sButton4").removeClass("bg-purple-800");
    $("#sButton4").addClass("bg-purple-400");
    $("#sButton5").addClass("bg-purple-800");
    $("#sButton5").removeClass("bg-purple-400");
    reinitLoop(4000);
    cont=4
}


$(window).ready(function(){
    $("#slider-2").hide();
    $("#slider-3").hide();
    $("#slider-4").hide();
    $("#slider-5").hide();
    $("#sButton1").removeClass("bg-purple-400");
    $("#sButton1").addClass("bg-purple-800");
    loopSlider();
});