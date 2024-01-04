import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Nav from "./Nav";
import Body from "./Body";
import Footer from "./Footer";


const App = () => {
    return (
        <>
        <Nav/>
        <Body></Body>
        <Footer/>
        </>
    )
}

export default App;