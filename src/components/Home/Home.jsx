import { Api } from 'js/Api';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
export const Home = () => {
    const location = useLocation();
    const [films, setFilms] = useState([]);

    useEffect(() => {
        const variable = new Api();
        variable.getTrendingMovies().then(data => {
            setFilms(data.results);
        });
    }, []);

    return (
        <div>
            <ul
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    maxWidth: '1280px',
                    margin: '0 auto',
                    gap: '50px',
                    padding: '20px',
                }}
            >
                {films.map(({ title, id }) => {
                    return (
                        <li
                            key={id}
                            style={{
                                textAlign: 'center',
                                listStyle: 'none',
                                fontWeight: 600,
                            }}
                        >
                            <Link
                                to={`movies/${id}`}
                                state={{ from: location }}
                                style={{
                                    textDecoration: 'none',
                                }}
                            >
                                {title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <Outlet />
        </div>
    );
};
