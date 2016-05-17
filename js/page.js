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


////////////////////////////////////////////////////////
//begin signup passowrd/confirm password validation form
var $signupPassword = $("#signupPassword");
var $signupConfirmPassword = $("#signupConfirmPassword")
var $signupEmail = $("#signupEmail");
var $loginEmail = $("#loginEmail");

function isSignupPasswordValid() {
    return $signupPassword.val().length > 4;
}

function areSignupPasswordConfirmMatching() {
    return $signupPassword.val() === $signupConfirmPassword.val();
}

function isEmailValid() {
    var emailPattern = new RegExp(/(.+)@(.+){2,}\.(.+){2,}/);
    var email = $signupEmail.val();
    var email = $loginEmail.val();
    return emailPattern.test(email);
}

$("#signupForm p").hide();
$("#loginForm p").hide();

function checkSignupPassword() {
    if (isSignupPasswordValid()) {
        $signupPassword.next().hide();
    } else {
        $signupPassword.next().show();
    }
}

function checkSignupConfirmPassword() {
    if (areSignupPasswordConfirmMatching()) {
        $signupConfirmPassword.next().hide();
    } else {
        $signupConfirmPassword.next().show();
    }
}

function checkSignupEmail() {
    if (isEmailValid()) {
        $signupEmail.next().hide();
    } else {
        $signupEmail.next().show();
    }
}

function checkLoginEmail() {
    if (isEmailValid()) {
        $loginEmail.next().hide();
    } else {
        $loginEmail.next().show();
    }
}
$signupPassword.focus(checkSignupPassword).keyup(checkSignupPassword).keyup(
    checkSignupConfirmPassword);
$signupConfirmPassword.focus(checkSignupConfirmPassword).keyup(
    checkSignupConfirmPassword);
$signupEmail.focus(checkSignupEmail).keyup(checkSignupEmail);
$loginEmail.focus(checkLoginEmail).keyup(checkLoginEmail);
////////////////////////////////////////////////////////
//begin signup passowrd/confirm password validation form