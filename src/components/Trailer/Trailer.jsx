import { Api } from 'js/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';

const Trailer = () => {
    const { movieId } = useParams();
    const [trailers, setTrailers] = useState([]);

    useEffect(() => {
        if (!movieId) {
            return;
        }
        const variable = new Api();
        variable.getClickedMovieTrailer(movieId).then(data => {
            setTrailers(data);
        });
    }, [movieId]);

    const onReady = event => {
        event.target.pauseVideo();
    };
    const opts = {
        height: '220',
        width: '400',
        playerVars: {
            autoplay: 0,
        },
    };

    if (trailers.results) {
        console.log(trailers.results);
    }

    return (
        <ul
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '50px',
            }}
        >
            {trailers.results &&
                trailers.results.map(film => {
                    return (
                        <li key={film.id}>
                            <YouTube
                                videoId={film.key}
                                opts={opts}
                                onReady={onReady}
                            />
                        </li>
                    );
                })}
        </ul>
    );
};

export default Trailer;
