import { DB_URL } from '../utils/constants'

class MainApi {

    _onResponse(res) {
        return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status} ${res.statusText}`)
    }
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