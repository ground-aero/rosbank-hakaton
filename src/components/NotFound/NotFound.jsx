// component - NotFound page - 404
import '../../globals.css';
import './NotFound.css';
import {Link, useNavigate} from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();

    return (
        <main className='main'>
            <section className='not-found not-found_page'>
                <div className='not-found_info__wrap'>
                    <h1 className='not-found_page__err'>404</h1>
                    <p className='not-found_page__text'>Такая страница не найдена</p>
                </div>
                <Link onClick={() => navigate(-1)} className='link-back'>Назад</Link>
            </section>
        </main>
    );
}

export default NotFound;
