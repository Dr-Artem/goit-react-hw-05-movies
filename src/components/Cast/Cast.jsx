import { Api } from 'js/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
    const { movieId } = useParams();
    const [actors, setActors] = useState([]);

    useEffect(() => {
        const variable = new Api();
        variable.getClickedMovieActors(movieId).then(data => {
            setActors(data);
        });
    }, [movieId]);

    return (
        <ul
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '50px',
            }}
        >
            {actors.cast &&
                actors.cast.map(({ cast_id, name, profile_path }) => {
                    return profile_path ? (
                        <li key={cast_id}>
                            <div>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                                    alt=""
                                    style={{
                                        maxWidth: '200px',
                                    }}
                                />
                            </div>
                            <span>{name}</span>
                        </li>
                    ) : null;
                })}
        </ul>
    );
};

export default Cast;
