import { Link } from "react-router-dom"
import { Button } from "@mui/material";

export const Home = () => {
    return (
        <main>
            <h1>Hello World</h1>
            <Button variant="contained" href="/">
                Homeへ
            </Button>

            <Button href="/welcome"></Button>
        </main>
    )
}
