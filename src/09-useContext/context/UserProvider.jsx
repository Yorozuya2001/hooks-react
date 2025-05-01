import { useState } from "react";
import { UserContext } from "./UserContext";
import Proptypes from "prop-types";

export const UserProvider = ({ children }) => {
  /*   const user = {
    id: 123,
    name: "Fernando",
    email: "",
  }; */

  const [user, setUser] = useState({});

  return (
    /*     <UserContext.Provider value={{ hola: "Mundo", user }}> */
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: Proptypes.node.isRequired,
};
