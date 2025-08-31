import { useEffect, useState } from "react"
import { SkillsProps } from "./skllls.types"

const Skllis = ({ skills }: SkillsProps) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoggedIn(true)
        }, 1001)
    }, [])
    return (
        <>
            <ul>
                {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>

            {
                isLoggedIn ?
                    (
                        <button>Start Learning</button>
                    )
                    :
                    (
                        <button onClick={() => setIsLoggedIn(true)}> Login</button >
                    )
            }
        </>
    )

}

export default Skllis