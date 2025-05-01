import { useCounter, useFetch } from "../hooks";
import LoadingMessage from "./LoadingMessage";
import PokemonCard from "./PokemonCard";

export const MultipleCustomHooks = () => {
  const { counter, decrement, increment } = useCounter(1);
  const { data, hasError, isLoading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );

  return (
    <>
      <h1>Información de Pokemon</h1>
      <hr />
      {isLoading ? (
        <LoadingMessage />
      ) : (
        <PokemonCard id={data.id} name={data.name} sprites={data.sprites} />
      )}

      <button
        className="btn btn-primary mt-2"
        onClick={() => (counter > 1 ? decrement() : null)}
      >
        Anterior
      </button>
      <button className="btn btn-primary mt-2" onClick={() => increment()}>
        Siguiente
      </button>
    </>
  );
};
