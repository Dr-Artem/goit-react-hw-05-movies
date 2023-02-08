import { Api } from 'js/Api';
import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
export const Home = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        const variable = new Api();
        variable.getTrendingMovies().then(data => {
            setFilms(data.results);
        });
    }, []);

    return (
        <div>
            <ul>
                {films.map(({ title, id }) => {
                    return (
                        <Link
                            to={`movies/${id}`}
                            key={id}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            {title}
                        </Link>
                    );
                })}
            </ul>
            <Outlet />
        </div>
    );
};
