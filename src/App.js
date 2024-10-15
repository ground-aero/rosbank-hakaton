import { Routes, Route } from 'react-router-dom'
import {useState} from 'react'
import './App.css'
import './globals.css'
import Layout from './components/Layout/Layout'
import NotFound from './components/NotFound/NotFound'
import { TeamContext } from './context/context';

function App() {
  const [isTeamId, setTeamId] = useState(5)
  const [isEmployeeId, setEmployeeId] = useState(null)
  const [isTeamTotal, setTeamTotal] = useState(0)

  return (
    <TeamContext.Provider value={{ isEmployeeId, setEmployeeId, isTeamId, setTeamId, isTeamTotal, setTeamTotal }}>
      <Routes>
        <Route exact path='/' index={true}
               element={<Layout/>}>
          {/*<Route index element={<Users />} />*/}
          {/*<Route path="settings" element={<Settings />} />*/}
        </Route>

        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </TeamContext.Provider>
  );
}

export default App;
