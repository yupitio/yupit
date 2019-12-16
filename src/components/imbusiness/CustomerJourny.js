import React , {useState } from 'react'
import ReactDOM from "react-dom";
import { Link, StaticQuery, graphql } from 'gatsby'
import Slider from "react-slick";
import ReactModal from 'react-modal'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";





const CustomerJourny = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpImbusinessmain {
          edges {
            node {
              acf {
                journy_section_heading
                journy_section_short_description
                section_content {
                  thumbnial_title
                  thumbnial_description
                  thumbnial_backgroud_image {
                    localFile {
					childImageSharp {
					  id
					  fixed(base64Width: 625) {
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
        <section className="imbusiness-section-3">
          <div class="container">
           
           
                                
                                  <div class="row d-flex justify-content-between">
                                  <div class="col-md-6">
                                  <h2 class="section-heading">{prop.node.acf.journy_section_heading}</h2>
                                  <div className="text-dark" dangerouslySetInnerHTML={{ __html: prop.node.acf.journy_section_short_description}}></div>
                                  </div>
                                    {prop.node.acf.section_content.map(
                                  (prop1,i) =>{
                                    return (
                                      <div class="col-md-6">
                                        <div className="thumbanial">
                                            <div className="thumbnial-image">
                                              <img src={prop1.thumbnial_backgroud_image.localFile.childImageSharp.fixed.base64} class="w-100 img-fluid" alt=""/>
                                            </div>
                                            <div className="thumbanial-content">
                                                <h2 class="section-heading-4 ">{prop1.thumbnial_title}</h2>
                                                <div className="label-text " dangerouslySetInnerHTML={{ __html: prop1.thumbnial_description}}></div>
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
)}
      </>
          
    )
    
    }
    
    />
)

export default CustomerJourny