app.service('RandomMovie', function ($http) {
    return {
        GetRandomMovie: function () {
                var id = Math.floor(Math.random() * 3900000);
                if (id.toString().length < 7) {
                    do {
                        id = '0' + id;
                    } while (id.toString().length < 7)
                }
                var url = 'http://www.omdbapi.com/?i=tt' + id;
              return $http.get(url, { responseType: "json" })
                    .then(function (response) {
                        return response.data;
                    }, function (response)
                    {
                        return response.statusText;
                    });
        }
    }
});