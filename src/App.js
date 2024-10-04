import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './globals.css';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';

function App() {
  return (

    <>
      <Routes>
        <Route exact path='/' index={true}
            element={
                <>
                    {/* <Header loggedIn={loggedIn} type='land'/> */}
                    <Nav/>
                    <Main type='charts'/>
                </>
            }
        />
        <Route path='/docs'
            element={
                <>
                    <Nav/>
                    <Main type='docs'/>
                </>
            }
        />
        
        {/* <Route path='*' element={<NotFound/>}/> */}

    </Routes>
    </>

  );
}

export default App;
