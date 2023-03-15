import { Button } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PostMatch } from './PostMatch';

export const Match = () => {
    return (
        <main>
            <h1>Hello World</h1>
            <Button variant="contained" href="/">
                Homeへ
            </Button>
                
            <Button href="/check">結果を確認</Button>

            {/* <BrowserRouter>
                <Routes>
                    <Route path="/postmatch" element={<PostMatch/>}/>
                </Routes>
            </BrowserRouter> */}
            <PostMatch/>
        </main>
    )
}
