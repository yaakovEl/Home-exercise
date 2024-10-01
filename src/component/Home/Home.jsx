import React from "react";
import { Link } from "react-router-dom";

function Home() {

    return (
        <div>
            Home
            <Link to="/">Home</Link><br />
            <Link to="PageOne">PageOne</Link><br />
            <Link to="Pagetwo">PageOne</Link><br />
        </div>
    )
}

export default Home;