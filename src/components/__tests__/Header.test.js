import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';
import {fireEvent, screen } from '@testing-library/react';

//1 test case
test("should render header components with login components", () => {
  const header = render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // const loginbutton = screen.getByRole("button");
  const loginbutton = screen.getByRole("button", {name : "Log IN"});
  expect(loginbutton).toBeInTheDocument();
});

//2 test case
test("should render header components with a cart items is zero", () => {
  const header = render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // const loginbutton = screen.getByRole("button");
  const loginbutton = screen.getByText("Cart - (0)");
  expect(loginbutton).toBeInTheDocument();
});

//3 test case same test as 2 test case
test("should render header components with a cart items is there or not", () => {
  const header = render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // const loginbutton = screen.getByRole("button");
  const loginbutton = screen.getByText(/Cart/);  //rejex no need to write same string
  expect(loginbutton).toBeInTheDocument();
});

//4 test case
test("should change login button to logout on click", () => {
  const header = render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginbutton = screen.getByRole("button", {name : "Log IN"});
  fireEvent.click(loginbutton);

  const logoutbutton = screen.getByRole("button", {name : "Log Out"}); 
  expect(logoutbutton).toBeInTheDocument();
});