import React from 'react';

const RowItem = ({ data }) => {
    return (
        <div className='row-item'>
            <a href={`/movieDetail?id=${data.id}`}><img src={data.small_backdrop_path} /></a>
            <span className='row-item-title'>{data.title}</span>
        </div>
    );
};

export default RowItem;
