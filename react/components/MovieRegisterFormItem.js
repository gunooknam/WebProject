import React from 'react';

const MovieRegisterFormItem = ({ label, isFile, name }) => {
    return (
        <div>
            <div className='form-item'>
                <label>{label}</label>
                {isFile ?
                    <input name={'movie_info'} required type='file' /> :
                    <textarea name={'movie_info'} required />
                }
            </div>
        </div>
    );
};

export default MovieRegisterFormItem;
