import axios from "axios";

const baseURL = "https://pdp-movies-78.onrender.com/api";

const http = axios.create({ baseURL });


export default http
