$("select").change(function() {
    if($('#time').val() == "one") 
    {
        $("#price-imp").text("$225");
    }
    if($('#time').val() == "two") 
    {
        $("#price-imp").text("$450");
    }
});

