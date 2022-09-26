import React from 'react';

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Header from "../Header/Header";

import './EmptyState.scss'

const EmptyState = () => {
    return (
        <div>
            <Header/>
            <div className='empty-state'>
                <PersonOutlineIcon/>
                <div>User not found</div>
            </div>
        </div>
    );
};

export default EmptyState;