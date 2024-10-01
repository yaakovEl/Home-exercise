import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../Home/Home";
import PageOne from '../PageOne/PageOne';
import Pagetwo from "../Pagetwo/Pagetwo";

function Routing() {

    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/PageOne" element={<PageOne />} />
                    <Route path="/Pagetwo" element={<Pagetwo />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Routing;