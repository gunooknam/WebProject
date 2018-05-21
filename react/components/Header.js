import React from 'react';

const Header = () => {
    return (
        <nav>
            <div className='logo'><span>MOVIE HI - !</span></div>
            <ul>
                <li className='active'>홈</li>
                <li>카테고리</li>
                <li>평가하기</li>
                <li><a href="/auth/login">로그인</a></li>
            </ul>
        </nav>
    );
};

export default Header;
