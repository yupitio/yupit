import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const WhyYupit = () => (
  
    <StaticQuery
      query={graphql`
        query {
            allWordpressWpWhyyupit {
              edges {
                node {
                  acf {
                    yupit_title
                    yupit_icon {
                      alt_text
                      localFile {
                      childImageSharp {
                      fixed (base64Width:90){
                        base64
                      }
                      }
                    }
                    }
                    yupit_description
                  }
                }
              }
            }
          }
      `}
      
      render={data => (
        <>
          <section className="home-section-2 bg-light">
                <div className="container">
                    <h2 className="section-heading text-center  mb-4">Why YupiT?</h2>
                    <p className="sub-heading text-center mb-4">YupiT takes care of all your needs from dine-in to pick up !!</p>
                    <div className="row justify-content-center">
                        {data &&
                            data.allWordpressWpWhyyupit &&
                            data.allWordpressWpWhyyupit.edges &&
                            data.allWordpressWpWhyyupit.edges.map(
                              prop => {
                                return (
                                  <div className="col-xl-4 col-lg-6 col-md-6 mb-4 wow fadeInLeft">
                                  <div className="card ">
                                      <img src={prop.node.acf.yupit_icon.localFile.childImageSharp.fixed.base64} width="90"  className="img-fluid mb-4" alt={prop.node.acf.yupit_icon.yupit_title}/>
                                      <h2 className="section-heading-2 mb-3">{prop.node.acf.yupit_title}</h2>
                                      <p className="label-text">{prop.node.acf.yupit_description}</p>
                                  </div>
                              </div>
                                )
                              }
                        )}
                    </div>
                </div>
            </section>
          
          
        </>
      )}
      />
  )
export default WhyYupit;
