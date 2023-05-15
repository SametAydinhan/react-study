import {render,screen,fireEvent } from "@testing-library/react"
import Counter from "./index";

describe("Counter Tests", () =>{
    let increaseBtn,decreaseBtn,count;

    beforeEach(()=>{
        render(<Counter/>);
         increaseBtn = screen.getByText("Increase");
         decreaseBtn = screen.getByText("Decrease");
         count = screen.getByText("0");
    })

    test("increese btn", ()=>{
    fireEvent.click(increaseBtn);
    expect(count).toHaveTextContent("1");
});

test("decreese btn", ()=>{
    fireEvent.click(decreaseBtn);
    expect(count).toHaveTextContent("-1");
});
})


