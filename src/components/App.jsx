import { Routes, Route } from 'react-router-dom';
import { Home } from './Home/Home';
import { MovieDetails } from './MovieDetails/MovieDetails';
export const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="movies/:movieId" element={<MovieDetails />}>
                        {/* <Route path="cast" element={<Cast />}></Route>
                        <Route path="reviews" element={<Reviews />}></Route> */}
                    </Route>
                </Route>
            </Routes>
        </>
    );
};
