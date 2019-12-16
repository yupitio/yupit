import React, {Component} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, StaticQuery, graphql } from 'gatsby'








class HomeServicesSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          nav1: null,
          nav2: null
        };
      }
      componentDidMount() {
        this.setState({
          nav1: this.slider1,
          nav2: this.slider2
        });
	
      }
render() {
    	const settings_subslider = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay:true,
        speed: 500,
        dots: true,
      };
      const settings_mainslider = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        centerPadding: '300px',
        mobileFirst: true,
        speed: 500,
        centerMode: true,
            responsive: [
                {
                    breakpoint: 1400,
                    settings:{
						slidesToShow: 1,
						slidesToScroll: 1,
                        centerMode: true,
                        centerPadding: '200px',
                    }
                },
                {
                    breakpoint: 1200,
                    settings:{
						slidesToShow: 1,
						slidesToScroll: 1,
                        centerMode: true,
                        centerPadding: '180px',
                    }
                },
                {
                    breakpoint: 991,
                        settings:{
							slidesToShow: 1,
							slidesToScroll: 1,
                            centerMode: true,
                            centerPadding: '130px',
                        }
                    },
                {
                breakpoint: 767,
                    settings:{
						slidesToShow: 1,
						slidesToScroll: 1,
                        centerMode: true,
                        centerPadding: '120px',
                    }
                },
                {
                breakpoint: 576,
                    settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
                        centerMode: true,
                        centerPadding: '90px',
                    }
                },
                {
                breakpoint: 400,
                    settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
                        centerMode: true,
                        centerPadding: '50px',
                    }
                }
            ]

      };
      const HomeServicesContent = this.props.data.allWordpressAcfYupitservices;
    return(
        <>
 <section className="home-section-4">
                <div className="container bg-white">
                    <h2 className="section-heading text-center mb-2">YupiT Services</h2>
                    <p className="sub-heading text-center mb-4">Experience awesome food while availing great offers at your convenience.</p>
                    <div className="row  justify-content-center">
                    <div className=" col-md-7">
                    <Slider  className="mb-4"
                        asNavFor={this.state.nav1}
                        ref={slider => (this.slider2 = slider)} {...settings_mainslider}
                        >
                             {HomeServicesContent && HomeServicesContent && HomeServicesContent.edges.map(
       
                  
                      
                  
       prop => {
       return ( 
                        <div>
                            <img src={prop.node.acf.yupit_services_icon.localFile.childImageSharp.fixed.base64}  width="265" className="img-fluid"/>
                        </div>
                     
                           )
                        }
                    )}  
                        </Slider>
                                    </div>
                                </div>
                                
                    
                        <Slider className="text-center"
                        asNavFor={this.state.nav2}
                        ref={slider => (this.slider1 = slider)}
                        {...settings_subslider}>
                              {HomeServicesContent && HomeServicesContent && HomeServicesContent.edges.map(
       
                  
                      
                  
       prop => {
       return ( 
                        <div>
                            <h3 className="slider-text ">{prop.node.acf.yupit_services_name}</h3>
                            <p className="text-dark">{prop.node.acf.yupit_services_description}</p>
                        </div>
                            )
                        }
                    )}  
                      
                        </Slider>
                </div>
            </section>

     
  
        </>
        
)
	
  }
}


const HomeServices = () => (
    <StaticQuery
      query={graphql`
        query {
            allWordpressAcfYupitservices {
                edges {
                  node {
                    acf {
                      yupit_services_name
                      yupit_services_description
                      yupit_services_icon {
                        localFile {
					childImageSharp {
					  id
					  fixed(base64Width: 265) {
              base64
					  }
					}
				  }
                      }
                    }
                  }
                }
              }
              
          }
      `}
      render={(data) => <HomeServicesSection data={data} />}
    
      />
  )
  
  export default HomeServices