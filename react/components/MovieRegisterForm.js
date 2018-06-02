import React from 'react';
import MovieRegisterFormItem from './MovieRegisterFormItem';

const MovieRegisterForm = () => {
    return (
        <div className='admin-wrapper'>
            <form action='/admin/movie' method='post' encType='multipart/form-data'>
                <MovieRegisterFormItem label={'영화 제목'} />
                <MovieRegisterFormItem label={'감독'} />
                <MovieRegisterFormItem label={'설명'} />
                <MovieRegisterFormItem label={'개봉일'} />
                <MovieRegisterFormItem label={'러닝 타임'} />
                <MovieRegisterFormItem label={'가격'} />
                <MovieRegisterFormItem label={'출연 배우'} />
                <MovieRegisterFormItem label={'포스터'} isFile />
                <MovieRegisterFormItem label={'배경 이미지(small)'} isFile />
                <MovieRegisterFormItem label={'배경 이미지(big)'} isFile />
                <button type='submit' className='movie-register'>등록하기</button>
            </form>
        </div>
    )
};

export default MovieRegisterForm;
