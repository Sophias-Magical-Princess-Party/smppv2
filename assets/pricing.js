$("#soloprincess").on('click', function(){      
         $(".pricing-main").text("195");
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
function updatePricing() {
    var type = $('#type').val();
    var time = $('#time').val();
    // set default princesses value variable
    var princesses = $('#princesses').val();
    var hunters = $('#hunters').val();

        if (type === 'Impersonator') {
            $('#princess-select').prop('hidden', true);
            $('#kpop-select').prop('hidden', true);
            $('#price').prop('hidden', true);
            $('#price-k').prop('hidden', true);
            $('#price-imp').prop('hidden', false);
            // only reset time when it's 'half' (so users can still choose 'two')
            if (time === 'half') { $('#time').val('one'); time = 'one'; }
            $('#princesses').val('one');
            $('#half').prop('hidden', true);
            $('#multiple').prop('hidden', true);
            // set impersonator price: $450 for two, otherwise $225
            if (time === 'two') { $('#price-imp').text('$450'); } else { $('#price-imp').text('$225'); }
            princesses = 'one';
        } else if (type === 'kpop') {
        $('#princess-select').prop('hidden', true);
        $('#kpop-select').prop('hidden', false);
        $('#price').prop('hidden', true);
        $('#price-k').prop('hidden', false);
        $('#price-imp').prop('hidden', true);
        $('#half').prop('hidden', false);
        $('#multiple').prop('hidden', false);
    } else if (type === 'Princess') {
        $('#princess-select').prop('hidden', false);
        $('#kpop-select').prop('hidden', true);
        $('#price').prop('hidden', false);
        $('#price-k').prop('hidden', true);
        $('#price-imp').prop('hidden', true);
        $('#half').prop('hidden', false);
        $('#multiple').prop('hidden', false);
    }

    princesses = $('#princesses').val();

    // Princess pricing
    if (type === 'Princess' && princesses === 'one' && time === 'one') {
        $('#price').text('$195'); $('#amount').text('1'); $('#time-display').text('1');
        $('#plural').prop('hidden', true); $('#plural-time').prop('hidden', true);
    } else if (type === 'Princess' && princesses === 'two' && time === 'one') {
        $('#price').text('$295'); $('#amount').text('2'); $('#time-display').text('1');
        $('#plural').prop('hidden', false); $('#plural-time').prop('hidden', true);
    } else if (type === 'Princess' && princesses === 'three' && time === 'one') {
        $('#price').text('$395'); $('#amount').text('3'); $('#time-display').text('1');
        $('#plural').prop('hidden', false); $('#plural-time').prop('hidden', true);
    } else if (type === 'Princess' && princesses === 'one' && time === 'two') {
        $('#price').text('$295'); $('#amount').text('1'); $('#time-display').text('2');
        $('#plural').prop('hidden', true); $('#plural-time').prop('hidden', false);
    } else if (type === 'Princess' && princesses === 'two' && time === 'two') {
        $('#price').text('$495'); $('#amount').text('2'); $('#time-display').text('2');
        $('#plural').prop('hidden', false); $('#plural-time').prop('hidden', false);
    } else if (type === 'Princess' && princesses === 'three' && time === 'two') {
        $('#price').text('$650'); $('#amount').text('3'); $('#time-display').text('2');
        $('#plural').prop('hidden', false); $('#plural-time').prop('hidden', false);
    } else if (type === 'Princess' && princesses === 'one' && time === 'half') {
        $('#price').text('$165'); $('#amount').text('1'); $('#time-display').text('half an');
        $('#plural').prop('hidden', true); $('#plural-time').prop('hidden', true);
    } else if (type === 'Princess' && princesses === 'two' && time === 'half') {
        $('#price').text('$265'); $('#amount').text('2'); $('#time-display').text('half an');
        $('#plural').prop('hidden', false); $('#plural-time').prop('hidden', true);
    } else if (type === 'Princess' && princesses === 'three' && time === 'half') {
        $('#price').text('$345'); $('#amount').text('3'); $('#time-display').text('half an');
        $('#plural').prop('hidden', false); $('#plural-time').prop('hidden', true);
    } else if (type === 'Princess' && princesses === 'multiple' && time === 'one') {
        $('#price').text('Call for Pricing'); $('#amount').text('4 or more'); $('#time-display').text('1');
        $('#plural').prop('hidden', false); $('#plural-time').prop('hidden', true);
    } else if (type === 'Princess' && princesses === 'multiple' && time === 'two') {
        $('#price').text('Call for Pricing'); $('#amount').text('4 or more'); $('#time-display').text('2');
        $('#plural').prop('hidden', false); $('#plural-time').prop('hidden', false);
    } else if (type === 'Princess' && princesses === 'multiple' && time === 'half') {
        $('#price').text('Call for Pricing'); $('#amount').text('4 or more'); $('#time-display').text('half an');
        $('#plural').prop('hidden', false); $('#plural-time').prop('hidden', true);
    }

    // kpop pricing
    if (type === 'kpop' && hunters === 'one' && time === 'one') {
        $('#price-k').text('$225'); $('#amount').text('1'); $('#time-display').text('1');
        $('#plural').prop('hidden', true); $('#plural-time').prop('hidden', true);
    } else if (type === 'kpop' && hunters === 'two' && time === 'one') {
        $('#price-k').text('$325'); $('#amount').text('2'); $('#time-display').text('1');
        $('#plural').prop('hidden', false); $('#plural-time').prop('hidden', true);
    } else if (type === 'kpop' && hunters === 'three' && time === 'one') {
        $('#price-k').text('$425'); $('#amount').text('3'); $('#time-display').text('1');
        $('#plural').prop('hidden', false); $('#plural-time').prop('hidden', true);
    } else if (type === 'kpop' && hunters === 'one' && time === 'two') {
        $('#price-k').text('Call for Pricing'); $('#amount').text('1'); $('#time-display').text('2');
        $('#plural').prop('hidden', true); $('#plural-time').prop('hidden', false);
    } else if (type === 'kpop' && hunters === 'two' && time === 'two') {
        $('#price-k').text('Call for Pricing'); $('#amount').text('2'); $('#time-display').text('2');
        $('#plural').prop('hidden', false); $('#plural-time').prop('hidden', false);
    } else if (type === 'kpop' && hunters === 'three' && time === 'two') {
        $('#price-k').text('Call for Pricing'); $('#amount').text('3'); $('#time-display').text('2');
        $('#plural').prop('hidden', false); $('#plural-time').prop('hidden', false);
    } else if (type === 'kpop' && hunters === 'one' && time === 'half') {
        $('#price-k').text('$175'); $('#amount').text('1'); $('#time-display').text('half an');
        $('#plural').prop('hidden', true); $('#plural-time').prop('hidden', true);
    } else if (type === 'kpop' && hunters === 'two' && time === 'half') {
        $('#price-k').text('$250'); $('#amount').text('2'); $('#time-display').text('half an');
        $('#plural').prop('hidden', false); $('#plural-time').prop('hidden', true);
    } else if (type === 'kpop' && hunters === 'three' && time === 'half') {
        $('#price-k').text('$325'); $('#amount').text('3'); $('#time-display').text('half an');
        $('#plural').prop('hidden', false); $('#plural-time').prop('hidden', true);
    }

    // Call options
    var call = $('#call').val();
    if (call === 'fifteen') { $('#time-call').text('15 minute'); $('#price-call').text('$50'); }
    else if (call === 'thirty') { $('#time-call').text('30 minute'); $('#price-call').text('$75'); }
    else if (call === 'prerec') { $('#time-call').text('Pre-Recorded'); $('#price-call').text('$90'); }
}

// bind once and initialize on load
$(document).on('change', 'select', updatePricing);
$(function(){ updatePricing(); });