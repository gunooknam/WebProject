import React from 'react';
import AdminHeader from '../../components/AdminHeader';

const MovieRegisterApp = (props) => {
    return (
        <div>
            <AdminHeader />
            <script dangerouslySetInnerHTML={{
                __html: 'window.PROPS=' + JSON.stringify(props.data)
            }} />
        </div>
    )
};

export default MovieRegisterApp;
