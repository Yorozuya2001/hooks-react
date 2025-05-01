import Proptypes from "prop-types";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos = [], onDeleteTodo, onToogleTodo }) => {
  return (
    <ul className="list-group ">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="list-group-item d-flex justify-content-between"
        >
          <TodoItem
            todo={todo}
            onDeleteTodo={onDeleteTodo}
            onToogleTodo={onToogleTodo}
          />
        </li>
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: Proptypes.array.isRequired,
  onDeleteTodo: Proptypes.func.isRequired,
  onToogleTodo: Proptypes.func.isRequired,
};
