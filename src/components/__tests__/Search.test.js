import { fireEvent, render, screen } from '@testing-library/react';
import { act } from "react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
// import "@testing-library/jest-dom";


global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("should render the body components with screen", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body/>
      </BrowserRouter>
    )
  );

  const cardbeforesearch = screen.getAllByTestId("rescard");
  expect(cardbeforesearch.length).toBe(16 );

  const searchbtn = screen.getByRole("button",{name: "Search"});
  const searchinput = screen.getByTestId("searchinput");

  fireEvent.change(searchinput, {target:{value: "Theobroma"}});

  fireEvent.click(searchbtn);

  const cards = screen.getAllByTestId("rescard");

  expect(cards.length).toBe(1);
});
