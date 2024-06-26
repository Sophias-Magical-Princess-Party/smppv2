$("#soloprincess").on('click', function(){      
         $(".pricing-main").text("175");
         $(".pricing-sub").text("subheading")        
    });
$("#duoprincess").on('click', function(){      
         $(".pricing-main").text("double princess pricing");
         $(".pricing-sub").text("subheading")           
    });
$("#multiprincess").on('click', function(){      
         $(".pricing-main").text("multiprincess pricing");
         $(".pricing-sub").text("subheading")           
    });    

$("#click-me").click(function(){
    $("#div1 span").text("December");
});
$("select").change(function() {
    if($('#type').val() == "Impersonator" && $('#time').val() == "one") 
    {
        document.getElementById("princess-select").hidden = true;
        document.getElementById("price").hidden = true;
        document.getElementById("price-imp").hidden = false;
        document.getElementById('princesses').value = "one"
        $("#price-imp").text("$225");
        document.getElementById("half").hidden = true;
    }
    if($('#type').val() == "Impersonator" && $('#time').val() == "two") 
    {
        document.getElementById("princess-select").hidden = true;
        document.getElementById("price").hidden = true;
        document.getElementById("price-imp").hidden = false;
        document.getElementById('princesses').value = "one"
        $("#price-imp").text("$325");
        document.getElementById("half").hidden = true;
    }
    else if ($('#type').val() == "Princess") 
    {
        document.getElementById("princess-select").hidden = false;
        document.getElementById("price").hidden = false;
        document.getElementById("price-imp").hidden = true;
        document.getElementById("half").hidden = false;
    }
    });

$("select").change(function() {
    if($('#princesses').val() == "one" && $('#time').val() == "one") 
    {
        $("#price").text("$175");
        $("#amount").text("1");
        $("#time-display").text("1")
        document.getElementById("plural").hidden = true;
        document.getElementById("plural-time").hidden = true;
    }
    else if ($('#princesses').val() == "two" && $('#time').val() == "one") 
    {
        $("#price").text("$275");
        $("#amount").text("2")
        $("#time-display").text("1")
        document.getElementById("plural").hidden = false;
        document.getElementById("plural-time").hidden = true;
    }
    else if ($('#princesses').val() == "three" && $('#time').val() == "one") 
    {
        $("#price").text("$375");
        $("#amount").text("3")
        $("#time-display").text("1")
        document.getElementById("plural").hidden = false;
        document.getElementById("plural-time").hidden = true;
    }
    else if ($('#princesses').val() == "one" && $('#time').val() == "two") 
    {
        $("#price").text("$300");
        $("#amount").text("1")
        $("#time-display").text("2")
        document.getElementById("plural").hidden = true;
        document.getElementById("plural-time").hidden = false;
    }
    else if ($('#princesses').val() == "two" && $('#time').val() == "two") 
    {
        $("#price").text("$475");
        $("#amount").text("2")
        $("#time-display").text("2")
        document.getElementById("plural").hidden = false;
        document.getElementById("plural-time").hidden = false;
    }
    else if ($('#princesses').val() == "three" && $('#time').val() == "two") 
    {
        $("#price").text("$650");
        $("#amount").text("3")
        $("#time-display").text("2")
        document.getElementById("plural").hidden = false;
        document.getElementById("plural-time").hidden = false;
    }
    else if ($('#princesses').val() == "one" && $('#time').val() == "half") 
    {
        $("#price").text("$145");
        $("#amount").text("1")
        $("#time-display").text("half an")
        document.getElementById("plural").hidden = true;
        document.getElementById("plural-time").hidden = true;
    }
    else if ($('#princesses').val() == "two" && $('#time').val() == "half") 
    {
        $("#price").text("$245");
        $("#amount").text("2")
        $("#time-display").text("half an")
        document.getElementById("plural").hidden = false;
        document.getElementById("plural-time").hidden = true;
    }
    else if ($('#princesses').val() == "three" && $('#time').val() == "half") 
    {
        $("#price").text("$345");
        $("#amount").text("3")
        $("#time-display").text("half an")
        document.getElementById("plural").hidden = false;
        document.getElementById("plural-time").hidden = true;
    }
    else if ($('#princesses').val() == "multiple" && $('#time').val() == "one") 
    {
        $("#price").text("Call for Pricing");
        $("#amount").text("4 or more")
        $("#time-display").text("1")
        document.getElementById("plural").hidden = false;
        document.getElementById("plural-time").hidden = true;
    }
    else if ($('#princesses').val() == "multiple" && $('#time').val() == "two") 
    {
        $("#price").text("Call for Pricing");
        $("#amount").text("4 or more")
        $("#time-display").text("2")
        document.getElementById("plural").hidden = false;
        document.getElementById("plural-time").hidden = false;
    }
    else if ($('#princesses').val() == "multiple" && $('#time').val() == "half") 
    {
        $("#price").text("Call for Pricing");
        $("#amount").text("4 or more")
        $("#time-display").text("half an")
        document.getElementById("plural").hidden = false;
        document.getElementById("plural-time").hidden = true;
    };
    if ($('#call').val() == "fifteen") 
    {
        $("#time-call").text("15 minute")
        $("#price-call").text("$50")    
    }
    else if ($('#call').val() == "thirty") 
    {
        $("#time-call").text("30 minute")
        $("#price-call").text("$75")    
    }
    else if ($('#call').val() == "prerec") 
    {
        $("#time-call").text("Pre-Recorded")
        $("#price-call").text("$90")    
    }
});  