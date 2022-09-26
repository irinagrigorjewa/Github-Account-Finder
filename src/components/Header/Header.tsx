import React, { useState } from 'react';
import { useNavigate } from "react-router";

import GitHubIcon from '@mui/icons-material/GitHub';
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import './Header.scss'

const Header = () => {
    const [searchField, setSearchField] = useState('');
    const [, setUser] : any = useState({});
    const [error, setError]  = useState(false);
    const navigate = useNavigate();


    const handlePress = (e: any) => {
        const key = e.keyCode || e.which;
        if (key === 13) {
            console.log('enter press')
            fetch(`https://api.github.com/users/${searchField}`)
                .then(res => res.json()
                )
                .then(
                    (result) => {
                        // throw new Error('something went wrong');
                        // if(error){
                        //     navigate('/not')
                        setUser(result);
                        navigate('/profile',{ state:  result })
                    },

                    // (error) => {
                    //     setUser(error);
                    //     navigate('/')
                    // }
                )
            //     .catch(
            //         (error) => {
            //     // setUser(error);
            //     navigate('/empty-state')
            // })

        }
    }
    const handleChange = (e: any) => {
        setSearchField(e.target.value);
    };
    return (
        <header className='header'>
            <GitHubIcon className='github-icon'/>
            <div className='search'>
                <div className='search-icon-wrapper'>
                    <SearchIcon/>
                </div>
                <InputBase
                    placeholder="Search…"
                    // inputProps={{ 'aria-label': 'search' }}
                    onChange={handleChange}
                    onKeyPress={handlePress}
                    value={searchField}
                />

            </div>
        </header>
    );
};

export default Header;