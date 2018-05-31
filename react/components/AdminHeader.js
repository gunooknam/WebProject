import React from 'react';

const AdminHeader = ({ title }) => {
    return (
        <nav>
            <span className='logo'>{title}</span>
        </nav>
    );
};

export default AdminHeader;
