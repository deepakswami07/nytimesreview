////////////////////////
//begin ajax for home//
var $homeHTML = " ";
$homeHTML += '<section id="toFill">';
$homeHTML += '<article>';
$homeHTML += '<h1 class="main-header">FILM REVIEW</h1>';
$homeHTML += '<p id="d-home">Get NYTIMES film review with one click</p>';
$homeHTML += '</article>';

$homeFormsHTML = " ";
$homeFormsHTML += '<form class="navbar-form navbar-center form-inline" role="searchFriendsName">';
$homeFormsHTML += '<div class="form-group">';
$homeFormsHTML += '<label for="searchFriendsName"></label>';
$homeFormsHTML += '<div class="form-group">';
$homeFormsHTML += '<input type="text" class="form-control" id="searchFriendsName" name="searchFriendsName" placeholder="Type in seach term...">';
$homeFormsHTML += ' <button class="btn btn-info button-style" id="submit" type="submit" value="search">';
$homeFormsHTML += '<span class="glyphicon glyphicon-search"></span>';
$homeFormsHTML += '</button>';
$homeFormsHTML += '</div>';
$homeFormsHTML += '</div>';
$homeFormsHTML += '</form>';
//end ajax for home//
////////////////////


//////////////////////////////////////
// begin ajax for reviewer
var $reviewersHTML = " ";
$reviewersHTML += '<section>';
$reviewersHTML += '<h1 class="main-header">REVIEWER</h1>';
$reviewersHTML += '<article>';
$reviewersHTML += '<p id="d-favorite">Type in your friend’s userid or username and find their favorite photos.</p>';
$reviewersHTML += '</article>';
$reviewersHTML += '</section>';

var $rewiewersFormHTML = " ";
$rewiewersFormHTML += '<form class="navbar-form navbar-center" role="searchFriendsFav">';
$rewiewersFormHTML += '<div class="form-group">';
$rewiewersFormHTML += '<label for="searchFriendsFav"></label>';
$rewiewersFormHTML += '<div class="form-group">';
$rewiewersFormHTML += '<input type="text" class="form-control" id="searchFriendsFav" name="searchFriendsFav" placeholder="username or id">';
$rewiewersFormHTML += ' <button class="btn btn-info button-style" id="submit" type="submit" value="search">';
$rewiewersFormHTML += '<span class="glyphicon glyphicon-search"></span>';
$rewiewersFormHTML += '</button>';
$rewiewersFormHTML += '</div>';
$rewiewersFormHTML += '</div>';
$rewiewersFormHTML += '</form>';
// end ajax for reviewer
////////////////////////////


////////////////////////////////
// begin ajax for critics pick//
var $criticsHTML = " ";
$criticsHTML += '<section>';
$criticsHTML += '<h1 class="main-header">CRITIC\'S PICK</h1>';
$criticsHTML += '<article>';
$criticsHTML += '<p id="d-id">Too busy to join Flickr but you want to stay connected to your friends by viewing their recent pictures? Type in your friend\'s userid and see the most recent posts.</p>';
$criticsHTML += '</article>';
$criticsHTML += '</section>';

var $criticsFormHTML = " ";
$criticsFormHTML += '<form class="navbar-form navbar-center form-inline" role="searchFriends">';
$criticsFormHTML += '<div class="form-group">';
$criticsFormHTML += '<label for="searchFriendsID"></label>';
$criticsFormHTML += '<div class="form-group">';
$criticsFormHTML += '<input type="text" class="form-control" id="searchFriendsID" name="searchFriends" placeholder="xxxxxxxx@Nxx">';
$criticsFormHTML += ' <button class="btn btn-info button-style" id="submit" type="submit" value="search">';
$criticsFormHTML += '<span class="glyphicon glyphicon-search"></span>';
$criticsFormHTML += '</button>';
$criticsFormHTML += '</div>';
$criticsFormHTML += '</div>';
$criticsFormHTML += '</form>';
//end ajax for userid pics
///////////////////////////


////////////////////////////
// begin ajax for about HTML
var $aboutHTML = " ";
$aboutHTML += '<section>';
$aboutHTML += '<h1 class="main-header">ABOUT</h1>';
$aboutHTML += '<article>';
$aboutHTML += '<p id="d-about">Keep your finger on the pulse of the latest picture trends on flickr.  Search for the most interesting pics of the day,search by category, friend’s id or your friend’s favorites.</p>';
$aboutHTML += '</article>';
$aboutHTML += '</section>';

var $aboutReviewFormHTML = " ";
// end ajax for about HTML
///////////////////////////


//////////////////////////
// begin append to HTML //

$("#home").click(function() {
    document.getElementById("toFill").innerHTML = $homeHTML;
    document.getElementById("result").innerHTML = $homeFormsHTML;
}); 


$("#reviewer").click(function() {
    document.getElementById("toFill").innerHTML = $reviewersHTML;
    document.getElementById("result").innerHTML = $rewiewersFormHTML;
});


$("#critics").click(function() {
    document.getElementById("toFill").innerHTML = $criticsHTML;
    document.getElementById("result").innerHTML = $criticsFormHTML;
});


$("#about").click(function() {
    document.getElementById("toFill").innerHTML = $aboutHTML;
    document.getElementById("result").innerHTML = $aboutReviewFormHTML;
});