/*////////////////////////////////////////*/
/* begin search film review -- home page */

var filmReview = function(){
    $('form').submit(function(event){
        event.preventDefault();
        var $searchField = $("#searchFilm");
        var query = $searchField.val();
        var url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json";
        var api = "9cced63c6fde5aa51d72ec61a881f5e3:19:71855090"
        var monthNames = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul",
                          "Aug", "Sept", "Oct", "Nov", "Dec"];

        url += '?' + $.param({'api-key': api,
        'query': query,
        'critics-pick': "N"
        });

        $.ajax({
        url: url,
        method: 'GET',
        cache: false,
            }).done(function(data) {
                for (var i = 0; i < data.results.length; i++) {
    
                /*/////////////////////////////*/
                /* begin add image properties */
                $('<img id="poster"/>')
                    .attr('src', "" + data.results[i].multimedia.src + "")       
                    .attr('title', data.results[i].display_title)
                    .attr('alt', "weiner")
                    .width(data.results[i].multimedia.width).height(data.results[i].multimedia.height)
                    .appendTo($('#image'));  

                /* end add image properties */
                /*/////////////////////////*/


                /*///////////////////////////*/
                /* begin critics pick check */
                    var resultsArray = data.results;
                    /*console.log(resultsArray.length);
                    console.log(resultsArray);*/
                    var critics_pick;
                        if (data.results[i].critics_pick > 0){
                            critics_pick = "Yes";
                    }    
                        else
                    {
                            critics_pick = "No";
                    }
                /* end critics pick check */
                /*/////////////////////////////*/

                /*//////////////////////////////////////////*/
                /* begin opening date check and conversion */

                    var date = new Date(data.results[i].opening_date);
                    var day = date.getDate();
                    var monthIndex = date.getMonth();
                    var year = date.getFullYear();

                    var opening_date;
                        if (data.results[i].opening_date != null){
                            opening_date = day + ' ' + monthNames[monthIndex] + ' ' + year;
                    }    
                        else
                    {
                            opening_date = "Date Not Announced";
                    }
                    
                /* end opening date check and conversion */
                /*//////////////////////////////////////*/


                /*////////////////*/
                /* begin add url */
                    var reviewUrl = data.results[i].link.url;
    
                /* end add url */
                /*////////////*/

                var article;
                    article = $('<article/>');
                    article.append('<h4 id="title">' +  'Film: ' + data.results[i].display_title + "</h4>");
                    article.append('<h4 id="opening">' +  'Opening: ' + opening_date + "</h4>");
                    article.append('<h4 id="rating">' +  'Rating: ' + data.results[i].mpaa_rating + "</h4>");
                    article.append('<h4 id="critics-pick">' +  'Critics Pick: ' + critics_pick + "</h4>");
                    article.append('<h5 id="headline">' + data.results[i].headline + "</h5>");
                    article.append('<h6 id="author">' + 'Review By: ' + data.results[i].byline + "</h6>");
                    article.append('<p id="summary">' + data.results[i].summary_short + "</p>");
                    article.append('<a id="link" '  + 'href=' + reviewUrl +  " " + 'target=' + "_blank"  + '>' 
                                + 'Read the full review...' + '</a>' );
                        $('#results').append(article);
                    };

            }).fail(function(err) {
            throw err;

        });
    });
}

/*filmReview();


/*////////////////////////////////////////*/
/* begin search film review -- home page */




