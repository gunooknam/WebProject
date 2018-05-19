import React from 'react';
import classnames from 'classnames';

const MainSliderItem = ({ index, active, data }) => {
    const wrapperClass = classnames({
        'center-image': true,
        ['main-slider-' + index]: index,
        active: active,
    });
    return (
        <div className={wrapperClass}>
            <img src={data.backdrop_path} />
            <div className='description'>
                <div className='title'><span>{data.title}</span></div>
                <div className='info'><span className='year'>2018</span><span className='running'>{data.runtime}분</span></div>
                <div><span className='summary'>{data.description}</span></div>
            </div>
        </div>
    );
};

export default MainSliderItem;
