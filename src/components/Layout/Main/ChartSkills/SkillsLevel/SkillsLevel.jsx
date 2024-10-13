import {useState, useEffect} from 'react'
import axios from 'axios'
// import './SkillsLevel.css'
import ChartLeftBars from '../../../../Charts/ChartLeftBars'

function SkillsLevel() {
    const [isFetchingData, setFetchingData] = useState('false')
    const [isAllSkills, setAllSkills] = useState([])

    const fetchSkills = async () => {
        setFetchingData(true)
        // const db_url = 'https://jsonplaceholder.typicode.com/';
        const db_url = 'http://127.0.0.1:8000/api/v1/dashboard/suitability_position';
        try {
            let { data } = await axios.get(`${db_url}/31/skills`, {
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

    useEffect(() => {
        fetchSkills()
    }, [])

    const handleFetchClick = () => {
        fetchSkills()
    }

    return (
        <div>
            <p className='chart__subtitle'>ШКАЛЫ УРОВНЕЙ НАВЫКОВ</p>

            {isFetchingData ? (
                <p>Loading...</p>
            ) : (
                <ChartLeftBars data={isAllSkills}/>
            )}

            {/* TEST FETCH BTN */}
            {/*<button onClick={() => handleFetchClick()} className='TEST-BTN'>Get Data to Console</button>*/}
            <button onClick={fetchSkills} className='TEST-BTN'>Обновить данные</button>
        </div>
    )
}

export default SkillsLevel