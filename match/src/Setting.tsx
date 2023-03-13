import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <main>
            <h1>Hello </h1>
            <Link to="/mypage">MyPageにいく</Link>
        </main>
    )
}
