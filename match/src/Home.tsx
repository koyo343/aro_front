import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <main>
            <h1>Hello World</h1>
            <Link to="/welcome">Sign Out</Link>
            <Link to="/mypage">MyPageにいく</Link>
        </main>
    )
}
