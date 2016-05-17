var $userSearchFilmsFormHTML = " ";
$userSearchFilmsFormHTML += '<form class="navbar-form navbar-center form-inline" role="searchFriendsName">';
$userSearchFilmsFormHTML += '<div class="form-group">';
$userSearchFilmsFormHTML += '<label for="searchFriendsName"></label>';
$userSearchFilmsFormHTML += '<div class="form-group">';
$userSearchFilmsFormHTML += '<input type="text" class="form-control" id="searchFriendsName" name="searchFriendsName" placeholder="Type in seach term...">';
$userSearchFilmsFormHTML += ' <button class="btn btn-info button-style" id="submit" type="submit" value="search">';
$userSearchFilmsFormHTML += '<span class="glyphicon glyphicon-search"></span>';
$userSearchFilmsFormHTML += '</button>';
$userSearchFilmsFormHTML += '</div>';
$userSearchFilmsFormHTML += '</div>';
$userSearchFilmsFormHTML += '</form>';


var $searchHTML = " ";
$searchHTML += '<section>';
$searchHTML += '<h1 class="main-header">SEARCH</h1>';
$searchHTML += '<h1 class="second-header-search">pics by topic</h1>';
$searchHTML += '<article>';
$searchHTML += '<p id="d-search">Type in a search term to find the most recent photos that have been posted on Flickr.</p>';
$searchHTML += '</article>';
$searchHTML += '</section>';

$("#search").click(function() {
    document.getElementById("toFill").innerHTML = $searchHTML;
    document.getElementById("result").innerHTML = $userSearchFilmsFormHTML;
});