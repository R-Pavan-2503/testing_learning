import { render, screen, logRoles } from "@testing-library/react";
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

    test("rende login button", () => {
        render(<Skllis skills={skills} />)
        const loginButton = screen.getByRole('button', {
            name: 'Login'
        })

        expect(loginButton).toBeInTheDocument();
    })

    test("start learning button not render", () => {
        render(<Skllis skills={skills} />)
        const startlearningbutton = screen.queryByRole('button', {
            name: /start learning/i,
        })

        expect(startlearningbutton).not.toBeInTheDocument()
    })

    test("start learning button is render eventually", async () => {
        const view = render(<Skllis skills={skills} />)
        logRoles(view.container)
        // screen.debug()
        const startlearningbutton = await screen.findByRole('button', {
            name: "Start Learning"
        },
            {
                timeout: 2000,
            })
        // screen.debug()
        expect(startlearningbutton).toBeInTheDocument()
    })
})