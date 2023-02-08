import { Api } from 'js/Api';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
export const Home = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        const variable = new Api();
        variable.getTrendingMovies().then(data => {
            console.log(data.results);
            setFilms(data.results);
        });
    }, []);

    return (
        <ul>
            {films.map(({ title, id }) => {
                return (
                    <Link
                        to={`movies`}
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
    );
};
