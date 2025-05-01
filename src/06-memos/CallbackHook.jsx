import { useCallback, useEffect, useState } from "react";
import ShowIncrement from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(0);

  /* useCallback es un hook que memoriza una funcion, y solo la vuelve a crear si alguna de las dependencias cambia.*/
  const incrementFather = useCallback((value) => {
    setCounter((c) => c + value);
  }, []);

  useEffect(() => {
    // incrementFather();
  }, [incrementFather]); // Si no se pone el segundo argumento, se ejecuta cada vez que se renderiza el componente.

  return (
    <>
      <h1>useCallback Hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={incrementFather} />
    </>
  );
};
