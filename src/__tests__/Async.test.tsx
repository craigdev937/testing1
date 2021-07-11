/**
 * @jest-environment jsdom
 */

 import React from "react";
 import { render, screen } from "@testing-library/react";
 import { Async } from "../components/Async";
 
 describe("<Async />", () => {
     test(`Renders "posts" if request succeeds`, async () => {
         window.fetch = jest.fn().mockResolvedValueOnce({
             json: async () => [{id: "p1", title: "First post"}],
         })
         render(<Async />);
         const linkItemElement = 
            await screen.findAllByRole("listitem");
         expect(linkItemElement).not.toHaveLength(0);
     })
 });
 
 
 
 
 