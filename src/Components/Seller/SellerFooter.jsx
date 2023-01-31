import React from 'react'
import './SellerFooter.css'
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';


function SellerFooter() {
  return (
    <>
    <div className="main-footer">
    <div className="seller-footer-section">
      <div className="services">
        <ul>
        <h3>Services</h3>
          <li>Fulfillment Services</li>
          <li>Account Management</li>
          <li>Partner Services</li>
          <li>Packaging Services</li>
        </ul>
      </div>
      <div className="resources">
        <ul>
        <h3>Resources</h3>
          <li>online selling guide</li>
          <li>products in demand</li>
          <li>success stories</li>
          <li>seller learning center</li>
          <li>news</li>
          <li>api documentaion</li>
        </ul>
      </div>
      <div className="faqs">
        <ul>
        <h3>FAQs</h3>
          <li>general</li>
          <li>fees and charges</li>
          <li>managing your Account</li>
          <li>services and fulfilment by<br></br> flipkart(FBF)</li>
        </ul>
      </div>
      <div className="contact-us">
        <ul>
        <h3>contact us</h3>
          <li>sell@flipkart.com</li>
        </ul>
      </div>
      <div className="sitemap">
        <ul>
        <h3>SITEMAP</h3>
        </ul>
      </div>
      <div className="apps">
        <ul>
        <h3>download our <br></br>app</h3>
          <li>
        <img src="https://static-assets-web.flixcart.com/fk-sp-static/images/apple_store.png" alt="" />

          </li>
          <li>

        <img src="https://static-assets-web.flixcart.com/fk-sp-static/images/play_store.png" alt="" />
          </li>
        </ul>
      </div>
    </div>

    <div className="terms-section">
     <img src="https://static-assets-web.flixcart.com/fk-sp-static/images/fk-logo-pre-login-v3.svg" alt="" />
     <p>©2022 Flipkart. All rights reserved</p>
     <p>privacy policy</p>
     <p>terms of usages</p>
     <div className="icons">
      < YouTubeIcon  className='utub'/>
      <TwitterIcon/>
      <FacebookIcon/>

     </div>
    </div>
    </div>
    </>
  )
}

export default SellerFooter