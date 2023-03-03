export class Api {
    API_KEY = '76f6a0e7e680b93f5042387526ec70f2';

    someFunction = res => {
        if (!res.ok) {
            throw new Error(res.status);
        }
        return res.json();
    };

    getTrendingMovies = async () => {
        const response = await fetch(
            `https://api.themoviedb.org/3/trending/movie/week?api_key=${this.API_KEY}`
        );

        return await this.someFunction(response);
    };

    getMovieByName = async inputValue => {
        const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&query=${inputValue}`
        );

        return await this.someFunction(response);
    };

    getClickedMovie = async movieId => {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.API_KEY}`
        );
        return await this.someFunction(response);
    };

    getClickedMovieActors = async movieId => {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${this.API_KEY}`
        );

        return await this.someFunction(response);
    };

    getClickedMovieReviews = async movieId => {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${this.API_KEY}`
        );

        return await this.someFunction(response);
    };

    getClickedMovieTrailer = async movieId => {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${this.API_KEY}`
        );

        return await this.someFunction(response);
    };
}
