import {useState, useEffect} from 'react'
import axios from 'axios'
// import './SkillsLevel.css'

function SkillsLevel() {
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
            <p className='chart__subtitle'>ШКАЛЫ УРОВНЕЙ НАВЫКОВ</p>



            {/* <button onClick={() => handleFetchClick()} className='TEST-BTN'>Get Data to Console</button> */}

            {/* <table className='chart__table'>
                <thead>
                    <tr>
                        <th className='table__header'>Сотрудник</th>
                        <th>Доля навыков с удовлетворительной оценкой</th>
                    </tr>
                </thead>

                <tbody>
                <tr>
                    <td>Ефремов Вячеслав</td>
                    <td>79%</td>
                </tr>
                {isAllSkills.length === 0 ? (
                        <tr>
                            <td colSpan="2">Загрузить...</td>
                        </tr>
                    ) : (
                        isAllSkills.map((staff, i) => (
                            <tr key={i}>
                                <td>{staff.id}</td>
                                <td>{staff.title}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table> */}

            {/* TEST FETCH BTN */}
            <button onClick={() => handleFetchClick()} className='TEST-BTN'>Get Data to Console</button>

            <ul>
                {isAllSkills.length === 0 ? (
                    <li>
                        <p>Загрузить...</p>
                    </li>
                ) : (
                    console.log(isAllSkills)
                )}
            </ul>

        </div>
    )
}

export default SkillsLevel