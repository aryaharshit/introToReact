import './App.css';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Navbar/sidebar';
import { Grid } from '@mui/material';
import GOTO from './pages/goto';
import Sellproducts from './pages/sellproducts';
import Validation from './pages/validation';
import CustomerHelp from './pages/help';
import ResponsiveAppBar from './components/Navbar/menubar';

function App() {
  return (
    <>
    {/* <ResponsiveAppBar /> */}
    
    <Grid container>  
    <Sidebar /> 
      <Grid item xs = {8}>
        <Routes>
        <Route>
          <Route path = "/go-to" element = {<GOTO/>}/>
          <Route path = "/sell-products" element = {<Sellproducts/>}/>
          <Route path = "/" element = {<Validation/>}/>
          <Route path = "/help" element = {<CustomerHelp/>}/>
        </Route>
        </Routes>
      </Grid>
    </Grid>
    </>
  );
}
export default App;
