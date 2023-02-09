import { Api } from 'js/Api';
import { useEffect, useState, Suspense } from 'react';
import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
    const location = useLocation();
    const [inputValue, setInputValue] = useState('');
    const [movie, setMovie] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const getFromSearchParam = searchParams.get('query') ?? '';

    const handleInputChange = event => {
        const inValue = event.currentTarget.value.toLowerCase();
        setInputValue(inValue);
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (inputValue.trim() === '') {
            return;
        }
        setSearchParams({ query: inputValue });
    };

    useEffect(() => {
        if (!getFromSearchParam) {
            return;
        }
        const variable = new Api();
        variable.getMovieByName(getFromSearchParam).then(data => {
            setMovie(data);
        });
    }, [getFromSearchParam]);

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '20px',
                }}
            >
                <input type="text" onChange={handleInputChange} />
                <button type="submit">Search</button>
            </form>
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
                {movie.results &&
                    movie.results.map(({ id, original_title }) => {
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
                                    to={`${id}`}
                                    state={{ from: location }}
                                    style={{
                                        textDecoration: 'none',
                                    }}
                                >
                                    {original_title}
                                </Link>
                            </li>
                        );
                    })}
            </ul>
            <Suspense>
                <Outlet />
            </Suspense>
        </div>
    );
};

export default Movies;
