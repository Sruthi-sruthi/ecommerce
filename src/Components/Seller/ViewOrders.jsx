import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import { orderStatus, sellerOrders } from '../../services/api'
import SellerNavbar from './SellerNavbar'
import './ViewOrders.css'


function ViewOrders() {
  const { loginuser } = useContext(UserContext)
  const [allproducts, setallproducts] = useState()
  console.log(allproducts);
  const navigate = useNavigate();



  async function sellerViewOrders() {
    let response = await sellerOrders(loginuser._id)
    setallproducts(response.orders)
    console.log(response);
  }
  useEffect(() => {
    sellerViewOrders()
  }, [])


  async function productstatus(id) {
    let data = await orderStatus(id)
    console.log(data);
    if (data.success) {
      alert(data.message)
      navigate("/seller/");
    }
    else {
      alert("could not shipped product")
    }

  }
  return (
    <>
    <SellerNavbar/>
      <h2 className='orders'>view orders</h2>
      <table className='order-table' >
        <tr >
          <th>username</th>
          <th>address</th>
          <th>phone</th>
          <th>product name</th>
          <th>mrp</th>
          <th>payment method</th>
          <th>status</th>
          <th>operation</th>
        </tr>

        {
          allproducts && allproducts.map((p) => {
            return (
              <tr>
                <td>{p.username}</td>
                <td>{p.address}</td>
                <td>{p.phone}</td>
                <td>{p.title}</td>
                <td>{p.mrp}</td>
                <td>{p.paymentmethod}</td>
                <td>{p.orderstatus}</td>
                <button className='shipped-btn' onClick={()=>{productstatus(p._id)}}>shipped</button>

              </tr>
            )

          })
        }
      </table>
    </>
  )
}

export default ViewOrders
