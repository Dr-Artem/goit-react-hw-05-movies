import { Route, Routes } from 'react-router-dom';

import { lazy } from 'react';
import { Home } from './Home/Home';
import { Layout } from './Layout/Layout';

const Movies = lazy(() => import('./Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Trailer = lazy(() => import('./Trailer/Trailer'));

export const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="" element={<Home />}></Route>
                    <Route path="movies" element={<Movies />}></Route>
                    <Route path="movies/:movieId" element={<MovieDetails />}>
                        <Route path="credits" element={<Cast />}></Route>
                        <Route path="reviews" element={<Reviews />}></Route>
                        <Route path="trailers" element={<Trailer />}></Route>
                    </Route>
                </Route>
            </Routes>
        </>
    );
};
