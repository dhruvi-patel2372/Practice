import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Nav from "./Nav";
import Body from "./Body";


const App = () => {
    return (
        <>
        <Nav/>
        <Body></Body>
        </>
    )
}

export default App;