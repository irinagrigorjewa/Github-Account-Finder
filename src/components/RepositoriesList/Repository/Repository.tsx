import React from 'react';

import './Repository.scss'

const Repository = ({
                        title = '',
                        subtitle = '',
                    }) => {
    return (
        <div className='repo-item'>
            <a target="_blank" href={`https://github.com/mojombo/${title}`}>
                <div className='repo-title'>{title}</div>
            </a>
            <div className='subtitle'>{subtitle}</div>
        </div>
    );
};

export default Repository;