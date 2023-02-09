import { Api } from 'js/Api';
import { useEffect, useState, Suspense } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movieDetail, setMovieDetail] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const variable = new Api();
        variable.getClickedMovie(movieId).then(setMovieDetail);
    }, [movieId]);

    return (
        <div>
            <Link to={location.state.from}>Go Back</Link>
            <div>
                {movieDetail && (
                    <div
                        style={{
                            display: 'flex',
                            gap: '20px',
                            padding: '20px',
                        }}
                    >
                        <div>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
                                alt=""
                                style={{
                                    maxWidth: '300px',
                                }}
                            />
                        </div>
                        <div>
                            <h2>{movieDetail.original_title}</h2>
                            <span>Imbd: {movieDetail.vote_average}/10</span>
                            <p
                                style={{
                                    fontWeight: 700,
                                    fontSize: '20px',
                                }}
                            >
                                Overview
                            </p>
                            <span>{movieDetail.overview}</span>
                            <p
                                style={{
                                    fontWeight: 700,
                                    fontSize: '20px',
                                }}
                            >
                                Genres
                            </p>
                            <ul>
                                {movieDetail.genres.map(({ name }) => {
                                    return <li key={name}>{name}</li>;
                                })}
                            </ul>
                        </div>
                    </div>
                )}
                <div>
                    <p>Additional information</p>
                    <ul>
                        <li>
                            <Link
                                to={'credits'}
                                state={{ from: location.state.from }}
                            >
                                cast
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'reviews'}
                                state={{ from: location.state.from }}
                            >
                                reviews
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Suspense>
                <Outlet />
            </Suspense>
        </div>
    );
};

export default MovieDetails;
