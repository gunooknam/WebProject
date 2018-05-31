import React from 'react';
import AdminHeader from '../../components/AdminHeader';
import MovieRegisterForm from '../../components/MovieRegisterForm';

const MovieRegisterApp = (props) => {
    return (
        <div>
            <AdminHeader />
            <MovieRegisterForm />
            <script dangerouslySetInnerHTML={{
                __html: 'window.PROPS=' + JSON.stringify(props.data)
            }} />
        </div>
    )
};

export default MovieRegisterApp;
