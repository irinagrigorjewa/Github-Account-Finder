import React from 'react';

import SearchIcon from '@mui/icons-material/Search';
import Header from "../Header/Header";
import MyTable from "../Table/Table";

import './InitialState.scss'

const InitialState = () => {
    return (<>
            <Header/>
            <div className='initial-state'>
                <SearchIcon/>
                <div>Start with searching
                    a GitHub user
                </div>
                <MyTable/>
            </div>
        </>
    );
};

export default InitialState;