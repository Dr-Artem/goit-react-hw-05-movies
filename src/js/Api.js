import axios from 'axios';

export class Api {
    URL = `https://api.themoviedb.org/3`;
    API_KEY = '2e7c28da08e55a22b5345841376a3e4e';
    
    api = axios.create({
        baseURL: this.URL,
        params: {
            api_key: this.API_KEY,
            page: 1,
        },
    });
    
    someFunction = res => {
        if (!res.ok) {
            throw new Error(res.status);
        }
        return res.json();
    };

    getTrendingMovies = async () => {
        const response = await this.api.get(`/trending/movie/day`)
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



export class Api {
    fetchTrending = async mediaType => {
        const response = await api.get(`/trending/${mediaType}/day`);
        return response.data;
    };

    fetchByType = async (mediaType, type) => {
        const response = await api.get(`/${mediaType}/${type}`);
        return response.data;
    };

    fetchByName = async (mediaType, inputValue) => {
        const response = await api.get(`/search/${mediaType}?query=${inputValue}`);
        return response.data;
    };

    fetchDetails = async (mediaType, id) => {
        const response = await api.get(`/${mediaType}/${id}`);
        return response.data;
    };

    fetchSimilar = async (mediaType, id) => {
        const response = await api.get(`/${mediaType}/${id}/similar`);
        return response.data;
    };

    fetchCredits = async (mediaType, id) => {
        const response = await api.get(`/${mediaType}/${id}/credits`);
        return response.data;
    };

    fetchReviews = async (mediaType, id) => {
        const response = await api.get(`/${mediaType}/${id}/reviews`);
        return response.data;
    };

    fetchTrailers = async (mediaType, id) => {
        const response = await api.get(`/${mediaType}/${id}/videos`);
        return response.data;
    };
}
