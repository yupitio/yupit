import React , {useState } from 'react'
import ReactDOM from "react-dom";
import { Link, StaticQuery, graphql } from 'gatsby'
import Slider from "react-slick";
import ReactModal from 'react-modal'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";





const HowJoinYupIT = () => (
  <StaticQuery
    query={graphql`
      query {
            allWordpressWpImbusinessmain {
                edges {
                node {
                    acf {
                    how_to_join_yupit_section_heading
                    how_to_join_yupit_section_sub_heading
                    how_to_join_yupit_topics {
                        description
                        heading
                        icon {
                        localFile {
					childImageSharp {
					  id
					  fixed(base64Width: 100) {
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
                        <section className="imbusiness-section-5">
                          <div class="container">
                              <h2 class="section-heading text-center mb-2">{prop.node.acf.how_to_join_yupit_section_heading}</h2>
                              <p className="sub-heading text-center mb-4">{prop.node.acf.how_to_join_yupit_section_sub_heading}</p>
                              <div class="row d-flex justify-content-between">
                                  {prop.node.acf.how_to_join_yupit_topics.map(
                                    (prop1,i) =>{
                                      return (
                                        <div class="col-lg-4 mb-4 howsjoinYupit">
                                            <div className=" text-center card">
                                                <span className="card-bg"></span>
                                                <div className="card-body">
                                                    <div className="thumbnial-image  mb-4">
                                                        <img src={prop1.icon.localFile.childImageSharp.fixed.base64} class="img-fluid d-inline" alt=""/>
                                                    </div>
                                                    <div className="thumbanial-content">
                                                        <h3 clssName="section-heading-2 text-dark">{prop1.heading}</h3>
                                                        <div className="label-text" dangerouslySetInnerHTML={{ __html: prop1.description}}></div>
                                                    </div>
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

export default HowJoinYupIT