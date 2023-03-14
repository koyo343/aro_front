import { Link } from "react-router-dom"
import { Button } from "@mui/material";

export const MyPage = () => {
    return (
        <main>
            <h1>Hello World</h1>
            <Link to="/">Homeに戻る</Link>
            <Button variant="contained" href="/setting">
                設定する
            </Button>
        </main>
    )
}
