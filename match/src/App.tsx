import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { Login } from './Login';
import { Welcome } from './Welcome';
import { Road1 } from './Road1';
import { MyPage } from './MyPage';
import { Setting } from './Setting';
import { Search } from './Search';
import { Check } from './Check';
import { Match } from './Match';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/welcome" element={<Welcome/>}/>
        <Route path="/road1" element={<Road1/>}/>
        <Route path="/mypage" element={<MyPage/>}/>
        <Route path="/setting" element={<Setting/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/check" element={<Check/>}/>
        <Route path="/match" element={<Match/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
