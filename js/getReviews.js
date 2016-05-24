/////////////////////////////////////////
// begin navbar collapse on selection ///

$('.navbar-collapse').click('li', function() {
    $('.navbar-collapse').collapse('hide');
});

// end navbar collapse on selection ///
///////////////////////////////////////


///////////////////////////////////////////////
//begin prevent data binding with every search/

$('#searchFilm').focus(function(){
    $('input').each(function(){
      if ($(this).val() != null)
        $(this).val('');
    }); 
});


 $("#search").focus(function() {
            document.getElementById("results").innerHTML = " ";
            filmReview();
});

///////////////////////////////////////////////
//begin prevent data binding with every search/