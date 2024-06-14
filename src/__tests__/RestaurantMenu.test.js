import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import MOCK_DATA_MENU from "../Mocks/RestaurantMenuMock.json";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import RestaurentMenu from "../components/RestaurentMenu";
import appStore from "../utilis/store/appStore";
import { Provider } from "react-redux";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA_MENU);
    },
  });
});

// first render menu component
test("should  menu rendeners", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurentMenu />
      </Provider>
    )
  );
// check accordian length
  const accordianHeader = screen.getByText("Veg Starters(4)");
  fireEvent.click(accordianHeader);
  expect(screen.getAllByTestId("itemFood").length).toBe(4);
  const addBtns = screen.getAllByRole("button", { name: "Add+" });
  console.log(addBtns.length);
});
