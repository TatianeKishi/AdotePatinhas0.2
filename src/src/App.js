import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// import Container from './Components/Layout/Container/index';
import Home from './Pages/home';
import PetDonation from './Pages/petDonation';
import Profile from './Pages/profile';
import Interests from './Pages/interests';
import SupportUs from './Pages/supportUs';


function App() {
  return (
    <Router>
      <div>
        <Link src='/home'>INICIO</Link>
        <Link to='/petDonation'>DOE UM BICHINHO</Link>
        <Link to='/profile'>PERFIL</Link>
        <Link to='/interests'>INTERESSES</Link>
        <Link to='/supportUs'>NOS APOIE</Link>
      </div>
      <Routes>
        <Route exact path='/home'>
          <Home/>
        </Route>
        <Route path='/petDonation' exact element={<PetDonation/>}/>
        
        <Route exact path='/profile'>
          <Profile/>
        </Route>
        <Route exact path='/interests'>
          <Interests/>
        </Route>
        <Route exact path='/supportUs'>
          <SupportUs/>
        </Route>
      </Routes>
      {/* <p>Footer</p> */}
    </Router>
  );
}

export default App;
