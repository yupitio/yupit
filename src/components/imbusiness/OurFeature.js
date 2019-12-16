import React , {useState } from 'react'
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





const OurFeature = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpImbusinessmain {
          edges {
            node {
              acf {
                our_features_section_heading
                our_features_images {
                  vender_app_screen_shot {
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
                feature_list {
                    feature_icon {
                        localFile {
					childImageSharp {
					  id
					  fixed(base64Width: 70) {
            base64
					  }
					}
				  }
                    }
                  feature_title
                  feature_description
                }
              }
            }
          }
        }
        
            
        }
    `}
    render={data => (
      <>
        {data &&
                data.allWordpressWpImbusinessmain &&
                data.allWordpressWpImbusinessmain.edges &&
                data.allWordpressWpImbusinessmain.edges.map(
                  prop => {
                    return (
                        <section className="imbusiness-section-6">
                          <div class="container">
                              <h2 class="section-heading text-center">{prop.node.acf.our_features_section_heading}</h2>
                              <div class="row d-flex justify-content-between">
                                    <div class="col-lg-4 col-md-12 text-center">
                                    <div className="FeatureSlider">
                                        <span className="mobileTime"><Clock format={'HH:mm'} ticking={true} timezone={'Australia/Perth'} /></span>
                                          <Slider className=" mb-4" {...settings} >
                                          {prop.node.acf.our_features_images.map(
                                                  (prop2,i) =>{
                                                  return (
                                                      <img src={prop2.vender_app_screen_shot.localFile.childImageSharp.fixed.base64} alt="Yupit ScreenShot" className="img-fluid "/>  
                                                  )
                                              
                                                }
                                              )}
                                          </Slider>
                                          </div>
                                    </div>
                                    <div className="col-lg-8 col-md-12 pt-4">
                                      <div className="main-panel">
                                          <div className="row d-flex">
                                              {prop.node.acf.feature_list.map(
                                                  (prop1,i) =>{
                                                  return (
                                                      <div class="col-md-6 mb-4">
                                                      <div className="">
                                                          <div className="thumbnial-image mb-3">
                                                          <img src={prop1.feature_icon.localFile.childImageSharp.fixed.base64} class="img-fluid d-inline" alt=""/>
                                                          </div>
                                                          <h4 clssName="section-heading-3 text-success">{prop1.feature_title}</h4>
                                                          <div className="label-text" dangerouslySetInnerHTML={{ __html: prop1.feature_description}}></div>
                                                        
                                                      </div>
                                                  </div>
                                                  )
                                                  }
                                              )} 
                                          </div>
                                      </div>
                                    </div>
                                 
                            </div>
                          </div>
                        </section>
                      )
                  }
              )
          }
      </>
    )
    }
    />
)

export default OurFeature