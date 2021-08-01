var main = document.getElementById('main');

async function getMovie() {
    let input = document.getElementById('name').value;
    let movie_div = document.createElement('div');
    movie_div.setAttribute('id', 'movie');
    
    let movies = await fetch(`http://www.omdbapi.com/?t=${input}&apikey=17bc78e6`);
    let result = await movies.json();
    let title = document.createElement('h3');
    title.innerHTML = result.Title;
    movie_div.append(title);
    rating = document.createElement('h5');
    rating.innerHTML = result.imdbRating;
    movie_div.append(rating);
    main.append

    console.log(result);
     console.log(result.imdbRating);
}