import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// Axios interceptors are functions that Axios calls for every request. You can use interceptors to transform the request before Axios sends it, or transform the response before Axios returns the response to your code.

// Practice: add common headers for all requests
const myInterceptors = axios.interceptors.request.use(
    (request) => {
        console.log(request);
        // Always return request(config), otherwise it will block the request
        // Edit request(config) here
        return request;
    },
    (error) => {
        console.log(error);
        // this way you can Grobally handle error
        return Promise.reject(error);
    }
);

// how to remove an interceptor: assign interceptor to a variable and call eject later
axios.interceptors.request.eject(myInterceptors);

axios.interceptors.response.use(
    (response) => {
        console.log(response);
        // Edit response here
        return response;
    },
    (error) => {
        console.log(error);
        // this way you can Grobally handle error
        return Promise.reject(error);
    }
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
