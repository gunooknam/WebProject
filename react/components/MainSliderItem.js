import React from 'react';
import classnames from 'classnames';

const MainSliderItem = ({ index, active }) => {
    const wrapperClass = classnames({
        'center-image': true,
        ['main-slider-' + index]: index,
        active: active,
    });

    console.log(index);
    return (
        <div className={wrapperClass}>
            <img src={index === 1 ? 'https://image.tmdb.org/t/p/original/AlFqBwJnokrp9zWTXOUv7uhkaeq.jpg' : index === 2 ? 'https://image.tmdb.org/t/p/original/q7fXcrDPJcf6t3rzutaNwTzuKP1.jpg' : 'https://image.tmdb.org/t/p/original/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg'} />
            <div className='description'>
                <div className='title'><span>{index === 1 ? '블랙 팬서' : index === 2 ? '레디 플레이어 원' : '어벤져스'}</span></div>
                <div className='info'><span className='year'>2018</span><span className='running'>2시간 12분</span></div>
                <div><span className='summary'>좋은 대사들, 메시지를 마냥 교훈적으로 풀어내지 않는 영리함, 보는 이를 빨아들이는 흥미로운 이야기까지. 모든 진정성 있는 성장영화가 그렇듯, 참 뿌듯하다.</span></div>
            </div>
        </div>
    );
};

export default MainSliderItem;
