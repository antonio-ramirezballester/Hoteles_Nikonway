import { URL_API_HOTELS, HEADERS } from '../constants/http_constants.js';

export default class HotelService {

    static getHotels() {
        return fetch(URL_API_HOTELS)
            .then(res => res.json())
            .catch(error => error);
    }

    static getHotelById(id) {
        return fetch(`${URL_API_HOTELS}/${id}`)
            .then(res => res.json())
            .catch(error => error);
    }

    static new(params) {
        const options = {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify(params)
        };
        return fetch(URL_API_HOTELS, options)
            .then(response => response.json())
            .catch(error => error);
    }

    static update(params) {
        const options = {
            method: 'PUT',
            headers: HEADERS,
            body: JSON.stringify(params)
        };
        return fetch(URL_API_HOTELS, options)
            .then(response => response.json())
            .catch(error => error);
    }

    static delete(id) {
        const options = { method: 'DELETE' };
        return fetch(`${URL_API_HOTELS}/${id}`, options)
            .then(response => response.json())
            .catch(error => error);
    }

}
