
var filmReview = function(){
    $('form').submit(function(event){
        event.preventDefault();
        var $searchField = $("#searchFilm");
        var query = $searchField.val();
        console.log(query);
        var url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json";
        var api = "9cced63c6fde5aa51d72ec61a881f5e3:19:71855090"

        url += '?' + $.param({'api-key': api,
        'query': query,
        'critics-pick': "N"
        });

        $.ajax({
        url: url,
        method: 'GET',
            }).done(function(data) {
            var status = data.status;
            var copyright = data.copyright;
            var num_results = data.num_results;
            var title = data.results[0].display_title;
            var summary = data.results[0].summary_short
                console.log(status);
                console.log(copyright);
                console.log(num_results);
                console.log(title);
                console.log(summary);
            }).fail(function(err) {
            throw err;
        });
        
    });
}

filmReview();


/* var url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json";
url += '?' + $.param({
  'api-key': "9cced63c6fde5aa51d72ec61a881f5e3:19:71855090",
  'query': "Manhattan night",
  'critics-pick': "N";

$.ajax({
  url: url,
  method: 'GET',
}).done(function(data) {
    var status = data.status;
    var copyright = data.copyright;
    var num_results = data.num_results;
    var title = data.results[0].display_title;
    var summary = data.results[0].summary_short
    console.log(status);
    console.log(copyright);
    console.log(num_results);
    console.log(title);
    console.log(summary);
}).fail(function(err) {
  throw err;
});

*/


