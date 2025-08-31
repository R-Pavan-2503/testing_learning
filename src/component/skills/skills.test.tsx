import { render, screen } from "@testing-library/react";
import Skllis from "./Skllis";

describe("skills", () => {

    const skills = ['HTML', ' CSS', 'JavasScript']

    test("rendering the correlty", () => {
        render(<Skllis skills={skills} />)
        const listElement = screen.getByRole("list")
        expect(listElement).toBeInTheDocument()
    })

    test('reder an list of skills', () => {
        render(<Skllis skills={skills} />)
        const listItemElement = screen.getAllByRole('listitem')
        expect(listItemElement).toHaveLength(skills.length)
    })
})