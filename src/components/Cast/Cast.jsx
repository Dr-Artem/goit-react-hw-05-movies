import { Api } from 'js/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
    const { movieId } = useParams();
    const [actors, setActors] = useState([]);
    useEffect(() => {
        const variable = new Api();
        variable.getClickedMovieActors(movieId).then(data => {
            setActors(data);
        });
    }, [movieId]);

    console.log(actors);
    return (
        <ul
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 200px)',
                gap: '50px',
            }}
        >
            {actors.cast &&
                actors.cast.map(({ name, profile_path }) => {
                    return (
                        <li>
                            {profile_path ? (
                                <div>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                                        alt=""
                                        style={{
                                            maxWidth: '200px',
                                        }}
                                    />
                                    <span>{name}</span>
                                </div>
                            ) : (
                                <span></span>
                            )}
                        </li>
                    );
                })}
        </ul>
    );
};
