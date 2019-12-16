import React , {useState } from 'react'
import ReactDOM from "react-dom";
import { Link, StaticQuery, graphql } from 'gatsby'
import Slider from "react-slick";
import ReactModal from 'react-modal'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";





const WhyJoinYupIT = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpImbusinessmain {
          edges {
            node {
              acf {
                i_m_business_why_join_yupit_sub_heading
                i_m_business_why_join_yupit_heading_line
                i_m_business_why_join_yupit_content {
                  thumbnial_title
                  thumbnial_content
                  thumbnial_icon {
                      localFile {
					childImageSharp {
					  id
					  fixed(base64Width: 120) {
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
                        <section className="imbusiness-section-4">
                          <div class="container">
                              <h2 class="section-heading text-center mb-2">{prop.node.acf.i_m_business_why_join_yupit_heading_line}</h2>
                              <p className="sub-heading text-center mb-4">{prop.node.acf.i_m_business_why_join_yupit_sub_heading}</p>
                              <div class="row d-flex justify-content-between">
                                  {prop.node.acf.i_m_business_why_join_yupit_content.map(
                                    (prop1,i) =>{
                                      return (
                                        <div class="col-xl-3 col-md-6 mb-4">
                                          <div className=" text-center card">
                                            <div className="thumbnial-image  text-center mb-4">
                                              <img src={prop1.thumbnial_icon.localFile.childImageSharp.fixed.base64} class="img-fluid d-inline" alt=""/>
                                            </div>
                                            <div className="thumbanial-content">
                                              <h3 clssName="section-heading-2 text-dark">{prop1.thumbnial_title}</h3>
                                              <div className="label-text" dangerouslySetInnerHTML={{ __html: prop1.thumbnial_content}}></div>
                                            </div>
                                          </div>
                                      </div>
                                      )
                                    }
                                  )} 
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

export default WhyJoinYupIT