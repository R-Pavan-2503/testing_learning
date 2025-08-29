import { render, screen } from "@testing-library/react"
import Greet from "./greet"


describe('Greet', () => {

    test("Greet Renders correclty", () => {
        render(<Greet />)
        const testElement = screen.getByText(/Hello/i)
        expect(testElement).toBeInTheDocument()
    })

    test("Greet render correct with the name", () => {
        render(<Greet name="Pavan" />)
        const testElement = screen.getByText(/hello pavan/i);
        expect(testElement).toBeInTheDocument();
    })
})