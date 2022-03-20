import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './Home.js';
import CeremonyApp from './CeremonyApp.js'

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="wedding" element={<App />} />
            <Route path="ceremony" element={<CeremonyApp />} />
        </Routes>
    </BrowserRouter>, 
    rootElement
);
