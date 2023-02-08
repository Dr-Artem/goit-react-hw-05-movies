import { Api } from 'js/Api';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

export const MovieDetails = () => {
    const { movieId } = useParams();
    const [movieDetail, setMovieDetail] = useState(null);

    useEffect(() => {
        const variable = new Api();
        variable.getClickedMovie(movieId).then(setMovieDetail);
    }, [movieId]);

    return (
        <div>
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
                            <Link to={'credits'}>cast</Link>
                        </li>
                        <li>
                            <Link to={'reviews'}>reviews</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Outlet />
        </div>
    );
};
