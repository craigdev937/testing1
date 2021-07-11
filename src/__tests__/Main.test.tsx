/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import { Main } from "../components/Main";

describe("<Main />", () => {
    test(`Renders "learn react" link`, () => {
        render(<Main />);
        const linkElement = screen.getByText(/learn react/i);
        expect(linkElement).toBeInTheDocument();
    })
});




