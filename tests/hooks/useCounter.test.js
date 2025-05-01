import { renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";
import { act } from "react";

describe("Pruebas en el useCounter", () => {
  test("debe de regresar el valor por defecto", () => {
    const { result } = renderHook(() => useCounter());

    //console.log(result);
    const { counter, increment, decrement, reset } = result.current;

    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test("debe de generar el counter con el valor de 100", () => {
    const { result } = renderHook(() => useCounter(100));

    const { counter } = result.current;

    expect(counter).toBe(100);
  });

  test("debe de incrementar el contador", () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;

    act(() => {
      increment();
    });

    expect(result.current.counter).toBe(101);
  });

  test("debe de decrementar el contador", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;

    act(() => {
      decrement(10);
    });

    expect(result.current.counter).toBe(90);
  });

  test("debe de hacer el reset del contador", () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment, reset } = result.current;

    act(() => {
      increment(10);
      reset();
    });

    expect(result.current.counter).toBe(100);
  });
});
