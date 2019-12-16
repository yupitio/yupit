import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Clock from 'react-live-clock';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay:true,
  speed: 500,
  arrows: false,
  infinite: true,
  cssEase: 'ease-in-out'
};



const HomeFeature = () => (
  
    <StaticQuery
      query={graphql`
        query {
            allWordpressWpOurfeatures {
              edges {
                node {
                  acf {
                    features_title
                    features_description
                    features_icon {
                        localFile {
					childImageSharp {
					  id
					  fixed(base64Width: 40) {
						
						base64
					  }
					}
				  }
                    }
                  }
                }
              }
            }
            allWordpressWpOurfeaturesslider(sort: {fields: id, order: ASC}) {
              edges {
                node {
                  acf {
                    yupit_screenshot {
                        localFile {
					childImageSharp {
					  id
					  fixed(base64Width: 425) {
            
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
      
      render={data => (
        <>
          
            <section className="home-section-5 bg-white">
           
                <div className="container">
                    <h2 className="section-heading text-center  ">Our Features</h2>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 ">
                            <ul className="feature-list feature-list-left d-none d-lg-block ">
                                {data &&
                                data.allWordpressWpOurfeatures &&
                                data.allWordpressWpOurfeatures.edges &&
                                data.allWordpressWpOurfeatures.edges.map(
                                  (prop,i) => {
                                    return (
                                      <>
                                        
                                        {(i <= 3) ? (<li className="wow fadeInRight"><p className=""><span className="featureName">{prop.node.acf.features_title}</span><span className="featureDescription" dangerouslySetInnerHTML={{ __html:prop.node.acf.features_description}}></span></p><i className="featureIcon"><img src={prop.node.acf.features_icon.localFile.childImageSharp.fixed.base64} className="img-fluid" alt={prop.node.acf.features_title}/></i></li>) : ('')}
                                      </>
                                    )
                                  }
                                )}
                            
                          </ul>
                        </div>
                        <div className="col-lg-4 text-center">
                          <div className="FeatureSlider">
                          <span className="mobileTime"><Clock format={'HH:mm'} ticking={true} timezone={'Australia/Perth'} /></span>
                              <Slider className=" mb-4" {...settings} >
                              {data &&
                                  data.allWordpressWpOurfeaturesslider &&
                                  data.allWordpressWpOurfeaturesslider.edges &&
                                  data.allWordpressWpOurfeaturesslider.edges.map(
                                    prop1 => {
                                      return (
                                          <img src={prop1.node.acf.yupit_screenshot.localFile.childImageSharp.fixed.base64} alt="Yupit ScreenShot" className="img-fluid "/>  
                                        )
                                      }
                                  )}
                              </Slider>
                            </div>
                        </div>
                       
                          <div className="col-lg-4 col-md-6 mb-4 ">
                              <ul className="feature-list feature-list-left  d-block d-lg-none">
                                  {data &&
                                  data.allWordpressWpOurfeatures &&
                                  data.allWordpressWpOurfeatures.edges &&
                                  data.allWordpressWpOurfeatures.edges.map(
                                    (prop3,i) => {
                                      return (
                                        <>
                                          {(i <= 3) ? (<li className="wow fadeInRight"><p className=""><span className="featureName">{prop3.node.acf.features_title}</span><span className="featureDescription" dangerouslySetInnerHTML={{ __html:prop3.node.acf.features_description}}></span></p><i className="featureIcon"><img src={prop3.node.acf.features_icon.localFile.childImageSharp.fixed.base64} className="img-fluid" alt={prop3.node.acf.features_title}/></i></li>) : ('')}
                                        </>
                                      )
                                    }
                                  )}
                              </ul>
                              <ul className="feature-list feature-list-right ">
                                    {data &&
                                    data.allWordpressWpOurfeatures &&
                                    data.allWordpressWpOurfeatures.edges &&
                                    data.allWordpressWpOurfeatures.edges.map(
                                      (prop4,i) => {
                                        return (
                                          <>
                                            {(i > 3) ?  (<li className="wow fadeInLeft"><p className=""><span className="featureName">{prop4.node.acf.features_title}</span><span className="featureDescription" dangerouslySetInnerHTML={{ __html:prop4.node.acf.features_description}}></span></p><i className="featureIcon"><img src={prop4.node.acf.features_icon.localFile.childImageSharp.fixed.base64} className="img-fluid" alt={prop4.node.acf.features_title}/></i></li>) : ('')}
                                          </>
                                        )
                                      }
                                    )}
                              </ul>
                          </div>
                    </div>
                </div>
            </section>
        </>
      )}
    />
  )
export default HomeFeature;
