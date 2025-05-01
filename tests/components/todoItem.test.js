import { render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe("Pruebas en <TodoItem/>", () => {
  const todo = {
    id: 1,
    description: "Piedra del Alma",
    done: false,
  };

  const onDeleteTodo = jest.fn();
  const onToogleToodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("debe de mostrar el Todo Pendiente de completar", () => {
    render(
      <TodoItem
        todo={todo}
        onToogleTodo={onToogleToodoMock}
        onDeleteTodo={onToogleToodoMock}
      />
    );

    const liElement = screen.getByRole("listitem");

    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );
    const spanElement = screen.getByLabelText("span");

    expect(spanElement.className).toContain("align-self-center");

    screen.debug();
  });
});
