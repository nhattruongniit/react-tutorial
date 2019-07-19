import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Hooks from "../hooks";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it("can render and update a count", () => {
  // test first render and effect
  act(() => {
    ReactDOM.render(<Hooks />, container);
  });

  const button = container.querySelector("button");
  const label = container.querySelector("p");
  expect(label.textContent).toBe("You clicked 0 times");
  expect(document.title).toBe("You clicked 0 times");

  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(label.textContent).toBe("You clicked 1 times");
  expect(document.title).toBe("You clicked 1 times");
});
