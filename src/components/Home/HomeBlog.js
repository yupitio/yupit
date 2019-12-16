import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const HomeBlog = () => (
  
    <StaticQuery
      query={graphql`
        query {
          allWordpressPost(limit: 3) {
            edges {
              node {
                acf {
                  short_description
                }
                featured_media {
                  localFile {
					childImageSharp {
					  id
					  fixed(base64Width: 350) {
              base64
            }
            fluid(base64Width: 640) {
              base64
            }
					}
				  }
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
        }
      `}
      render={data => (
        <>
            <section className="home-section-7">
              <div className="container">
                          <h2 className="section-heading text-center pb-4">Our Blog Resources</h2>
                          <div className="row justify-content-center">
                          {data &&
                          data.allWordpressPost &&
                          data.allWordpressPost.edges &&
                          data.allWordpressPost.edges.map(
                            prop => {
                              return (
                                <div className="col-lg-4 col-md-6 mb-4">
                                  <div className="thumbnial">
                                      <div className="thumbnial-image">
                                          <img src={prop.node.featured_media.localFile.childImageSharp.fluid.base64} className="img-fluid" alt=""/>
                                      </div>
                                      <div className="thumbnial-content card">
                                          <p className="date-and-author">{prop.node.date} | By {prop.node.author.name}</p>
                                          <h4 className="thumbnial-title">{prop.node.title}</h4>
                                          <div className="label-text mb-4" dangerouslySetInnerHTML={{ __html: (prop.node.acf.short_description).substring(0, 150)+('...')}}></div>
                                        <Link to={"blog/"+prop.node.slug} className="nav-link p-0"> Read More</Link>
                                      </div>
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
export default HomeBlog;
