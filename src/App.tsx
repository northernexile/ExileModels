
import {Box, CssBaseline} from '@mui/material';
import ExileAppBar from './components/ExileAppBar';
import Home from './pages/Home';
import ExileAppFooter from './components/ExileAppFooter';



const MyApp = () => {
  return(<Box sx={{
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  }}>
    <CssBaseline />
    <ExileAppBar />
    <Home />
    <ExileAppFooter />
  </Box>)
}

export default MyApp