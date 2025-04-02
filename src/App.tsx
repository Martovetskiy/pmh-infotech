import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ClientInfoPage from './layouts/ClientInfoPage';
import {NotFoundPage} from "./layouts/NotFoundPage/NotFoundPage.tsx";

const App: React.FC = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<center style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
                    ПРИВЕТ!!!
                </center>}/>
                <Route path="/user/:id" element={<ClientInfoPage/>}/>
                <Route path="/404" element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
