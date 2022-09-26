import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import RepositoriesList from "../RepositoriesList/RepositoriesList";
import Avatar from "../Avatar/Avatar";
import Header from "../Header/Header";

import './Content.scss'

const Content = () => {
    const [user, setUser]: any = useState({});
    const { state }: any = useLocation();
    useEffect(() => {
        fetch(`https://api.github.com/users/${state.login}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setUser(result);
                },

                (error) => {
                    setUser(error);
                }
            )
    }, [state.login])

    console.log(user)
    return (
        <>
            <Header/>
            <div className='content'>
                <Avatar user={user}/>
                <RepositoriesList user={user}/>
            </div>
        </>
    );
};

export default Content;