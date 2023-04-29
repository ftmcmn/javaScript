const searchShows =  (query, cb) => {
    fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
    .then(response => response.json())
    .then(data => {
        
        cb(data);


    }); }

    export {searchShows};