import { Link, Outlet } from 'react-router-dom';
export const Layout = () => {
    return (
        <section>
            <header>
                <Link to="">Home</Link>
                <Link to="movies">Movie</Link>
            </header>
            <Outlet />
        </section>
    );
};
