import axios from 'axios';
const token = localStorage.getItem("auth")

export const  myAccountsCustomer = async(customerid)=>{

    try {
        let response = await axios.get(`http://localhost:8080/bank/account/${customerid}`,{
            headers: {
                Authorization: `Bearer ${token}`}
        })
        return response
    } catch (error) {
        throw error
    }
}

export const  myAccountsPagewiseCustomer = async(customerid,currpage,pagesize)=>{

    try {
        let response = await axios.get(`http://localhost:8080/bank/account/${customerid}/${currpage}/${pagesize}`,{
            headers: {
                Authorization: `Bearer ${token}`}
        })
        return response
    } catch (error) {
        throw error
    }
}

