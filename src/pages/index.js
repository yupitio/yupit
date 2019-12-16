


import React from 'react'
import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import Particles from 'react-particles-js';
import Layout from '../components/Layout'
import LazyLoad from 'react-lazyload';
import GettheApp from '../img/home/get-the-app.png'
import AppStore from '../img/home/AppStore.png'
import PlayStore from '../img/home/PlayStore.png'
import  HomeMainSlider from '../components/Home/HomeMainSlider'
import  WhyYupit from '../components/Home/WhyYupit'
import  AboutYupit from '../components/Home/AboutYupit'
import  HomeServices from '../components/Home/HomeServices'
import  HomeBlog from '../components/Home/HomeBlog'
import  HomeFeature from '../components/Home/HomeFeature'
import ContactSubscribe from '../components/Contact/ContactSubscribe'
import ContactTextme from '../components/Contact/ContactTextme'
import ContactEmailme from '../components/Contact/ContactEmailme'
import {withPrefix} from "gatsby"
const MainPage = () => (
	<Layout>
            <Helmet>
				<title>YupiT: food ordering app for dine-in &amp; pick up at restaurants</title>
				<meta name="title" content="YupiT: food ordering app for dine-in & pick up at restaurants"></meta>
				<meta property="og:title" content="YupiT: food ordering app for dine-in & pick up at restaurants"></meta>
				<meta property="twitter:title" content="YupiT: food ordering app for dine-in & pick up at restaurants"></meta>
				
				
				<meta name="description" content="New Description: YupiT App helps you find, dine-in & pick up from venues wherever you go. Enjoy seamless ordering experience and earn loyalty points that can be used to pay for your orders."></meta>
				<meta property="og:description" content="New Description: YupiT App helps you find, dine-in & pick up from venues wherever you go. Enjoy seamless ordering experience and earn loyalty points that can be used to pay for your orders."></meta>
				<meta property="twitter:description" content="New Description: YupiT App helps you find, dine-in & pick up from venues wherever you go. Enjoy seamless ordering experience and earn loyalty points that can be used to pay for your orders."></meta>
				
				<meta property="og:type" content="website"></meta>
				<meta property="twitter:card" content="summary_large_image"></meta>
            
            </Helmet>
	        <div className="particles-main">
                <Particles params={{"particles":{"number":{"value":8,"density":{"enable":false,"value_area":1583.5576706700122}},"color":{"value": ["#FF9C80", "#8DE8D6", "#FECEB2", "#D0EBC4"]},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":25.003542168473878,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":0,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"top-right","random":true,"straight":true,"out_mode":"bounce","bounce":false,"attract":{"enable":false,"rotateX":3583.8410441479223,"rotateY":1166.8319678621144}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":709.4594594594589,"size":177.36486486486473,"duration":0.3378378378378376,"opacity":0.7516891891891886,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}} />
            </div>
			<LazyLoad height={100} >
            <HomeMainSlider></HomeMainSlider>
			</LazyLoad>
			<LazyLoad height={100} >
            <WhyYupit></WhyYupit>
			</LazyLoad>
			<LazyLoad height={100} >
            <AboutYupit></AboutYupit>
			</LazyLoad>
			<LazyLoad height={100} >
            <HomeServices></HomeServices>
			</LazyLoad>
			<LazyLoad height={100} >
            <HomeFeature></HomeFeature>
			</LazyLoad>
            <LazyLoad height={100} >
			<section className="home-section-6">
                <div className="container">
                <img src={GettheApp} width="700" className="image-left wow fadeInLeft" alt=""/>
                   <div className="row justify-content-end">
                        <div className="col-lg-6 col-md-8 mb-4">
                            <h2 className="section-heading text-left">Get the App</h2>
                            <p className="label-text">Enjoy seamless dine in or pick up experience with exciting deals!! Download the food ordering app and order at your favorite venue anytime, anywhere.</p>
                            <div className="row">
                                <div className="col-md-10">
                                    <form className="mb-4 d-block">
                                        <ContactTextme />
                                        <p className="text-center sub-heading d-block">OR</p>
                                        <ContactEmailme />
                                    </form>
                                    <a target="_blank" href="https://apps.apple.com/au/app/yupit/id1489180368"><img src={AppStore} target="_blank" alt="" width="200" className="mb-4 d-inline mr-4 appStorelogo"/></a>
                                    <a target="_blank"  href="https://play.google.com/store/apps/details?id=com.qltech.cunsumer.yupitapp"><img src={PlayStore} target="_blank" width="200" alt="" className="mb-4 d-inline appStorelogo"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
			</LazyLoad>
			<LazyLoad height={100} >
            <HomeBlog></HomeBlog>
			</LazyLoad>
			<LazyLoad height={100} >
            <section className="home-section-7 pt-4">
                <div className="container">
                    <h2 className="section-heading text-center pb-0 mb-2">Subscribe For Our Rewards</h2>
                    <p  className="sub-heading text-center pb-4">Get news on hottest venues ,latest offers &amp; deals!!</p>
                    <div className="row justify-content-center">
                        <div className="col-md-8 mb-4">
                            <ContactSubscribe />
                        </div>
                    </div>
                </div>
            </section>
			</LazyLoad>
			
	</Layout>
)

export default MainPage