import React from 'react'
import "./NavbarNew.css";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
const NavbarNew = () => {
  return (
  <div className='NavSection'>
<nav>
  <div className="NavLogo">
    
      <img src="./images/medical17.png"/> Farmaci Mona
    
  </div>
  <div className='NavMenu'>
      <ul>
        <li><Link to ="/home">Home</Link></li>
        <li><Link to ="/aboutus">Rreth Nesh </Link></li>
        <li><Link to ="/oferta">Oferta</Link></li>
        <li><Link to ="/category">Produktet</Link></li>
        <li><HashLink to ="#CONTACT">Kontakt</HashLink></li>
      </ul>
  </div>
</nav>
</div>

)};
export default NavbarNew;