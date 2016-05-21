var filmReview = function(){
    $('form').submit(function(event){
        event.preventDefault();
        var $searchField = $("#searchFilm");
        var query = $searchField.val();
        var url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json";
        var api = "9cced63c6fde5aa51d72ec61a881f5e3:19:71855090"
        var article;
        var image;

        url += '?' + $.param({'api-key': api,
        'query': query,
        'critics-pick': "N"
        });

        $.ajax({
        url: url,
        method: 'GET',
            }).done(function(data) {
            /*var status = data.status;
            var copyright = data.copyright;
            var num_results = data.num_results;
            var title = data.results[0].display_title;
            var summary = data.results[0].summary_short
                console.log(status);
                console.log(copyright);
                console.log(num_results);
                console.log(title);
                console.log(summary);
                console.log(data);*/

                for (var i = 0; i < data.results.length; i++) {
                /*var width = data.results[i].multimedia.width;
                var height = data.results[i].multimedia.height;
                 $('<img src="'+ data.results[i].multimedia.src +'">').load(function() {
                $(this).width(some).height(some).appendTo('#some_target');
                }); */

                $('<img id="poster"/>')
                    .attr('src', "" + data.results[i].multimedia.src + "")         // ADD IMAGE PROPERTIES.
                    .attr('title', data.results[i].display_title)
                    .attr('alt', "weiner")
                    .width(data.results[i].multimedia.width).height(data.results[i].multimedia.height)
                    .appendTo($('#image'));  

                var critics_pick;
                if (data.results[i].critics_pick > 0){
                    critics_pick = "Yes";
                }    
                else
                {
                    critics_pick = "No";
                }
                article = $('<article/>');
                article.append('<h4 id="title">' +  'Film: ' + data.results[i].display_title + "</h4>");
                article.append('<h4 id="rating">' +  'Rating: ' + data.results[i].mpaa_rating + "</h4>");
                article.append('<h4 id="rating">' +  'Critics Pick: ' + critics_pick + "</h4>");
                article.append('<h5 id="headline">' + data.results[i].headline + "</h5>");
                article.append('<h6 id="author">' + 'Review By: ' + data.results[i].byline + "</h6>");
                article.append('<p id="summary">' + data.results[i].summary_short + "</p>");
                $('#results').append(article);
                };

            }).fail(function(err) {
            throw err;

        });
    });
}

filmReview();




