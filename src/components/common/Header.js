import React, {Component} from "react"
import { Link, StaticQuery, graphql } from 'gatsby'

import PropTypes from "prop-types"
import logo from '../../img/logo.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class Header extends React.Component {
	
	constructor(props) {
		super(props);
		this.toggleNavbar = this.toggleNavbar.bind(this);
		this.state = {
          StickyClass: '',
          StickyClass_sub: '',
		  collapsed: true,
        } 
	 
	}
	toggleNavbar() {
 this.setState({
 collapsed: !this.state.collapsed,
 });
 }
	
	componentDidMount() {
		var url = window.location.href;	
		if((url.includes("blog")) || (url.includes("imbusiness")) ||(url.includes("privacy-policy")) || (url.includes("faq")) || (url.includes("partner-t-c")) || (url.includes("terms-and-conditions"))){
			this.setState({StickyClass: "sticky"});
			this.setState({StickyClass_sub: "col-lg-12"});
		}
		else{
			 window.addEventListener('scroll', () => {
				 let activeClass = 'sticky';
				 let activeClassSub = 'col-lg-12';
				 if(window.scrollY === 0){
					 activeClass = '';
					 activeClassSub = '';
				 }
				this.setState({StickyClass: activeClass	});
				this.setState({StickyClass_sub: activeClassSub});
			  });
		}	
		 
		
		console.log(window.location.href);  
	}
	
	render() {
		
		const collapsed = this.state.collapsed;
		const classOne = collapsed ? 'collapse navbar-collapse justify-content-end' : 'justify-content-end collapse navbar-collapse show';
		const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
		
		
		return(
			<header className={this.state.StickyClass} >
			
         
		 
            <div className="container">
                <div className="row">
                    <div className={"col-lg-8  main-navbar "+this.state.StickyClass_sub} >
                    <nav className="navbar navbar-expand-sm navbar-light bg-none">
                    <Link className="navbar-brand" to="/"><img src={logo} width="130px" className="img-fluid"/></Link>
                    <div className="d-flex">
                    <ul className="navbar-nav navbar-app-download-link d-flex d-sm-none">
                        <li className="nav-item ">
                            <a className="nav-link" target="_blank" href="https://apps.apple.com/au/app/yupit/id1489180368"><i  className="fa fa-apple"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" target="_blank" href="https://play.google.com/store/apps/details?id=com.qltech.cunsumer.yupitapp"><i className="fa fa-android"></i></a>
                        </li>
                    
                    </ul>
                    <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    </div>
                    <div className={`${classOne}`} className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav nav-menu-link">
                            <li className="nav-item ">
                                <Link className="nav-link" to="/#aboutUs">About us</Link>
                            </li>
                            <li className="nav-item  d-sm-flex d-none">
                                <Link className="nav-link btn-default" to="/imbusiness">I'm Business</Link>
                            </li>
                            <li className="nav-item d-sm-none d-flex">
                                <Link className="nav-link " to="/imbusiness">I'm Business</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav navbar-app-download-link d-none d-sm-flex">
                            <li className="nav-item ">
                                <a className="nav-link" target="_blank" href="https://apps.apple.com/au/app/yupit/id1489180368"><i  className="fa fa-apple"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" target="_blank" href="https://play.google.com/store/apps/details?id=com.qltech.cunsumer.yupitapp"><i className="fa fa-android"></i></a>
                            </li>
                        </ul>
                    </div>
                </nav>

                    </div>
                </div>
                
            </div>
        </header>
		)
	}
	
}


export default Header;