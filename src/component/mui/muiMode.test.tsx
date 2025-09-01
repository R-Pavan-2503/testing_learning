import { render, screen } from "../../test-utils";
import { MuiMode } from "./MuiMode";
import { AppProviders } from "../../providers/AppProviders";


describe("Mui MOde", () => {

    test("Redner text correclty", () => {
        render(<MuiMode />, {
        })

        const headingElement = screen.getByRole("heading")
        expect(headingElement).toHaveTextContent(/dark mode/i)

    })
})