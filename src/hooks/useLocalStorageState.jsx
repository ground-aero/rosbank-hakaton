// хук для сохранения значений между перезагрузками
import { useState, useEffect } from 'react';

function isDefined(storedValue) {
    return storedValue !== null && storedValue !== 'undefined';
}

export function useLocalStorageState(key, initialValue) { // key = String
    const [state, setState] = useState(() => { // отвечает за: восстановление состояния
        const storedValue = localStorage.getItem(key)

        return isDefined(storedValue) ? JSON.parse(storedValue) : initialValue
    })

    useEffect(() => { // дублирование состояния
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])

    return [state, setState]
}