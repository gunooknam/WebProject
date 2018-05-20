import React from 'react';

const RowItem = ({ data }) => {
    return (
        <div className='row-item'>
            <img src={data.small_backdrop_path} />
            <span className='row-item-title'>{data.title}</span>
        </div>
    );
};

export default RowItem;
