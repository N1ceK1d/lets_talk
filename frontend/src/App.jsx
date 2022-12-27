import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';

import Profile from './components/Content/ContentComponents/Profile/Profile.jsx';
import Messages from './components/Content/ContentComponents/Messages/Messages';
import NotFound from './components/Content/ContentComponents/NotFound/NotFound';

import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <section>
          <Menu/>
          <div className='Content'>
            <Routes>
              <Route path='/profile' element={<Profile/>}/>
              <Route path='/messages' element={<Messages/>}/>
            </Routes>
          </div>
        </section>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
