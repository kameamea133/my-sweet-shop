import React from 'react';

import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import './Footer.css'



export default function Footer(){
    return(
        
        <footer className="footer2-main">
            <div className="item item-logo">    
                <h3>My Sw<span>ee</span>ts</h3> 
                <p>All right reserved 2022 ©</p>
            </div>

            <div className="item item-menu"> 
                <h4>MENU</h4>
                    <ul className="liste"> 
                        <li className="items">Home</li>
                        <li className="items">About us</li>
                        <li className="items">Certifications</li>
                        <li className="items">Payment</li>
                        <li className="items">Shipping</li>
                    </ul>
            </div>

            <div className="item item-menu">
                <h4>PRODUCTS</h4>
                    <ul className="liste">
                        <li className="items">Ice Cream</li>
                        <li className="items">Donuts</li>
                        <li className="items">Macarons</li>
                        <li className="items">Cheesecake</li>
                        <li className="items">Cakes</li>
                    </ul>  
            </div>

            <div className="item item-social">
                <h4>SOCIAL NETWORK</h4>
                    <LinkedInIcon fontSize="small" />
                    <TwitterIcon fontSize="small" sx={{  color: '#ed708e' }} />
                    <InstagramIcon fontSize="small" />
            </div>

        </footer>
    )
}