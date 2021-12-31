import axios from "axios";

const instance = axios.create({
    baseURL : 'http://localhost:5001/app-76b89/us-central1/api'
});

export default instance;