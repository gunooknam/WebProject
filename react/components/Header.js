import React from 'react';

const Header = () => {
    return (
        <nav>
            <div className='logo'><span>MOVIE HI - !</span></div>
            <ul>
                <li className='active'>홈</li>
                <li>카테고리</li>
                <li>평가하기</li>
            </ul>
        </nav>
    );
};

export default Header;
