import { render, screen } from "@testing-library/react"
import Greet from "./greet"


describe('Greet', () => {

    test("Greet Renders correclty", () => {
        render(<Greet />)
        const testElement = screen.getByText(/Hello/i)
        expect(testElement).toBeInTheDocument()
    })
})