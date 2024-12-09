import { Routes, Route } from 'react-router-dom'
import {useState} from 'react'
import Layout from './components/Layout/Layout'
import NotFound from './components/NotFound/NotFound'
import { TeamContext } from './context/context';

function App() {
  const [teams, setTeams] = useState([])
  const [isTeamId, setTeamId] = useState(null)
  const [isTeamName, setTeamName] = useState('')
  const [isTeamTotal, setTeamTotal] = useState(0)
  const [employees, setEmployees] = useState([])
  const [isEmployeeId, setEmployeeId] = useState(null)
  const [selectedEmployee, setSelectedEmployee] = useState( {})
  const [isBusFactor, setBusFactor] = useState(0)

  return (
      <>
        <TeamContext.Provider value={{
          teams,
          setTeams,
          isTeamId,
          setTeamId,
          isTeamName,
          setTeamName,
          isTeamTotal,
          setTeamTotal,
          employees,
          setEmployees,
          isEmployeeId,
          setEmployeeId,
          selectedEmployee,
          setSelectedEmployee,
          isBusFactor,
          setBusFactor
        }}
        >
          <Routes>
            <Route exact path='/' index={true}
                   element={<Layout/>}>
            </Route>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </TeamContext.Provider>
      </>
  );
}

export default App;
