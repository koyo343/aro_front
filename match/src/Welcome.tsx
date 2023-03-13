import { Link } from "react-router-dom"

export const Welcome = () => {
    return (
        <main>
            <h1>Hello Hacker</h1>
            <Link to="/login">Sign up</Link>
        </main>
    )
}
