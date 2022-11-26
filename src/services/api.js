import axios from 'axios';

const baseurl = "http://localhost:5000/user"

export async function signupUser(user) {
    try {
        let response = await axios.post(baseurl + '/signup', user)
        return response.data
    }
    catch (error) {
        console.log(error);
        return {
            error: "Error"
        }
    }
}


export async function loginUser(user) {
    try {
        let response = await axios.post(baseurl + '/login', user)
        return response.data
    }
    catch (error) {
        console.log(error);
        return {
            error: "Error"
        }
    }
}