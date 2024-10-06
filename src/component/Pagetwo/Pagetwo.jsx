import React, { useContext } from "react";
import { MyContextUser } from "../MyContext/MyContext";

function Pagetwo() {
  const user = useContext(MyContextUser);

  return (
    <div>
      Pagetwo
      <div>user: {user}</div>
    </div>
  );
}

export default Pagetwo;
