$("select").change(function() {
    if($('#time').val() == "one") 
    {
        $("#price-imp").text("$250");
    }
    if($('#time').val() == "two") 
    {
        $("#price-imp").text("$450");
    }
});

