import React from 'react';
import RowItem from './RowItem';
import FaAngleRight from 'react-icons/lib/fa/angle-right';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';

const rightAngleStyle = {
    'z-index': '10',
    cursor: 'pointer',
    top: '50%',
    right: '0',
    transform: 'translateY(-30px)',
    position: 'absolute',
};
const leftAngleStyle = {
    'z-index': '10',
    cursor: 'pointer',
    top: '50%',
    left: '0',
    transform: 'translateY(-30px)',
    position: 'absolute',
};

let count = 0;
const slideRight = (e) => {
    const children = e.currentTarget.previousSibling.childNodes[0];
    const nextPosition = (parseInt(children.style.left || 0) - 100);
    const boundPosition = (children.childNodes.length-6)*-16.66667;

    children.style.left = (boundPosition > nextPosition) ?
        (boundPosition + '%') : (nextPosition + '%');
}

const slideLeft = (e) => {
    const children = e.currentTarget.nextSibling.childNodes[0];
    const nextPosition = (parseInt(children.style.left || 0) + 100);
    const boundPosition = 0;

    children.style.left = (boundPosition < nextPosition) ?
        (boundPosition + '%') : (nextPosition + '%');
}

const Row = () => {
    return (
        <div class='row'>
            <div class='row-title'><span>이번주 인기 영화</span></div>
            <div class='row-container'>
            <FaAngleLeft onClick={(e) => slideLeft(e)} size={60} color="gray" style={leftAngleStyle} />
                <div>
                <div>
                    <RowItem />
                    <RowItem />
                    <RowItem />
                    <RowItem />
                    <RowItem />
                    <RowItem />
                    <RowItem />
                    <RowItem />
                    <RowItem />
                    <RowItem />
                    <RowItem />
                    <RowItem />
                    <RowItem />
                    <RowItem />
                    <RowItem />
                    <RowItem />
                </div>
                </div>
            <FaAngleRight onClick={(e) => slideRight(e)} size={60} color="gray" style={rightAngleStyle} />
            </div>
        </div>
    );
};

export default Row;
