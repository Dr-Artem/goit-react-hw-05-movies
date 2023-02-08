import { Outlet } from 'react-router-dom';
export const Movies = () => {
    // useEffect(() => {
    //     const variable = new Api();
    //     variable.getTrendingMovies().then(data => {
    //         console.log(data.results);
    //         setFilms(data.results);
    //     });
    // }, []);
    return (
        <div>
            <Outlet />
        </div>
    );
};
