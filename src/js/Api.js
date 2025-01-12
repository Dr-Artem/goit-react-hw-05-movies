import axios from 'axios';

const URL = `https://api.themoviedb.org/3`;
const API_KEY = '76f6a0e7e680b93f5042387526ec70f2';

const api = axios.create({
    baseURL: URL,
    params: {
        api_key: API_KEY,
        page: 1,
    },
});
export class Api {
    getTrendingMovies = async () => {
        const response = await api.get(`/trending/movie/day`);
        return response.data;
    };

    getMovieByName = async inputValue => {
        const response = await api.get(`/search/movie?query=${inputValue}`);
        return response.data;
    };

    getClickedMovie = async movieId => {
        const response = await api.get(`/movie/${movieId}`);
        return response.data;
    };

    getClickedMovieActors = async movieId => {
        const response = await api.get(`/movie/${movieId}/credits`);
        return response.data;
    };

    getClickedMovieReviews = async movieId => {
        const response = await api.get(`/movie/${movieId}/reviews`);
        return response.data;
    };

    getClickedMovieTrailer = async movieId => {
        const response = await api.get(`/movie/${movieId}/videos`);
        return response.data;
    };
}

// export class Api {

//     fetchByType = async (mediaType, type) => {
//         const response = await api.get(`/${mediaType}/${type}`);
//         return response.data;
//     };

//     fetchSimilar = async (mediaType, id) => {
//         const response = await api.get(`/${mediaType}/${id}/similar`);
//         return response.data;
//     };
// }
