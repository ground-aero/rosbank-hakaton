import FilterIcon from "../../../../images/filter.png";
import styles from './Filter.module.css'

function Filter() {

    return (
        <div className={styles.filterWrap}>
            <img src={FilterIcon} className={styles.chartsFilter} alt={'filter'}/>
        </div>
    );
}

export default Filter;