import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/", // your API base URL
    timeout: 10000, // request timeout
    headers: {
        "Content-Type": "application/json",
        // any other default headers
    },
});

export default axiosInstance;
