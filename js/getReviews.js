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



function checkSearch() {

    $("#searchFilm").focus(function(){
    if ( $("#links" != null) ) {
            $("#links").remove();
        } else {
           return filmReview();
        }
    });
};

 $("#search").click(function() {
            document.getElementById("links").innerHTML = "";
            filmReview();
});
