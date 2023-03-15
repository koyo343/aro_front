import { AppBar, Toolbar, Typography } from '@mui/material'
import { Button,Stack } from "@mui/material";

const Header = () => {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography>ヘッダー</Typography>
        </Toolbar>
      </AppBar>
    );
  };


  
export const Home = () => {
    return (
        <main>
             
            <div>
                <Header />
                <Typography>ホームページ</Typography>
            </div>
            <h1>Hello World</h1>
            <Button variant="contained" href="/mypage" style={{ margin: '20px 0' }}>
                MyPageへ
            </Button>
            
            <Button variant="contained" href="/match" sx={{ width: "200px", height: "150px" }}>
                マッチングへ
            </Button>

            <Button variant="contained" href="/search" sx={{ width: "100%", height: "50px" }} style={{ margin: '10px 0' }} >
                検索
            </Button>

            <Button href="/welcome">Sign out</Button>
        </main>
    )
}
