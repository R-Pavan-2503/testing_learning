import { render, screen } from "@testing-library/react"
import Greet from "./greet"


describe('Greet', () => {

    test("Greet Renders correclty", () => {
        render(<Greet />)
        const testElement = screen.getByText("Hello")
        expect(testElement).toBeInTheDocument()
    })


    test('Greet renders with a name', () => {
        render(<Greet name='Vishwas' />)
        const testElement = screen.getByText('Hello Vishwas')
        expect(testElement).toBeInTheDocument()
    })
})