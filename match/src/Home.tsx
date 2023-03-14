import { Button } from "@mui/material";

export const Home = () => {
    return (
        <main>
            <h1>Hello World</h1>
            <Button variant="contained" href="/mypage">
                MyPageへ
            </Button>

            <Button href="/welcome">Sign out</Button>
        </main>
    )
}
