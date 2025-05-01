import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "strider2",
    email: "fernando@google.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    //console.log("Hey");
  }, []);

  useEffect(() => {
    //console.log("formState cambió");
  }, [formState]);

  useEffect(() => {
    //console.log("email cambió");
  }, [email]);

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="fernando@google.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      {username === "strider2" && <Message />}
    </>
  );
};
