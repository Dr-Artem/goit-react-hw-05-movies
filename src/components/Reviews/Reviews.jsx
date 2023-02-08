import { Api } from 'js/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        const variable = new Api();
        variable.getClickedMovieReviews(movieId).then(data => {
            setReviews(data);
        });
    }, [movieId]);

    console.log(reviews);
    return (
        <ul>
            {reviews.results &&
                reviews.results.map(({ author, content }) => {
                    return (
                        <li>
                            <p>Author: {author}</p>
                            <span>{content}</span>
                        </li>
                    );
                })}
        </ul>
    );
};
