import { Link } from "react-router-dom"
import { Button } from "@mui/material";

export const Home = () => {
    return (
        <main>
            <h1>Hello World</h1>
            <Button variant="contained" href="/mypage">
                MyPageへ
            </Button>

            <Button variant="contained" href="/search">
                検索
            </Button>

            <Button href="/welcome">Sign out</Button>
        </main>
    )
}
