import {render,screen,fireEvent } from "@testing-library/react"
import Counter from "./index";

it("increese btn", ()=>{
    render(<Counter/>);
    const count = screen.getByText("0");
    const increaseBtn = screen.getByText("Increase");
    fireEvent.click(increaseBtn);
    expect(count).toHaveTextContent("1");
});