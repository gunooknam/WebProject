import React from 'react';
import RowItem from './RowItem';
import FaAngleRight from 'react-icons/lib/fa/angle-right';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';

const rightAngleStyle = {
    zIndex: '10',
    cursor: 'pointer',
    top: '50%',
    right: '0',
    transform: 'translateY(-30px)',
    position: 'absolute',
};
const leftAngleStyle = {
    zIndex: '10',
    cursor: 'pointer',
    top: '50%',
    left: '0',
    transform: 'translateY(-30px)',
    position: 'absolute',
};

const slideRight = (e) => {
    const children = e.currentTarget.previousSibling.firstChild;
    console.log(children.firstChild.style.width);
    const nextPosition = (parseInt(children.style.left || 0) - 100);
    const boundPosition = (children.childNodes.length - 6) * -16.66667;

    children.style.left = (boundPosition > nextPosition) ?
        (boundPosition + '%') : (nextPosition + '%');
}

const slideLeft = (e) => {
    const children = e.currentTarget.nextSibling.firstChild;
    const nextPosition = (parseInt(children.style.left || 0) + 100);
    const boundPosition = 0;

    children.style.left = (boundPosition < nextPosition) ?
        (boundPosition + '%') : (nextPosition + '%');
}

const Row = ({ data }) => {
    return (
        <div className='row'>
            <div className='row-title'><span>이번주 인기 영화</span></div>
            <div className='row-container'>
                <FaAngleLeft onClick={(e) => slideLeft(e)} size={60} color="gray" style={leftAngleStyle} />
                <div>
                    <div>
                        {data.map((item, index) => {
                            return <RowItem key={data[index].id} data={data[index]}/>;
                        })}
                    </div>
                </div>
                <FaAngleRight onClick={(e) => slideRight(e)} size={60} color="gray" style={rightAngleStyle} />
            </div>
        </div>
    );
};

export default Row;
