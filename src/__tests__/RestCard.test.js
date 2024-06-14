import { render,screen } from "@testing-library/react";
import RestCard from "../components/RestCard";
import MOCK_DATA from "../Mocks/RestCardMocks.json"
import "@testing-library/jest-dom";
import { withDiscount } from "../components/RestCard";


const MOCK_DATA_WITH_DISCOUNT = {
    ...MOCK_DATA,
    discountName: "30% OFF",
    discountValue: "UPTO ₹75"
};

// check card have data 
it("should restcard passing props",() =>{
    render(<RestCard restData={MOCK_DATA} />)
    const name = screen.getByText("Domino's Pizza")
    expect(name).toBeInTheDocument();

})

//check the label component render
it("should label the component load", () => {
    const { discountName, discountValue, ...restDataWithoutDiscount } = MOCK_DATA_WITH_DISCOUNT;
    const RestCardWithDiscount = withDiscount(RestCard);
    render(<RestCardWithDiscount restData={restDataWithoutDiscount} discountName={discountName} discountValue={discountValue} />);
    const discountLabel = screen.getByText("30% OFF: UPTO ₹75");
    expect(discountLabel).toBeInTheDocument();
});

