import {useState, useEffect} from 'react'
import axios from 'axios'

function SkillsPoints() {
    const [isFetchingData, setFetchingData] = useState('false')
    const [isAllSkills, setAllSkills] = useState([])

    const fetchSkills = async () => {
        setFetchingData(true)
        // const db_url = 'https://jsonplaceholder.typicode.com/';
        const db_url = 'http://127.0.0.1:8000/api/v1/dashboard/suitability_position/?team=5';
        try {
            let { data } = await axios.get(`${db_url}`, {
                headers: {
                    'Accept': 'application/json',
                },
            });
            console.log(data)
            setAllSkills(data)
            return data;

        } catch (err) {
            console.error(err)
        } finally {
            setFetchingData(false)
        }
    }

    const handleFetchClick = () => {
        fetchSkills()
    }

    return (
        <div>
            <p className='chart__subtitle'>ТАБЛИЦА С ФИО И БАЛЛАМИ</p>
        </div>
    )
}

export default SkillsPoints