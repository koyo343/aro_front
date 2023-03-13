import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <main>
            <h1>Hello World</h1>
            <Link to="/login">ログインページへ</Link>
        </main>
    )
}
