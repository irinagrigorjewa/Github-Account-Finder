import React from 'react';

import { Pagination } from "@mui/material";

const Footer = ({ data = {} }) => {
    const [page, setPage] = React.useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };
    return (
        <div>
            <Pagination count={10} page={page} onChange={handleChange}/>
        </div>
    );
};

export default Footer;