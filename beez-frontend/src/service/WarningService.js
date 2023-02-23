import http from "./axiosContext"


const getAll = async () => {
    return http.get("/warning/last/first")
    }

export default {getAll}