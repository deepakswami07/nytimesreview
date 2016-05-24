////////////////////////
//begin ajax for home//
var $homeHTML = " ";
$homeHTML += '<section id="toFill">';
$homeHTML += '<article>';
$homeHTML += '<h1 class="main-header">FILM REVIEW</h1>';
$homeHTML += '<p id="d-home">NYTIMES film review one click away</p>';
$homeHTML += '<form class="navbar-form navbar-center form-inline" role="searchFilm">';
$homeHTML += '<div class="form-group">';
$homeHTML += '<label for="searchFilm"></label>';
$homeHTML += '<div class="form-group">';
$homeHTML += '<input type="text" class="form-control" id="searchFilm" name="searchFilm" placeholder="Type movie name">';
$homeHTML += ' <button class="btn btn-info button-style" id="submit" type="submit" value="search">';
$homeHTML += '<span class="glyphicon glyphicon-search"></span>';
$homeHTML += '</button>';
$homeHTML += '</div>';
$homeHTML += '</div>';
$homeHTML += '</form>';
$homeHTML += '</article>';
$homeHTML += '</section>';
//end ajax for home//
////////////////////


////////////////////////////////
// begin ajax for critics pick//
var $criticsHTML = " ";
$criticsHTML += '<section id="toFill">';
$criticsHTML += '<h1 class="main-header">CRITIC\'S PICK</h1>';
$criticsHTML += '<article>';
$criticsHTML += '<p id="d-id">NYTIMES film critics on blockbusters, independents and everything in between</p>';
$criticsHTML += '<form class="navbar-form navbar-center form-inline" role="searchFriends">';
$criticsHTML += '<div class="form-group">';
$criticsHTML += '<label for="searchFriendsID"></label>';
$criticsHTML += '<div class="form-group">';
$criticsHTML += ' <button class="btn btn-info button-style" id="submit" type="submit" value="search">';
$criticsHTML += '<span>CRITIC\'S PICKS </span>';
$criticsHTML += '<span class="glyphicon glyphicon-search"></span>';
$criticsHTML += '</button>';
$criticsHTML += '</div>';
$criticsHTML += '</div>';
$criticsHTML += '</form>';
$criticsHTML += '</article>';
$criticsHTML += '</section>';
//end ajax for userid pics//
////////////////////////////


//////////////////////////////////////
// begin ajax for reviewer
var $reviewersHTML = " ";
$reviewersHTML += '<section id="toFill">';
$reviewersHTML += '<h1 class="main-header">REVIEWER</h1>';
$reviewersHTML += '<article>';
$reviewersHTML += '<p id="d-favorite">Find info about NYTIMES reviewers and the films they have reviewed.</p>';
$reviewersHTML += '<form class="navbar-form navbar-center" role="searchFriendsFav">';
$reviewersHTML += '<div class="form-group">';
$reviewersHTML += '<label for="searchFriendsFav"></label>';
$reviewersHTML += '<div class="form-group">';
$reviewersHTML += '<input type="text" class="form-control" id="searchFriendsFav" name="searchFriendsFav" placeholder="ex: A.O Scott..">';
$reviewersHTML += ' <button class="btn btn-info button-style" id="submit" type="submit" value="search">';
$reviewersHTML += '<span class="glyphicon glyphicon-search"></span>';
$reviewersHTML += '</button>';
$reviewersHTML += '</div>';
$reviewersHTML += '</div>';
$reviewersHTML += '</form>';
$reviewersHTML += '</article>';
$reviewersHTML += '</section>';
// end ajax for reviewer
////////////////////////////


////////////////////////////
// begin ajax for about HTML
var $aboutHTML = " ";
$aboutHTML += '<section id="toFill">';
$aboutHTML += '<h1 class="main-header">ABOUT</h1>';
$aboutHTML += '<article>';
$aboutHTML += '<p id="d-about">Before you head to the movies see what NYTIMES reviewers have to say about this week \'s films</p>';
$aboutHTML += '</article>';
$aboutHTML += '</section>';

var $aboutReviewFormHTML = " ";
// end ajax for about HTML
///////////////////////////


//////////////////////////
// begin append to HTML //
$("#home").click(function() {
    document.getElementById("toFill").innerHTML = $homeHTML;
}); 

$("#critics").click(function() {
    document.getElementById("toFill").innerHTML = $criticsHTML;
});

$("#reviewer").click(function() {
    document.getElementById("toFill").innerHTML = $reviewersHTML;
});

$("#about").click(function() {
    document.getElementById("toFill").innerHTML = $aboutHTML;
});
//////////////////////////
// begin append to HTML //