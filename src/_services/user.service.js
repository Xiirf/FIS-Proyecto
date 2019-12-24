import { authHeader } from '../_helpers/auth-header';
import { handleResponse } from '../_helpers/handle-response';

export const userService = {
    getAll
};

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`http://localhost:4000/users`, requestOptions).then(handleResponse);
}