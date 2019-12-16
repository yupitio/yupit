import React,{ Component } from 'react'
import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import Particles from 'react-particles-js';
import Layout from '../components/Layout'
import  CalculatorSlider from '../components/calculator/CalculatorSlider'
import  HowDoWeDoThat from '../components/calculator/HowDoWeDoThat'
import  WhatAreThePotentialareas from '../components/calculator/WhatAreThePotentialareas'
import  TwoKeyStatisticsthatYouProvided from '../components/calculator/TwoKeyStatisticsthatYouProvided'
import  ContactHelpMeCalculator from '../components/Contact/ContactHelpMeCalculator'
import PropTypes from "prop-types"
import  CalculateYourRevenueIncrease from '../components/calculator/CalculateYourRevenueIncrease'
import icon1 from '../img/imbusiness/icon1.png'
import icon2 from '../img/imbusiness/icon2.png'
import icon3 from '../img/imbusiness/icon3.png'
import {  DirectLink, Element , Events, animateScroll, scrollSpy, scroller } from 'react-scroll'

class calculator extends Component{
	
	componentDidMount() {
		if(this.props.location.hash != ''){
			scroller.scrollTo('calculator-section-5', {
				duration: 2000,
				delay: 100,
				offset : -35,
				smooth: 'easeInOutQuart'
			  });
		}
	}
	
	
	render (){
		
		
		
		
		
		return(
			<>
				<StaticQuery
    query={graphql`
      query {
        allWordpressPost{
          edges {
            node {
              acf {
                short_description
              }
              featured_media {
                source_url
              }
              date(formatString: "MMM DD, YYYY")
              author {
                name
              }
              title
              link
              slug
            }
          }
        }
        allWordpressCategory {
          edges {
            node {
            id
            name
            slug
            }
          }
          }
      }
    `}
    render={data => (
      <>
    
        <Layout>
          <Helmet>
            <title>YupiT: Calculate your revenue growth by partnering with app.</title>
			<meta name="title" content="YupiT: Calculate your revenue growth by partnering with app."></meta>
			<meta property="og:title" content="YupiT: Calculate your revenue growth by partnering with app."></meta>
			<meta property="twitter:title" content="YupiT: Calculate your revenue growth by partnering with app."></meta>
			
			
			<meta name="description" content="YupiT calculator report highlights a potential increase in revenue by identifying the key areas of opportunities that you can target in partnership with YupiT."></meta>
			<meta property="og:description" content="YupiT calculator report highlights a potential increase in revenue by identifying the key areas of opportunities that you can target in partnership with YupiT."></meta>
			<meta property="twitter:description" content="YupiT calculator report highlights a potential increase in revenue by identifying the key areas of opportunities that you can target in partnership with YupiT."></meta>
			
			<meta property="og:type" content="website"></meta>
			<meta property="twitter:card" content="summary_large_image"></meta>
          </Helmet>
          <div className="particles-main">
              <Particles params={{"particles":{"number":{"value":8,"density":{"enable":false,"value_area":1583.5576706700122}},"color":{"value": ["#FF9C80", "#8DE8D6", "#FECEB2", "#D0EBC4"]},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":25.003542168473878,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":0,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"top-right","random":true,"straight":true,"out_mode":"bounce","bounce":false,"attract":{"enable":false,"rotateX":3583.8410441479223,"rotateY":1166.8319678621144}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":709.4594594594589,"size":177.36486486486473,"duration":0.3378378378378376,"opacity":0.7516891891891886,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}} />
          </div>
          <CalculatorSlider></CalculatorSlider>
          <HowDoWeDoThat></HowDoWeDoThat>
          <WhatAreThePotentialareas></WhatAreThePotentialareas>
          <TwoKeyStatisticsthatYouProvided></TwoKeyStatisticsthatYouProvided>
          <CalculateYourRevenueIncrease></CalculateYourRevenueIncrease>
          <section className="imbusiness-section-7 pt-4">
            <div className="container">
              <div className="row justify-content-end text-right">
                <div className="col-xl-5 col-lg-7 col-md-8">
                    <h2 className="section-heading">Ask the Expert</h2>
                    <p className="label-text">Got stuck! Fill up the form below incase you have any query.
    Our representative will get in touch with you soon.</p>
                      <ContactHelpMeCalculator></ContactHelpMeCalculator>
                    
                </div>     
              </div>
            </div>
          </section>
        
      </Layout>
      </>
    )}
    />
			</>
		)
	}
}

export default calculator

