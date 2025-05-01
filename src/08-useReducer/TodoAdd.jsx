import { useForm } from "../hooks/useForm";

const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onFormSubmit = (event) => {
    event.preventDefault(); // ⚠️ Esto es clave
    if (description.trim().length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };

    // dispatch({ type: "[TODO] Add Todo", payload: newTodo });

    onResetForm(); // Limpiar el formulario después de agregar el todo

    onNewTodo(newTodo); // Llamar a la función para agregar el nuevo todo
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="¿Qué hay que hacer?"
        className="form-control"
        name="description"
        value={description}
        onChange={onInputChange}
      />
      <button type="submit" className="btn btn-outline-primary mt-1 w-100">
        Agregar
      </button>
    </form>
  );
};

export default TodoAdd;
