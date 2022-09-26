import React, { useEffect, useLayoutEffect, useState } from 'react';
import Repository from "./Repository/Repository";

import './RepositoriesList.scss'
import { Pagination } from "@mui/material";

const RepositoriesList = ({ user }:any) => {
    const [repos, setRepos]: any = useState([]);
    const [page, setPage] = useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };
    console.log(user)
    useEffect(() => {
        fetch(`https://api.github.com/users/${user.login}/repos?page=${page}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setRepos(result);
                },
                (error) => {
                    setRepos(error);
                }
            )
    }, [user.login,page]);

    return (
        <div className='repositories-list'>
            <div className='title'>Repositories ({repos.length})</div>
            {repos.map((item: any) => (
                <Repository title={item.name} subtitle={item.description} key={item.name}/>
            ))}
            <Pagination count={Math.ceil(user.public_repos/30)} page={page} onChange={handleChange}/>
        </div>
    );
};

export default RepositoriesList;