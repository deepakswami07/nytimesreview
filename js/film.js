var pictures = function() {
        $('form').submit(function(event) {
            event.preventDefault();
            var apiKey = '9cced63c6fde5aa51d72ec61a881f5e3:19:71855090';
            var $searchField = $("#search");
            var url = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json';
            $.ajax({
                url: 'https://api.nytimes.com/svc/movies/v2/reviews/search.json',
                data: {
                    format: 'json',
                    method: 'GET',
                    api_key: '9a204c1e5292bcbc81473e3ea47dd1d3',
                },
                dataType: 'jsonp',
                jsonp: 'jsoncallback'
            }).done(function(result) {
                var linksContainer = $('#links'),
                    baseUrl;
                if (result.photos.photo.length > 0) {
                    $.each(result.photos.photo, function(index,
                        item) {
                        baseUrl = 'http://farm' + item.farm +
                            '.static.flickr.com/' +
                            item.server + '/' + item.id +
                            '_' + item.secret;
                        $('<a/>').append($('<img>').prop(
                            'src', baseUrl +
                            '_s.jpg')).prop('href',
                            baseUrl + '_b.jpg').prop(
                            'title', item.title).attr(
                            'data-gallery', '').appendTo(
                            linksContainer);
                    });
                } else {
                    (
                        '<p class="lead text-danger"> No photos found to match your search the user ID: ' +
                        +'.</p>').appendTo(linksContainer);
                }
            });
            $('#image-gallery-button').on('click', function(event) {
                event.preventDefault();
                blueimp.Gallery($('#links a'), $(
                    '#blueimp-gallery').data());
            });
        });
    }
/* var pictures = function() {
        $('form').submit(function(event) {
            event.preventDefault();
            var apiKey = '9cced63c6fde5aa51d72ec61a881f5e3:19:71855090';
            var $searchField = $("#search");
            var url = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json';
            $.ajax({
                url: 'https://api.nytimes.com/svc/movies/v2/reviews/search.json',
                data: {
                    format: 'json',
                    method: 'GET',
                    api_key: '9a204c1e5292bcbc81473e3ea47dd1d3',
                },
                dataType: 'jsonp',
                jsonp: 'jsoncallback'
            }).done(function(result) {
                var linksContainer = $('#links'),
                    baseUrl;
                if (result.photos.photo.length > 0) {
                    $.each(result.photos.photo, function(index,
                        item) {
                        baseUrl = 'http://farm' + item.farm +
                            '.static.flickr.com/' +
                            item.server + '/' + item.id +
                            '_' + item.secret;
                        $('<a/>').append($('<img>').prop(
                            'src', baseUrl +
                            '_s.jpg')).prop('href',
                            baseUrl + '_b.jpg').prop(
                            'title', item.title).attr(
                            'data-gallery', '').appendTo(
                            linksContainer);
                    });
                } else {
                    (
                        '<p class="lead text-danger"> No photos found to match your search the user ID: ' +
                        +'.</p>').appendTo(linksContainer);
                }
            });
            $('#image-gallery-button').on('click', function(event) {
                event.preventDefault();
                blueimp.Gallery($('#links a'), $(
                    '#blueimp-gallery').data());
            });
        });
    }
    */
// end code for today's favorite pics  ////
