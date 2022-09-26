import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Content from "./components/Content/Content";
import InitialState from "./components/InitialState/InitialState";
import EmptyState from "./components/EmptyState/EmptyState";

import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<InitialState/>}/>
                <Route path="/profile" element={<Content/>}/>
                <Route path="/empty-state" element={<EmptyState/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
