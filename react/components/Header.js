import React from 'react';

const Header = ({ activeIndex, user }) => {
    const links = [
        {
            title: '홈',
            link: '/',
        },
        {
            title: '카테고리',
            link: '/category',
        },
        {
            title: '평가하기',
            link: '/evaluate',
        },
    ];
    
    const mouseOver = () => {
        document.querySelector('.user span').classList.add('active');
    }
    const mouseOut = () => {
        document.querySelector('.user span').classList.remove('active');
    }

    return (
        <nav>
            <span>
                <div className='logo'><span>MOVIE HI - !</span></div>
                <ul>
                    {links.map((item, index) => {
                        return <li key={index} className={index === activeIndex ? 'active' : ''}><a href={item.link}>{item.title}</a></li>
                    })}
                </ul>
            </span>
            <span className='user' onMouseOver={() => mouseOver()} onMouseOut={() => mouseOut()}>
                <li><a href={user ? '/users' : '/auth/login'}>{user ? user.name: '로그인'}</a></li>
                <span>
                    <li>s</li>
                    <li>s</li>
                    <li>s</li>
                    <li>s</li>
                </span>
            </span>
        </nav>
    );
};

export default Header;
