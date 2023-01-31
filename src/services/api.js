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

export async function FetchSellerProduct(seller_id) {
    try {
        let response = await axios.get(sellerbaseurl +'/getsellerproducts/'+seller_id )
        return response.data
    }
    catch (error) {
        console.log(error);
        return {
            error: "Error"
        }
    }
}

export async function getSingleProduct(_id) {
    try {
        let response = await axios.get(sellerbaseurl +'/getsingleproduct/'+_id )
        return response.data
    }
    catch (error) {
        console.log(error);
        return {
            error: "Error"
        }
    }
}


export async function getDeleteProduct(_id) {
    try {
        let response = await axios.delete(sellerbaseurl +'/deletesellerproducts/'+_id )
        return response.data
    }
    catch (error) {
        console.log(error);
        return {
            error: "Error"
        }
    }
}


export async function getUpdateProduct(_id,obj) {
    try {
        let response = await axios.patch(sellerbaseurl +'/updatesellerproducts/'+_id,obj)
        return response.data
    }
    catch (error) {
        console.log(error);
        return {
            error: "Error"
        }
    }
}


export async function getProductByCategory(category){
    try {
        let response = await axios.get(baseurl +'/getproductcategory/'+category)
        return response.data
    }
    catch (error) {
        console.log(error);
        return {
            error: "Error"
        }
    }
}


export async function buyproduct(obj) {
    try {
        let response = await axios.post(baseurl + '/buynow',obj,)
        return response.data
    }
    catch (error) {
        console.log(error);
        return {
            error: "Error"
        }
    }
}

export async function userOrders(id){
    try {
        let response=await axios.get(baseurl+'/userorder/'+id)
        return response.data
        
    } catch (error) {
        console.log(error);
        return {
            error: "Error"
        }
    }
}


export async function sellerOrders(id){
    try {
        let response=await axios.get(sellerbaseurl+'/vieworders/'+id)
        return response.data
        
    } catch (error) {
        console.log(error);
        return {
            error: "Error"
        }
    }
}



export async function orderStatus(id){
    try {
        let response=await axios.patch(sellerbaseurl+'/statusorder/'+id)
        return response.data
        
    } catch (error) {
        console.log(error);
        return {
            error: "Error"
        }
    }
}


export async function productcart(userid,productid){
    try {
        let response=await axios.get(baseurl+'/addtocart/'+userid+"/"+productid)
        return response.data
        
    } catch (error) {
        console.log(error);
        return {
            error: "Error"
        }
    }
}