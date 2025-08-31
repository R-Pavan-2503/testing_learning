import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";


describe("COunter", () => {

    test("Counter render properley", () => {
        render(<Counter />)

        const countElement = screen.getByRole("heading")
        expect(countElement).toBeInTheDocument()

        const IncrementButton = screen.getByRole('button', {
            name: "Increment"
        })

        expect(IncrementButton).toBeInTheDocument()
    })

    test("render the count of 0", () => {
        render(<Counter />)
        const countElement = screen.getByRole("heading")
        expect(countElement).toHaveTextContent('0')

    })

    test("redner a count of 1 after cloking", async () => {

        const user = userEvent.setup()
        render(<Counter />)

        const IncrementButton = screen.getByRole("button", {
            name: "Increment"
        })
        await user.click(IncrementButton)

        const countElement = screen.getByRole("heading")
        expect(countElement).toHaveTextContent("1")
    })

    test("redner a count of 2 after cloking", async () => {

        const user = userEvent.setup()
        render(<Counter />)

        const IncrementButton = screen.getByRole("button", {
            name: "Increment"
        })
        await user.click(IncrementButton)
        await user.click(IncrementButton)

        const countElement = screen.getByRole("heading")
        expect(countElement).toHaveTextContent("2")
    })

    test("redner a count of 10 after tying", async () => {

        const user = userEvent.setup()
        render(<Counter />)

        const amountButton = screen.getByRole("spinbutton")
        await user.type(amountButton, '10')

        expect(amountButton).toHaveValue(10)

        const setButton = screen.getByRole("button", {
            name: "Set"
        })
        await user.click(setButton)
        const countButton = screen.getByRole("heading")
        expect(countButton).toHaveTextContent('10')
    })

    test("elements are focused in the right order", async () => {

        const user = userEvent.setup()
        render(<Counter />)

        const amountButton = screen.getByRole("spinbutton")
        const setButton = screen.getByRole("button", {
            name: "Set"
        })
        const IncrementButton = screen.getByRole("button", {
            name: "Increment"
        })
        await user.tab()
        expect(IncrementButton).toHaveFocus()
        await user.tab()
        expect(amountButton).toHaveFocus()
        await user.tab()
        expect(setButton).toHaveFocus()
    })
})