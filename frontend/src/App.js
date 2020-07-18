import React from 'react';
import AppToolbar from "./components/UI/Toolbar/AppToolbar";
import Routes from "./Routes";
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <>
            <ToastContainer autoClose={3000}/>
            <AppToolbar/>
            <Routes/>
        </>
    );
}

export default App;
