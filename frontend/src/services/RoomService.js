import { URL_API_ROOMS, HEADERS } from '../constants/http_constants.js';

export default class RoomService {

    static getRooms() {
        return fetch(URL_API_ROOMS)
            .then(res => res.json())
            .catch(error => error);
    }

    static getRoomById(id) {
        return fetch(`${URL_API_ROOMS}/${id}`)
            .then(res => res.json())
            .catch(error => error);
    }

    static new(params) {
        const options = {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify(params)
        };
        return fetch(URL_API_ROOMS, options)
            .then(response => response.json())
            .catch(error => error);
    }

    static update(params) {
        const options = {
            method: 'PUT',
            headers: HEADERS,
            body: JSON.stringify(params)
        };
        return fetch(URL_API_ROOMS, options)
            .then(response => response.json())
            .catch(error => error);
    }

    static delete(id) {
        const options = { method: 'DELETE' };
        return fetch(`${URL_API_ROOMS}/${id}`, options)
            .then(response => response.json())
            .catch(error => error);
    }

}
