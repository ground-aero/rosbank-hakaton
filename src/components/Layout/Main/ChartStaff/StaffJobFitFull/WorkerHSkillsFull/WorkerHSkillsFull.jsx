import {useState} from 'react'
import axios from 'axios'
import './StaffJobFitFull.module.css'
import ChartRightBars from "../../../../../Charts/ChartRightBars";

function WorkerSkillsFull() {
    const [isFetchingData, setFetchingData] = useState('false')
    const [isAllStaff, setAllStaff] = useState([])

    const fetchAllStaff = async () => {
        setFetchingData(true)
        const db_url = 'https://jsonplaceholder.typicode.com';
        // const db_url = 'http://127.0.0.1:8000/api/v1/dashboard/suitability_position/?team=5';
        try {
            let { data } = await axios.get(`${db_url}/posts`, {
                headers: {
                    'Accept': 'application/json',
                },
            });
            setAllStaff(data)
            return data;

        } catch (err) {
            console.error(err)
        } finally {
            setFetchingData(false)
        }
    }

    return (
        <div>
            <p className='chart__subtitle'>НА ВСЮ СТРАНИЦУ ТАБЛИЦА: 1. Сотрудник, 2. Доля навыков...</p>

            <ChartRightBars/>

        </div>
    )
}

export default WorkerSkillsFull