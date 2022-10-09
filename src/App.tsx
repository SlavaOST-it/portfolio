import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {HashRouter} from "react-router-dom";
import {Main} from "./components/presentation/Main";
import {Footer} from "./components/footer/Footer";


function App() {
    return (
        <div className="App">
            <HashRouter>
                <Header/>
                <Main/>
                <Footer/>
            </HashRouter>
        </div>
    );
}

export default App;
