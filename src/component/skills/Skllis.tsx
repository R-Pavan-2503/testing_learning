import { SkillsProps } from "./skllls.types"

const Skllis = ({ skills }: SkillsProps) => {
    return (
        <ul>
            {skills.map((skill) => (
                <li key={skill}>{skill}</li>
            ))}
        </ul>
    )
}

export default Skllis