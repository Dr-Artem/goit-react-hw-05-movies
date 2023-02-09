import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
export const Layout = () => {
    return (
        <section>
            <header
                style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    padding: '20px',
                }}
            >
                <Link to="">Home</Link>
                <Link to="movies">Movie</Link>
            </header>
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </section>
    );
};
