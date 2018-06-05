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
            title: '찜목록',
            link: '/users/wishlist',
        }
    ];

    const mouseOver = () => {
        if(user) document.querySelector('.user span').classList.add('active');
    }
    const mouseOut = () => {
        document.querySelector('.user span').classList.remove('active');
    }

    return (
        <nav>
            <span>
                <div className='logo'><img src='/images/logo.png' /></div>
                <ul>
                    {links.map((item, index) => {
                        return <li key={index} className={index === activeIndex ? 'active' : ''}><a href={item.link}>{item.title}</a></li>
                    })}
                </ul>
            </span>
            <span className='user' onMouseOver={() => mouseOver()} onMouseOut={() => mouseOut()}>
                <li><a href={user ? '/users' : '/auth/login'}>{user ? user.name: '로그인'}</a></li>
                {user && user.nickname !== 'admin'
                ? (<span>
                        <li><a href='/users/wishlist'>찜 목록</a></li>
                        <li><a href='/users'>마이페이지</a></li>
                        <li><a href='/help'>고객센터</a></li>
                        <li><a href='/auth/logout'>로그아웃</a></li>
                    </span>)
                : (<span>
                    <li><a href='/admin'>관리</a></li>
                </span>)
                }
            </span>
        </nav>
    );
};

export default Header;
