import axios from "axios";


export const getSchoolListRequest = async (updateList) => {
    const api = "client"
    try {
        const res = await axios.get(`http://localhost:3000/api/lista`)
        if (res.data) {
            updateList(res.data)
        } else {
            console.log(res.data.error)
        }
    } catch (error) {
        console.log(error)
    }
}

export const updateEverySchool = async (updatedList) => {
    try {
        const res = await axios.put(`http://localhost:3000/api/lista` , updatedList)
        if (res.data.success) {
            window.location.reload()
        } else {
            console.log(res.data.error)
        }
    } catch (error) {
        console.log(error)
    }
}