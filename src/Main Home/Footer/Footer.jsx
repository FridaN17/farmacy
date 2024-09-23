import React from 'react'
import './Footer.css'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footerWrapper">
            <div className="footerLeft">
                <h2 className='frm'>Farmaci Mona</h2>
                <div className="footerMenuItems">
                <p>Oferta </p> |
                <p>Kontakt </p> |
                <p>Produktet</p> |
                <p>Rreth Nesh</p>
                </div>
            </div>
            <div className="footerCenter">
                <div className="footerContact">
                <FontAwesomeIcon icon={faLocationDot}/>
                <p>Yzberisht</p>
                </div>
                <div className="footerContact">
                    <FontAwesomeIcon icon={faPhone}/>
                    <p>0695224209</p>
                </div>
                <div className="footerContact">
                    <FontAwesomeIcon icon={faEnvelope}/>
                    <p>farmaciMona@gmail.com</p>
                
            </div>
            </div>
            <div className="footerRight">
                <h4>Rreth Farmaci Mona</h4>
                <p>Profesionalizëm,Siguri,Garanci</p>
                <div>
                    <FontAwesomeIcon icon={faFacebook} className='footerBrands1' style={{fontSize:'20px', marginRight:'10px'}}/>
                    <FontAwesomeIcon icon={faInstagram} className='footerBrands2' style={{fontSize:'20px', marginRight:'10px'}}/>
                    <FontAwesomeIcon icon={faWhatsapp} className='footerBrands3' style={{fontSize:'20px', marginRight:'10px'}}/>

                </div>
            </div>
        </div>
    
    </div>
  )
}

export default Footer