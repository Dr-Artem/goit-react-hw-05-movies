import { Api } from 'js/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        const variable = new Api();
        variable.getClickedMovieReviews(movieId).then(data => {
            setReviews(data);
        });
    }, [movieId]);

    return (
        <ul>
            {reviews.results &&
                reviews.results.map(({ id, author, content }) => {
                    return (
                        <li key={id}>
                            <p>Author: {author}</p>
                            <span>{content}</span>
                        </li>
                    );
                })}
        </ul>
    );
};

export default Reviews;
