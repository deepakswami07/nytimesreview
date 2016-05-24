/////////////////////////////////////////
// begin navbar collapse on selection ///
$('.navbar-collapse').click('li', function() {
    $('.navbar-collapse').collapse('hide');
});
// end navbar collapse on selection ///
///////////////////////////////////////


/////////////////////////////////////////
// begin load gallery button ///
// function loadGallery(){
//     document.getElementById("loadImageGallery").innerHTML = $loadImageGalleryHTML;
// }
/////////////////////////////////////////
// end load gallery button ///


///////////////////////////////////////////////
//begin prevent data binding with every search/
function checkPictures() {
    $("#getPicturesOfTheDay").click(function() {
        if ($("#links > a").length > 0) {
            console.log("hello");
            $("#links > a").remove();
        } else {
            console.log("hello");
            loadGallery();
            return pictures();
        }
    });
}

function checkSearch() {
    $("#searchFriendsName").focus(function(){
    if ($("#links > a").length > 0) {
            console.log("hello");
            $("#links > a").remove();
        } else {
           return usernamePictures();
        }
    });
}

function checkId() {
    $("#searchFriendsID").focus(function(){
    if ($("#links > a").length > 0) {
            console.log("hello");
            $("#links > a").remove();
        } else {
           return useridPictures();
        }
    });
}

function checkFavorite() {
    $("#searchFriendsFav").focus(function(){
    if ($("#links > a").length > 0) {
            console.log("hello");
            $("#links > a").remove();
        } else {
           return favoritePictures();
        }
    });
}
/////////////////////////////////////////////
//end prevent data binding with every search/


///////////////////////////
//begin loading ajax calls/
function loadAll() {
    $(document).ready(function() {

///////////////////////////////////////////////////////////
//////begin get picture of the day when window loads///////
         $("#getPicturesOfTheDay").click(function() {
            document.getElementById("links").innerHTML = "";
            if ($("#links > a").length > 0) {
            console.log("hello");
            $("#links > a").remove();
        } else {
            // loadGallery();
            return pictures();
        }
        });
////// end get picture of the day when window loads///////////
///////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////
/////begin get pictures of the day when you click home button/
        $("#home").click(function() {
            document.getElementById("links").innerHTML = "";
            $("#getPicturesOfTheDay").click(function() {
                pictures();
            });
        });
/////end get pictures of the day when you click home button/
///////////////////////////////////////////////////////////
    
        $("#search").click(function() {
            document.getElementById("links").innerHTML = "";
            checkSearch()
        });

        $("#userID").click(function() {
            document.getElementById("links").innerHTML = "";
            checkId();
        });

        $("#favorites").click(function() {
            document.getElementById("links").innerHTML = "";
            checkFavorite();
        });

        $("#home").click(function() {
            document.getElementById("links").innerHTML = "";
        });

        $("#about").click(function() {
            document.getElementById("links").innerHTML = "";
        });
    });
}

loadAll();
//end loading ajax calls//
/////////////////////////
