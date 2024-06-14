import Body from "../components/Body";
import {  render, screen } from "@testing-library/react";
import MOCK_DATA from "../Mocks/BodyMockData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("should body component render", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeTesting = screen.getAllByTestId("restCardID");
  expect(cardsBeforeTesting.length).toBe(9);
});
