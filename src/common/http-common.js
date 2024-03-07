import axios from "axios"

const APIURL = process.env.VUE_APP_APIURL

const apiClient = axios.create({
    baseURL: APIURL,
    headers: {
        "Content-type": "application/json",
    },
})

export default apiClient