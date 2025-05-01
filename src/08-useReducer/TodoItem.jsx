import Proptypes from "prop-types";

export const TodoItem = ({ todo, onDeleteTodo, onToogleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        aria-label="span"
        className={`align-self-center ${
          todo.done ? "text-decoration-line-through" : ""
        }`}
        onClick={() => onToogleTodo(todo.id)}
      >
        {todo.description}
      </span>
      <button onClick={() => onDeleteTodo(todo.id)} className="btn btn-danger">
        Borrar
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: Proptypes.object.isRequired,
  onDeleteTodo: Proptypes.func.isRequired,
  onToogleTodo: Proptypes.func.isRequired,
};
