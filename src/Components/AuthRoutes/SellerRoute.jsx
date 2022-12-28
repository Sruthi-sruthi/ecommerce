import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { Navigate } from 'react-router-dom'



function SellerRoute({children}) {
const{usertype}=useContext(UserContext)

  return (
   <>
   {
    usertype=="seller" ? children : <Navigate to="/seller/login"/>
   }

   </>
  )
}

export default SellerRoute