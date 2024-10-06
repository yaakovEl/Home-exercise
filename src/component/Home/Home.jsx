import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MyContextUser } from "../MyContext/MyContext";
import Pagetwo from "../Pagetwo/Pagetwo";

function Home() {
  const [user, setUser] = useState("Sara");

  return (
    <div>
      <div>
        Home
        <Link to="/">Home</Link>
        <br />
        <Link to="/PageOne">PageOne</Link>
        <br />
        <Link to="/Pagetwo">Pagetwo</Link>
        <br />
      </div>
      <div>
        <MyContextUser.Provider value={user}>
          <Pagetwo />
        </MyContextUser.Provider>
      </div>
    </div>
  );
}

export default Home;
