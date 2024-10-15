import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styles from './StaffJobFit.module.css';
import { TeamContext } from "../../../../../context/context";

function StaffJobFit() {
    const [isFetchingData, setFetchingData] = useState(false);
    const [isAllStaff, setAllStaff] = useState([]);
    const { isEmployeeId, setEmployeeId, isTeamId, isTeamTotal, setTeamTotal } = useContext(TeamContext);

    useEffect(() => {
        fetchAllStaff();
    }, [isTeamId]);

    const fetchAllStaff = async () => {
        setFetchingData(true);
        const db_url = `http://127.0.0.1:8000/api/v1/dashboard/suitability_position/?team=${isTeamId}`;
        try {
            let { data } = await axios.get(`${db_url}`, {
                headers: {
                    'Accept': 'application/json',
                },
            });
            console.log(data, data.length);
            setAllStaff(data);
            setTeamTotal(data.length);
        } catch (err) {
            console.error(err);
        } finally {
            setFetchingData(false);
        }
    };

    const handleRowClick = (clickedEmployeeId) => {
        setEmployeeId(clickedEmployeeId === isEmployeeId ? null : clickedEmployeeId);
    };

    return (
        <>
            <p className={styles.tableSubtitle}>
                Сотрудник: {isEmployeeId || '_'} • Уровень владения навыками
            </p>

            <table className={styles.table}>
                <thead className={styles.tableHeaders}>
                <tr className={styles.tableRow}>
                    <th className={`${styles.tableHeader} ${styles.tableHeaderLeft}`}>Сотрудник</th>
                    <th className={`${styles.tableHeader} ${styles.tableHeaderRight}`}>
                        Доля навыков с удовлетворительной оценкой
                    </th>
                </tr>
                </thead>

                <tbody>
                {isAllStaff.length === 0 ? (
                    <tr className={styles.tableRow}>
                        <td colSpan="2" className={styles.tableColLeft}>В меню выберите Команду</td>
                    </tr>
                ) : (
                    isAllStaff.map((employee, i) => (
                        <tr
                            key={i}
                            onClick={() => handleRowClick(employee.employee_id)}
                            className={`${styles.tableRow} ${isEmployeeId === employee.employee_id ? styles.tableRowSelected : ''}`}
                            style={{ cursor: 'pointer' }}
                        >
                            <td className={styles.tableColLeft}>{employee.employee}</td>
                            <td className={styles.tableColRight}>{`${employee.percentage}%`}</td>
                        </tr>
                    ))
                )}
                </tbody>
            </table>
        </>
    );
}

export default StaffJobFit;