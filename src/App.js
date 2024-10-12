import { Routes, Route } from 'react-router-dom'
import './App.css'
import './globals.css'
import Layout from './components/Layout/Layout'
import NotFound from './components/NotFound/NotFound'

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' index={true}
            element={<Layout/>}>
            {/*<Route index element={<Users />} />*/}
            {/*<Route path="settings" element={<Settings />} />*/}
        </Route>

        <Route path='*' element={<NotFound/>}/>
    </Routes>
    </>
  );
}

export default App;
