import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const RecentBlog = () => (
  
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
					  fixed(width: 150, height: 150) {
              src
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
                                <ul className="recent-post">
                                          {data &&
                                    data.allWordpressPost &&
                                    data.allWordpressPost.edges &&
                                    data.allWordpressPost.edges.map(
                                      (prop,i) => {
                                        return (
                                          <>
                                          {(i<=3)?(<li>
                                            <Link to={"blog/"+prop.node.slug}>
                                                    <span className="postion-icon">
                                                        <img src={prop.node.featured_media.localFile.childImageSharp.fixed.src} className="img-fluid" alt=""/>
                                                    </span>
                                                    <h5 className="recent-post-heading">{prop.node.title}</h5>
                                                    <p className="date-and-author">{prop.node.date} | By {prop.node.author.name}</p>
                                            </Link>
                                        </li>):("")}
                                        </>
                                       )
                                      }
                                    )}
                                </ul>
                            
                  
                                </>
                            
      )}
      />
  )
export default RecentBlog;

