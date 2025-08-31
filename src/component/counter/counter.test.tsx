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
    })