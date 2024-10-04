import LayoutCharts from '../LayoutCharts/LayoutCharts';
import LayoutDocs from '../LayoutDocs/LayoutDocs';
import './Main.css';

function Main({ type }) {

    return (
        <>
            {type==='charts' ? (
                <main id='main' className='main'>
                <LayoutCharts/>
                {/* <LayoutMainHome layout={layout} title={title} text={text} /> */}
                </main>
            ) : ''
            }
            {(type==='docs') ? (
                <main id='main' className='main'>
                <LayoutDocs/>
                </main>
            ) : ''
            }
        </>
    );
}

export default Main;