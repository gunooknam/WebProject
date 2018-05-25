import React from 'react';
import MdArrowDropDown from 'react-icons/lib/md/arrow-drop-down';

const handleArrowClick = (e) => {
    e.currentTarget.nextSibling.classList.toggle('active');
};

const OptionSelector = ({ data, handleListClick }) => {
    return (
        <div className='selector'>
            <div className='selector-title-wrapper' onClick={(e) => handleArrowClick(e)}>
                <div className='selector-title' data-id={data[0].id}>{data[0].genre}</div>
                <MdArrowDropDown size={40} color='white'/>
            </div>
            <div className='selector-item-list' onClick={(e) => handleListClick(e)}>
                {data.map((item) => {
                    return <div data-id={item.id} key={item.id}>{item.genre}</div>;
                })}
            </div>
        </div>
    );
};

export default OptionSelector;
