import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './SearchForm.module.css'; // Импортируем стили как модуль
import { useLocalStorageState as useStorage } from '../../../hooks/useLocalStorageState';

function SearchForm() {
    const location = useLocation();

    const [isPlaceholder, setPlaceholder] = useState('Введите запрос');
    const [isSearchWord, setSearchWord] = useStorage('searchWord', ''); // key = 'searchWord', '' = initial value

    function handleInput(evt) {
        if (location.pathname === '/') {
            localStorage.setItem('searchWord', JSON.stringify(evt.target.value)); // сохраняем искомое слово в ЛС
            setSearchWord(evt.target.value);
        }
    }

    function handleSubmitSearch(evt) {
        evt.preventDefault();
        if (location.pathname === '/') {
            const searchWord = JSON.parse(localStorage.getItem('searchWord')); // достаем 'searchWord' из ЛС
            // можно добавить логику для поиска
        } else {
            setPlaceholder('Введите запрос');
        }
    }

    return (
        <form onSubmit={handleSubmitSearch} className={`${styles.searchForm}`} id="search" name="search">
            <div className={styles.searchWrap}>
                <button type="submit" className={`${styles.searchLoupeBtn} ${styles.searchLoupeImg}`}></button>
                <input
                    type="text"
                    value={isSearchWord ? isSearchWord : ''}
                    className={styles.searchInput}
                    id="search-input"
                    name="search"
                    placeholder={isPlaceholder}
                    onChange={handleInput}
                />
            </div>
        </form>
    );
}

export default SearchForm;