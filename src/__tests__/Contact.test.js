import { render, screen, fireEvent } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("Contact us page Test case", () => {
  test("should render Contact component", () => {
    render(<Contact />);
    const heading = screen.getByText("Contact us");
    expect(heading).toBeInTheDocument();
  });

  test("should render Submit button", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  test("should render input field for name", () => {
    render(<Contact />);
    const inputText = screen.getByPlaceholderText("XYZ");
    expect(inputText).toBeInTheDocument();
  });

  test("should clear form fields after submission", () => {
    render(<Contact />);
    const nameInput = screen.getByPlaceholderText("XYZ");
    const emailInput = screen.getByPlaceholderText("xyz@example.com");
    const messageInput = screen.getByPlaceholderText(
      "Type your message here..."
    );

    // Form fields
    fireEvent.change(nameInput, { target: { value: "Rupali" } });
    fireEvent.change(emailInput, { target: { value: "Rupali@gmail.com" } });
    fireEvent.change(messageInput, { target: { value: "Test message" } });

    // Submit
    const submitButton = screen.getByText("Submit");
    fireEvent.click(submitButton);

    // Check after submission
    expect(nameInput).toHaveValue("");
    expect(emailInput).toHaveValue("");
    expect(messageInput).toHaveValue("");
  });
});
