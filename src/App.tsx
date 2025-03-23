import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ClientInfoPage from './layouts/ClientInfoPage';
import Header from "./components/Header/Header.tsx";

const App: React.FC = () => {

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/user/:uuid" element={<ClientInfoPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
