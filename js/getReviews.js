/////////////////////////////////////////
// begin navbar collapse on selection ///
$('.navbar-collapse').click('li', function() {
    $('.navbar-collapse').collapse('hide');
});
// end navbar collapse on selection ///
///////////////////////////////////////


///////////////////////////////////////////////
//begin prevent data binding with every search/
function loadAll(){
$('#searchFilm').focus(function(){
    $('input').each(function(){
      if ($(this).val() != null)
        $(this).val('');
    }); 
});


$("#searchFilm").focus(function() {
            document.getElementById("results").innerHTML = " ";
            document.getElementById("image").innerHTML = " ";
            filmReview();
});
	
}

loadAll();
///////////////////////////////////////////////
//begin prevent data binding with every search/