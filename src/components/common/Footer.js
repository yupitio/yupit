import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import logo from '../../img/logo.png'
import SocialMenu from '../common/SocialMenu'
import FooterSubMenu from '../common/FooterSubMenu'
import FooterMenu from '../common/FooterMenu'

class Footer extends React.Component{
    render(){
        return(
		<>
        <footer>
            <div className="container">
                 <div className="row justify-content-between">
                     <div className="col-lg-4 col-md-4 col-sm-6">
                         <h2 className="section-heading-2  font-weight-regular mb-3">ABOUT US</h2>
                         <p className="label-text   font-weight-regular">At YupiT we are driven with the sole intention of sharing awesome experiences via great food &amp; drinks with the world.</p>
                     </div>
                     <div className="col-lg-3 col-md-4 col-sm-6">
                         <div className="text-center">
                             <Link to="/"><img src={logo} className="img-fluid footer-logo" alt="Yupit" /></Link>
                            
                            <SocialMenu></SocialMenu>
                            <a href="mailto:support@yupit.io" className="nav-link  font-weight-regular">support@yupit.io</a>
                         </div>

                     </div>
                     <div className="col-lg-3 col-md-4 col-sm-12">
                         <FooterMenu></FooterMenu>
                     </div>
                 </div>
            </div>
            <div className="footer-last ">
                <div className="container">
                    <div className="d-flex justify-content-between">
                        <p className="d-inline label-text mb-0 ">© 2019 YupiT All rights reserved.</p>
                        <FooterSubMenu></FooterSubMenu>
                    </div>
                </div>
            </div>
        </footer>
	</>
        )
    }
}
export default Footer;
