/**
 * @jest-environment jsdom
 */

 import React from "react";
 import userEvent from "@testing-library/user-event";
 import { render, screen } from "@testing-library/react";
 import { Greeting } from "../components/Greeting";
 
 describe("<Greeting />", () => {
     test(`Renders "Hello World" as text.`, () => {
         render(<Greeting />);
         const helloworldElement = screen.getByText("Hello World!");
         expect(helloworldElement).toBeInTheDocument();
     });
     
     test(`Renders "Changed!" if the button was clicked`, () => {
         // Arrange
        render(<Greeting />);
        // Act
        const buttonElement = screen.getByRole("button");
        userEvent.click(buttonElement);
        // Assert
        const outputElement = screen.getByText("Changed!");
        expect(outputElement).toBeInTheDocument();
     });
 });
 
 
 
 
 