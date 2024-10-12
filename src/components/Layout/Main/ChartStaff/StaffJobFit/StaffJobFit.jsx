import {useState, useEffect} from 'react'
import axios from 'axios'
import './StaffJobFit.css'
import BarChart from "../../../../Charts/BarChart";

function StaffJobFit() {
    const [isFetchingData, setFetchingData] = useState('false')
    const [isAllStaff, setAllStaff] = useState([])

    const fetchAllStaff = async () => {
        setFetchingData(true)
        // const db_url = 'https://jsonplaceholder.typicode.com';
        const db_url = 'http://127.0.0.1:8000/api/v1/dashboard/suitability_position/?team=5';
        try {
            let { data } = await axios.get(`${db_url}`, {
                headers: {
                    'Accept': 'application/json',
                },
            });
            console.log(data)
            setAllStaff(data)
            return data;

        } catch (err) {
            console.error(err)
        } finally {
            setFetchingData(false)
        }
    }

    const handleFetchClick = () => {
        fetchAllStaff()
    }

    return (
        <>
            <p className='table__subtitle'>Сотрудник: ${}_ • Уровень владения навыками</p>

            <table className='table'>
                <thead className='table__headers'>
                    <tr className='table__row'>
                        <th className='table__header table__header_left'>Сотрудник</th>
                        <th className='table__header table__header_right'>Доля навыков с удовлетворительной оценкой</th>
                    </tr>
                </thead>

                <tbody>
                {/*<tr className='table__row'>*/}
                {/*    <td className='table__col_left'>Ефремов Вячеслав</td>*/}
                {/*    <td className='table__col_right'>79%</td>*/}
                {/*</tr>*/}

                {isAllStaff.length === 0 ? (
                    <tr className='table__row'>
                        <td colSpan="2" className='table__col_left'>Выберите в меню Команду</td>
                        {/*<td className='table__col_right'></td>*/}
                    </tr>
                ) : (
                    isAllStaff.map((employee, i) => (
                            <tr key={i} className='table__row'>
                                <td className='table__col_left'>{employee.employee}</td>
                                <td className='table__col_right'>{`${employee.percentage}%`}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>



            {/*<BarChart/>*/}

            {/* TEST FETCH BTN */}
            <button onClick={() => handleFetchClick()} className='TEST-BTN'>Get Data to Console</button>

            <ul>
                {isAllStaff.length === 0 ? (
                <li>
                    <p>Выберите команду в меню</p>
                </li>
                ) : (
                    console.log(isAllStaff)
                )}
            </ul>

        </>
    )
}

export default StaffJobFit