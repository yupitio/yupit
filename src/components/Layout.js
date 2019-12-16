import React from 'react'
import Helmet from 'react-helmet'
import {withPrefix} from "gatsby"
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/all.scss'
import favicon from "../img/App Icon_60x60.png";


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Yupit" link={[{ rel: "shortcut icon", type: "image/png", href: `${favicon}` }]} />
      <Helmet>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
		 
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
			
          <script src={withPrefix("js/bootstrap.min.js")} ></script>
          <script src={withPrefix("js/main.js")} ></script>
		  
		  
		  
      </Helmet>
    <Header />
    <div>{children}</div>
    <Footer></Footer>
	<ScrollUpButton />
  </div>
);
export default TemplateWrapper;