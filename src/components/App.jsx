import { Routes, Route } from 'react-router-dom';

import { Home } from './Home/Home';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Movies } from './Movies/Movies';
import { Layout } from './Layout/Layout';
import { Reviews } from './Reviews/Reviews';
import { Cast } from './Cast/Cast';
// import { lazy, Suspense } from 'react';

// const Home = lazy(() => import('./Home/Home'));

export const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="" element={<Home />}></Route>
                    <Route path="movies" element={<Movies />}>
                        <Route path=":movieId" element={<MovieDetails />}>
                            <Route path="credits" element={<Cast />}></Route>
                            <Route path="reviews" element={<Reviews />}></Route>
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </>
    );
};
