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
            <Button variant="contained" href="/mypage">
                MyPageへ
            </Button>
            <Stack spacing={2}></Stack>
            <Button variant="contained" href="/search" {...{width:"20px",height:"auto"}}>
                検索
            </Button>

            <Button href="/welcome">Sign out</Button>
        </main>
    )
}
