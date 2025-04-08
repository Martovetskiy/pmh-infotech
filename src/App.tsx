import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ClientInfoPage from './layouts/ClientInfoPage';
import {NotFoundPage} from "./layouts/NotFoundPage/NotFoundPage.tsx";
import {NotFoundClient} from "./layouts/NotFoundClient/NotFoundClient.tsx";

const App: React.FC = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<center style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
                    ПРИВЕТ!!!
                </center>}/>
                <Route path="/user/:id" element={<ClientInfoPage/>}/>
                <Route path="/NotFoundCertificate/:id" element={<NotFoundClient/>}/>
                <Route
                    path="*"
                    element={<NotFoundPage />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
