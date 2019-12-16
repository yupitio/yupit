import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import aboutMobile from  '../../img/home/about-yupIT-mobile.png';
const AboutYupit = () => (
  
    <StaticQuery
      query={graphql`
        query {
          allWordpressAcfAboutupit {
            edges {
              node {
                acf {
                  about_yupit_description
                  about_yupit_heading
                  about_yupit_image {
                     localFile {
					childImageSharp {
					  id
					  fixed(base64Width: 1161) {
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
          {data &&
            data.allWordpressAcfAboutupit &&
            data.allWordpressAcfAboutupit.edges &&
            data.allWordpressAcfAboutupit.edges.map(
              prop => {
                return (
                  <>
                    <section className="home-section-3">
                      <span className="customScrollHide" id="aboutUs"></span>
                      <div className="container">
                        <div className="text-center">
                          <img src={prop.node.acf.about_yupit_image.localFile.childImageSharp.fixed.base64} width="800" className="image-left wow fadeInLeft d-none d-md-block"  alt=""/>
                          <img src={aboutMobile}  className=" img-fluid wow fadeInLeft d-inline d-md-none" width="280"  alt=""/>
                        </div>
                        <div className="row justify-content-end">
                            <div className="col-lg-6 col-md-8 mb-4">
                              <h2 className="section-heading mb-3">{prop.node.acf.about_yupit_heading}</h2>
                              <div className="wordpress-content" dangerouslySetInnerHTML={{ __html: prop.node.acf.about_yupit_description}}></div>
                            </div>
                          </div>
                      </div>
                    </section>
                  </>
                )
              }
            )} 
        </>
      )}
      />
  )
export default AboutYupit;
