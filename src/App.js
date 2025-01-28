import { Routes, Route } from 'react-router-dom'
import {useState} from 'react'
import Layout from './components/Layout/Layout'
import NotFound from './components/NotFound/NotFound'
import { AppContext } from './context/context';

function App() {
  const [teams, setTeams] = useState([])
  const [isTeamId, setTeamId] = useState(null)
  const [isTeamName, setTeamName] = useState('')
  const [isTeamTotal, setTeamTotal] = useState(0)
  const [employees, setEmployees] = useState([])
  const [isEmployeeId, setEmployeeId] = useState(null)
  const [selectedEmployee, setSelectedEmployee] = useState( null || {})
  const [employeesByPosition, setEmployeesByPosition] = useState( null || {})
  const [isBusFactor, setBusFactor] = useState(0)
  const [positions, setPositions] = useState([])
  const [selectedPosition, setSelectedPosition] = useState(null)
  const [isPositionId, setPositionId] = useState(null)

  return (
      <>
        <AppContext.Provider value={{
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
          employeesByPosition,
          setEmployeesByPosition,
          isBusFactor,
          setBusFactor,
          positions,
          setPositions,
          isPositionId,
          setPositionId,
          selectedPosition,
          setSelectedPosition,
        }}
        >
          <Routes>
            <Route exact path='/' index={true}
                   element={<Layout/>}>
            </Route>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </AppContext.Provider>
      </>
  );
}

export default App;
