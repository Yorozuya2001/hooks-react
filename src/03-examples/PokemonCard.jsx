import PropTypes from "prop-types";
import { useLayoutEffect, useRef, useState } from "react";

const PokemonCard = ({ id, name, sprites = [] }) => {
  const h2Ref = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { width, height } = h2Ref.current.getBoundingClientRect();

    setBoxSize({ width, height });
  }, [name]);

  return (
    <section style={{ height: 200, display: "flex", flexDirection: "row" }}>
      <h2 ref={h2Ref} className="text-capitalize">
        #{id} - {name}
      </h2>
      {Object.entries(sprites).map(([key, value]) => {
        if (key === "other") return null;
        if (key === "versions") return null;
        if (value === null) return null;

        return (
          <img
            key={key}
            src={value}
            alt={name}
            className="img-thumbnail"
            style={{ width: 100, height: 100 }}
          />
        );
      })}
      <pre>{JSON.stringify(boxSize)}</pre>
    </section>
  );
};

export default PokemonCard;

/* PropTypes */

PokemonCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  sprites: PropTypes.object.isRequired,
};
