import React,{ Component } from 'react'
import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import Particles from 'react-particles-js';
import Layout from '../components/Layout'
import  ImBusinessMainSlider from '../components/imbusiness/ImBusinessMainSlider'
import  CustomerJourny from '../components/imbusiness/CustomerJourny'
import  WhyJoinYupIT from '../components/imbusiness/WhyJoinYupIT'
import  HowJoinYupIT from '../components/imbusiness/HowJoinYupIT'
import  OurFeature from '../components/imbusiness/OurFeature'
import  WhitePaper from '../components/imbusiness/WhitePaper'
import  ContactHelpMeBusiness from '../components/Contact/ContactHelpMeBusiness'
import  Faq from '../components/imbusiness/Faq'
import icon1 from '../img/imbusiness/icon1.png'
import icon2 from '../img/imbusiness/icon2.png'
import icon3 from '../img/imbusiness/icon3.png'
import PropTypes from "prop-types"

class imbusiness extends Component{
	
	render (){
		console.log(this.props);
		
		if(this.props.location.hash != ''){
			console.log("hash");
			
		}
		else{
			console.log("not has");
		}
		
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
            <title>YupiT: Manage online booking & orders with our partnership</title>
			<meta name="title" content="YupiT: Manage online booking & orders with our partnership"></meta>
			<meta property="og:title" content="YupiT: Manage online booking & orders with our partnership"></meta>
			<meta property="twitter:title" content="YupiT: Manage online booking & orders with our partnership"></meta>
			
			
			<meta name="description" content="Partner with YupiT app. To attract new customers with referral rewards, increase order values, reduce house labour cost much more. Contact support@yupit.io"></meta>
			<meta property="og:description" content="Partner with YupiT app. To attract new customers with referral rewards, increase order values, reduce house labour cost much more. Contact support@yupit.io"></meta>
			<meta property="twitter:description" content="Partner with YupiT app. To attract new customers with referral rewards, increase order values, reduce house labour cost much more. Contact support@yupit.io"></meta>
			
			<meta property="og:type" content="website"></meta>
			<meta property="twitter:card" content="summary_large_image"></meta>
          </Helmet>
          <div className="particles-main">
              <Particles params={{"particles":{"number":{"value":8,"density":{"enable":false,"value_area":1583.5576706700122}},"color":{"value": ["#FF9C80", "#8DE8D6", "#FECEB2", "#D0EBC4"]},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":25.003542168473878,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":0,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"top-right","random":true,"straight":true,"out_mode":"bounce","bounce":false,"attract":{"enable":false,"rotateX":3583.8410441479223,"rotateY":1166.8319678621144}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":709.4594594594589,"size":177.36486486486473,"duration":0.3378378378378376,"opacity":0.7516891891891886,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}} />
          </div>
          <ImBusinessMainSlider></ImBusinessMainSlider>
          <section className="imbusiness-section-2">
              <div className="container text-center">
                <h2 className="section-heading mb-2">Quantify the benefits of our partnership</h2>
                <p className="label-text  mb-3">Find out exactly how much your revenue will increase in collaboration with YupiT</p>
                <div className="row justify-content-center">
                  <div className="col-xl-3 col-lg-4  col-md-6 col-sm-10 " >
                    <Link to="/calculator#form" className="btn btn-success btn-block">Calculate Now</Link>
                  </div>
                </div>
              </div>
          </section>
          <CustomerJourny></CustomerJourny>
          <WhyJoinYupIT></WhyJoinYupIT>
          <HowJoinYupIT></HowJoinYupIT>
          
          <OurFeature></OurFeature>
          <WhitePaper></WhitePaper>
          <Faq></Faq>
          <section className="imbusiness-section-9">
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-5 col-md-6">
                    <ul className="contact-info">
                      <li>
                          <div className="icon"><img src={icon1} className="img-fluid d-inline"/></div>
                          <div className="contact-detail">
                              <h3 className="section-heading-4">45 St Georges Terrace,</h3>
                              <p className="label-text">Ground Floor, Perth, 6000</p>
                          </div>
                      </li>
                      <li>
                          <div className="icon"><img src={icon2} className="img-fluid d-inline"/></div>
                          <div className="contact-detail">
                              <a href="tel:+61 (0)862623559" target="_blank" className="section-heading-3  text-dark">+61 (0)862623559</a>
                              <p className="label-text">Mon to Fri 9am to 6pm</p>
                          </div>
                      </li>
                      <li>
                          <div className="icon"><img src={icon3} className="img-fluid d-inline"/></div>
                          <div className="contact-detail">
                              <a href="mailto:support@yupit.io" target="_blank" className="section-heading-3  text-dark">support@yupit.io</a>
                              <p className="label-text">Send us your query anytime!</p>
                          </div>
                      </li>
                    </ul>
                </div>   
                <div className="col-xl-8 col-lg-7 col-md-6 text-right">
                  <div className="content-right">
                    <h2 className="section-heading mb-2">Let us know how we can help</h2>
                    <p className="label-text">to learn more about implementing technology at your restaurant.</p>
                  
                    <ContactHelpMeBusiness></ContactHelpMeBusiness>
                  </div>
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

export default imbusiness	



