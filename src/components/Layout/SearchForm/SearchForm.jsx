// search for charts tab
import {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
// import FilterCheckbox from './FilterCheckbox/FilterCheckbox'
import './SearchForm.css'
import { useLocalStorageState as useStorage } from '../../../hooks/useLocalStorageState';
function SearchForm() {
    const location = useLocation()

    const [isPlaceholder, setPlaceholder] = useState('Введите запрос');
    const [isSearchWord, setSearchWord] = useStorage('searchWord', ''); // key = 'searchWord', '' = initial value

    function handleInput(evt) {
        if (location.pathname === '/') {
            localStorage.setItem('searchWord', JSON.stringify(evt.target.value)) // сохраняем искомое слово в ЛС
            setSearchWord(evt.target.value)
        }
    }

    function handleSubmitSearch(evt) { // По сабмиту 'найти по: искомому слову
        evt.preventDefault();
        if (location.pathname === '/') {
            const searchWord = JSON.parse(localStorage.getItem('searchWord')) // достаем 'searchedWord' из ЛС
        } else setPlaceholder('Введите запрос')
    }

    return (
        <form onSubmit={ handleSubmitSearch } className='search search_form' id='search' name='search' >
            <div className='search__wrap'>
                <button type='submit' className='search__loupe-btn search__loupe-img'></button>
                <input type='text' value={
                    isSearchWord
                        ? isSearchWord
                        : ''
                    } className='search__input' id='search-input' name='search' placeholder={isPlaceholder}
                       onChange={handleInput}
                />

            </div>
        </form>
    );
}

export default SearchForm;