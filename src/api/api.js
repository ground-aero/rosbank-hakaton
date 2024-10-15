import { DB_URL } from '../utils/constants'

class MainApi {

    _onResponse(res) {
        return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status} ${res.statusText}`)
    }

    // getUserAuth(token) {
    //     // const token = localStorage.getItem('token');
    //     return fetch(`${DB_URL.serverUrl}/posts`, {
    //         method: 'GET',
    //         headers: {
    //             'Authorization': `Bearer ${token}`,
    //             'Content-Type': 'application/json',
    //         },
    //     }).then(res => this._onResponse(res))
    // }

    // # запрашивает-->возвращает все сохранённые в моем API текущим пользователем данные
    getAllStaff() {
        return fetch(`${DB_URL}/posts`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(res => this._onResponse(res))
    }
}

const mainApi = new MainApi(DB_URL);

export default mainApi;