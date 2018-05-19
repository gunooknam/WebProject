import React from 'react';
import Slider from 'react-slick';
import MainSliderItem from './MainSliderItem';
import FaAngleRight from 'react-icons/lib/fa/angle-right';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';

const rightAngleStyle = {
    position: 'absolute',
    top: '50%',
    right: '30px',
    zIndex: '10',
    cursor: 'pointer',
};
const leftAngleStyle = {
    position: 'absolute',
    top: '50%',
    left: '30px',
    zIndex: '10',
    cursor: 'pointer',
};

const fade = () => {
    const activeItem = document.querySelector('.center-image.active');
    const cl = activeItem.classList;
    cl.toggle('active');

    let next;
    if (activeItem.nextSibling) next = activeItem.nextSibling.classList;
    else next = document.querySelector('.center-image').classList;

    next.toggle('active');
}

const MainBackground = ({ data }) => {
        return (
        <div className='main-bg'>
            <FaAngleLeft size={60} color="gray" style={leftAngleStyle} />
            <div>
                <MainSliderItem index={1} data={data[0]} active />
                <MainSliderItem index={2} data={data[1]} />
                <MainSliderItem index={3} data={data[2]} />
            </div>
            <FaAngleRight onClick={fade} size={60} color="gray" style={rightAngleStyle} />
        </div>
    );
};

export default MainBackground;
