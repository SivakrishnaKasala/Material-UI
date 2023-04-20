
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import './App.css';
import SideBar from './components/Sidebar';
import Feed from './components/Feed';
import RightBar from './components/Rightbar';
import Navbar from './components/Navbar';

function App() {
  return (
    <Box>
      <Navbar/>
      <Stack>
        <SideBar />
        <Feed />
        <RightBar/>
      </Stack>
      
    </Box>
  );
}

export default App;
