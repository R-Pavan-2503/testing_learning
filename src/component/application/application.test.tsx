import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe('Application', () => {

    test("render Correlty", () => {
        render(< Application />)

        const pageHeading = screen.getByRole("heading", {
            name: "Job Application Form"
        })
        expect(pageHeading).toBeInTheDocument()

        const sectionheading = screen.getByRole("heading", {
            name: "Section 1"
        })
        expect(sectionheading).toBeInTheDocument()

        const nameElement = screen.getByRole('textbox', {
            name: "Name"
        })
        expect(nameElement).toBeInTheDocument()

        const paragraphElement = screen.getByText("All filed are mandatory")
        expect(paragraphElement).toBeInTheDocument();

        const bioElement = screen.getByRole('textbox', {
            name: "bio"
        })
        expect(bioElement).toBeInTheDocument()

        const jobsSelectElement = screen.getByRole("combobox")
        expect(jobsSelectElement).toBeInTheDocument()


        const termsElement = screen.getByRole('checkbox')
        expect(termsElement).toBeInTheDocument()

        const submitButtonElement = screen.getByRole('button')
        expect(submitButtonElement).toBeInTheDocument()
    })
}) 