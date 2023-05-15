import {render,screen,fireEvent } from "@testing-library/react"
import ToDo from "./index";
import userEvent from "@testing-library/user-event";

describe("ToDo testleri", () =>{
    let button,input;
    beforeEach(() =>{
        render(<ToDo/>);
        button = screen.getByText("Add");
        input = screen.getByLabelText("Text");
    });

    test('Varsayılan Olarak verilen 3 nesene render edilmeli', () => {
        const items = screen.getAllByText(/Item/i);
        expect(items.length).toEqual(3);
    })

    test('Input ve button dökümnada bulunmalı', () =>{
        expect(button).toBeInTheDocument();
        expect(input).toBeInTheDocument();
    })

    test('Inputa String girilip buyona basılınca listeye eklenmeli', () => {
        //inputu doldur
        const name = 'samet'
        userEvent.type(input,name);
        //buttona tıkla
        fireEvent.click(button);

        //assertion
        expect(screen.getByText(name)).toBeInTheDocument();
    })

})