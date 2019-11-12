import React from 'react';
import { Link } from 'react-router-dom';
import '../../app.css';
import './Footer.css';
import Donate from "../../views/Donate/Donate"

const Footer = () => {
    return (
        <div className='footernav'>
            <div className='footer-left'>
              Info
            </div>
            <div className='buttonDiv'>
              <Link id="logo-link" to="/Donate"><button type="button" id='donate-button'> Donate </button></Link>
            </div>
            {/* Page Links */}
            <div className="footer-right">
                {/*Section for link to Partner with Us*/}
                {/*<Link className="footer-link" to="/Partner">Partner with Us</Link>*/}
                Partner with Us
            </div>


        </div>
    )
}

export default Footer;
