import axios from 'axios';

const baseurl = "http://localhost:5000/user"
const sellerbaseurl="http://localhost:5000/seller"

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

export async function signupSeller(seller) {
    try {
        let response = await axios.post(sellerbaseurl + '/signup', seller)
        return response.data
    }
    catch (error) {
        console.log(error);
        return {
            error: "Error"
        }
    }
}

export async function loginSeller(seller) {
    try {
        let response = await axios.post(sellerbaseurl + '/login', seller)
        return response.data
    }
    catch (error) {
        console.log(error);
        return {
            error: "Error"
        }
    }
}

export async function sellerAddProduct(seller) {
    try {
        let response = await axios.post(sellerbaseurl + '/addproduct', seller)
        return response.data
    }
    catch (error) {
        console.log(error);
        return {
            error: "Error"
        }
    }
}

