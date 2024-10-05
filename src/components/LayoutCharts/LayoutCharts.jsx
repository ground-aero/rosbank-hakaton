import './LayoutCharts.css';
import Filter from '../../images/filter.png'

function LayoutCharts() {

    return (
        <section id='charts' className='charts'>

            <div className="btns">
                <button className="btn btn__data">*</button>
                <button className="btn btn__team">Команда</button>
                <img src={Filter} className="charts_filter" alt={'filter'}/>
            </div>

            <p>/* Далее будут отображаться окна вывода информации, далее поле поиска */</p>

        </section>
    );
}

export default LayoutCharts;