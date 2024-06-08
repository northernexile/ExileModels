
import {CssBaseline} from '@mui/material';
import ExileAppBar from './components/ExileAppBar';
import Home from './pages/Home';



const MyApp = () => {
  return(<>
    <CssBaseline />
    <ExileAppBar />
    <Home />
  </>)
}

export default MyApp