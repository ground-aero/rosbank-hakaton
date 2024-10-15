import {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import './StaffJobFit.css'
import {TeamContext} from "../../../../../context/context";

function StaffJobFit() {
    const [isFetchingData, setFetchingData] = useState('false')
    const [isAllStaff, setAllStaff] = useState([])
    const {isEmployeeId, setEmployeeId, isTeamId, isTeamTotal, setTeamTotal} = useContext(TeamContext)

    useEffect(() => {
        fetchAllStaff()
    }, [isTeamId])
    const fetchAllStaff = async () => {
        setFetchingData(true)
        // const db_url = 'https://jsonplaceholder.typicode.com';
        const db_url = `http://127.0.0.1:8000/api/v1/dashboard/suitability_position/?team=${isTeamId}`;
        try {
            let { data } = await axios.get(`${db_url}`, {
                headers: {
                    'Accept': 'application/json',
                },
            });
            console.log(data, data.length)
            setAllStaff(data)
            setTeamTotal(data.length)
            return data;

        } catch (err) {
            console.error(err)
        } finally {
            setFetchingData(false)
        }
    }

    const handleRowClick = (clickedEmployeeId) => {
        setEmployeeId(clickedEmployeeId === isEmployeeId ? null : clickedEmployeeId);
        // console.log(clickedEmployeeId)
    }

    return (
        <>
            <p className='table__subtitle'>Сотрудник: {isEmployeeId || '_'}_ • Уровень владения навыками</p>

            <table className='table'>
                <thead className='table__headers'>
                    <tr className='table__row'>
                        <th className='table__header table__header_left'>Сотрудник</th>
                        <th className='table__header table__header_right'>Доля навыков с удовлетворительной оценкой</th>
                    </tr>
                </thead>

                <tbody>

                {isAllStaff.length === 0 ? (
                    <tr className='table__row'>
                        <td colSpan="2" className='table__col_left'>В меню выберите Команду</td>
                    </tr>
                ) : (
                    isAllStaff.map((employee, i) => (
                            <tr key={i}
                                onClick={() => handleRowClick(employee.employee_id)}
                                className={`table__row ${isEmployeeId === employee.employee_id ? 'selected' : ''}`}
                                style={{cursor: 'pointer'}}
                            >
                                <td className='table__col_left'>{employee.employee}</td>
                                <td className='table__col_right'>{`${employee.percentage}%`}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>

            {/*{isTeamId && <SkillsLevel employeeId={isSelectedEmployeeId} isTeamId={isTeamId} />}*/}
        </>
    )
}

export default StaffJobFit