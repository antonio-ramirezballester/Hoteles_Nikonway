import { URL_API_EMPLOYE, HEADERS } from '../constants/http_constants.js';

export default class Employeervice {

    static getEmploye() {
        return fetch(URL_API_EMPLOYE)
            .then(res => res.json())
            .catch(error => error);
    }

    static getRoomById(id) {
        return fetch(`${URL_API_EMPLOYE}/${id}`)
            .then(res => res.json())
            .catch(error => error);
    }

    static new(params) {
        const options = {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify(params)
        };
        return fetch(URL_API_EMPLOYE, options)
            .then(response => response.json())
            .catch(error => error);
    }

    static update(params) {
        const options = {
            method: 'PUT',
            headers: HEADERS,
            body: JSON.stringify(params)
        };
        return fetch(URL_API_EMPLOYE, options)
            .then(response => response.json())
            .catch(error => error);
    }

    static delete(id) {
        const options = { method: 'DELETE' };
        return fetch(`${URL_API_EMPLOYE}/${id}`, options)
            .then(response => response.json())
            .catch(error => error);
    }

}
