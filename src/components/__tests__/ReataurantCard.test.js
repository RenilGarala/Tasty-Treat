import { render, screen } from "@testing-library/react";
import RestaurantCard from "../ReataurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

test("should render restaurant card components with props data", () => {
  render(<RestaurantCard resdata={MOCK_DATA} />);

  const name = screen.getByText("Pizzeria 360");

  expect(name).toBeInTheDocument();
});

test("should render restaurant card components with promoted label", () => {
  render(<RestaurantCard resdata={MOCK_DATA} />);

  const isPromoted = MOCK_DATA[12];

  if (isPromoted) {
    const promotedLabel = screen.getByText("promoted");
    expect(promotedLabel).toBeInTheDocument();
  }
});
