import config from 'config';
import { authHeader, handleResponse } from '@/_helpers';
import axios from 'axios';

export const userService = {
    getAll,
    getById,
    getAllCourses,
    getCourrseById
};

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader() };    

    return fetch(`https://ecm-ae-cloudsql-dot-aesthetic-root-333115.uc.r.appspot.com/user`, requestOptions).then(handleResponse);
}

function getById(userId) {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`https://ecm-ae-cloudsql-dot-aesthetic-root-333115.uc.r.appspot.com/user/${userId}`, requestOptions).then(handleResponse);
}

function getCourrseById(cId) {
    const requestOptions = { method: 'GET', headers: authHeader() };  
    return fetch(`https://ecm-ae-cloudsql-dot-aesthetic-root-333115.uc.r.appspot.com/courses/${cId}`, requestOptions).then(handleResponse);
}

function getAllCourses() {
    const requestOptions = { method: 'GET', headers: authHeader() };   
    return fetch(`https://ecm-ae-cloudsql-dot-aesthetic-root-333115.uc.r.appspot.com/courses/`, requestOptions).then(handleResponse);
}