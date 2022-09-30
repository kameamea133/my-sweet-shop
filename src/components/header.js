import React from 'react'
import '../styles/header.css'
import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function Header() {


  return (
    <div className="header">
        <div className='titre'>
            
                <h1>My Sw<span>ee</span>ts</h1>
            
        </div>
        
        <nav>
            <ul className='nav-item'>
                <li onClick={() => console.log('Home')}>Home</li>
                <li onClick={() => console.log('Catalogue')}>Catalogue</li>
                <li onClick={() => console.log('About')}>About Us</li>
            </ul>
        </nav>
        
        <div className='panier'>
            <div className='decor-panier'>
                
                    <Badge badgeContent={4} color="secondary" sx={{marginBottom: 1}} className='icone-panier'>
                        <ShoppingCartIcon fontSize="large"/>
                    </Badge>
                
            </div>
            
            
            
            
        </div>

    </div>
  );
}

export default Header;
