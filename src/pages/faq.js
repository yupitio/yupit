import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Particles from 'react-particles-js';
import Layout from '../components/Layout'
import Helmet from 'react-helmet';
import {Accordion, Card, Button , Collapse} from 'react-bootstrap';


class FaqSection extends React.Component{
constructor(props) {
        super(props);
        
     }
	handleToggle = (id) => {
		
        document.querySelectorAll('.card:not(.id'+id+')').forEach(function(button) {	
			if(!button.classList.contains(".id"+id)){
				button.classList.remove('active');
			}
		});
		
		if (document.querySelector(".id"+id).classList.contains('active')) {
		  document.querySelector(".id"+id).classList.remove('active');
		} else {
		  document.querySelector(".id"+id).classList.add('active');
		}
		
		
    } 
 render() {
 
  const Faq = this.props.data.allWordpressWpFaq;
   return (
    <>
    <Layout>
            <Helmet>
				<title>Everything you need to know about YupiT app in the FAQs</title>
				<meta name="title" content="Everything you need to know about YupiT app in the FAQs"></meta>
				<meta property="og:title" content="Everything you need to know about YupiT app in the FAQs"></meta>
				<meta property="twitter:title" content="Everything you need to know about YupiT app in the FAQs"></meta>
				
				
				<meta name="description" content="The YupiT FAQs answer all the questions on you might have how YupiT works and all the benefits of using the app. And if not then you can always contact us support@yupit.io"></meta>
				<meta property="og:description" content="The YupiT FAQs answer all the questions on you might have how YupiT works and all the benefits of using the app. And if not then you can always contact us support@yupit.io"></meta>
				<meta property="twitter:description" content="The YupiT FAQs answer all the questions on you might have how YupiT works and all the benefits of using the app. And if not then you can always contact us support@yupit.io"></meta>
				
				<meta property="og:type" content="website"></meta>
				<meta property="twitter:card" content="summary_large_image"></meta>
            </Helmet>
            <span className="SpaceTop"></span>
            <div className="particles-main">
                <Particles params={{"particles":{"number":{"value":8,"density":{"enable":false,"value_area":1583.5576706700122}},"color":{"value": ["#FF9C80", "#8DE8D6", "#FECEB2", "#D0EBC4"]},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":25.003542168473878,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":0,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"top-right","random":true,"straight":true,"out_mode":"bounce","bounce":false,"attract":{"enable":false,"rotateX":3583.8410441479223,"rotateY":1166.8319678621144}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":709.4594594594589,"size":177.36486486486473,"duration":0.3378378378378376,"opacity":0.7516891891891886,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}} />
            </div>
            <section className="breadcumbs-section text-center">
              <div className="container">
                <h1 className="heading-main text-center text-white">FAQ</h1>
                <ul className="nav  d-flex justify-content-center breadcumbs-list"> <li><Link to="/">Home</Link></li><li>FAQ</li></ul>
              </div>
            </section>
            <section className="faq-section">
            <div className="container">
            
          
            <Accordion defaultActiveKey="0">
        
                              {Faq && Faq && Faq.edges.map(
                                prop => {
                              return (
                                <>
                              {prop.node.acf.faq.map(
                                  (prop1,i) =>{
                                    return(
                                     <>
                                  <Card className="p-0 mb-4" className={"p-0 mb-4 id"+i} >
                                    <Card.Header  className="border-0" >
                                      <Accordion.Toggle onClick={() => {this.handleToggle(i)}} className="label-text border-0 text-dark mb-0 "   as={Card.Title} eventKey={i}>
                                        <h3 className="label-text text-dark mb-0" >{prop1.question}</h3><span className="accrodian-icon"><i className="fa fa-plus"></i></span>
                                      </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey={i}>
                                      <Card.Body><div className="wordpress-content" dangerouslySetInnerHTML={{ __html: prop1.answer}}></div></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                  </>
                                    )
                                  }
                                )}
                               
                           
                            </>
                 )
                }
          )}
              
            </Accordion>
               

            </div>
            </section>
        </Layout>
    </>
    		
    )
  }
}
const faq = () => (
  <StaticQuery
  query={graphql`
    query {
      allWordpressWpFaq {
        edges {
          node {
            acf {
              faq {
                question
                answer
              }
            }
          }
        }
      }
    }
  `}
    render={(data) => <FaqSection data={data} />}
  
    />
)

export default faq;