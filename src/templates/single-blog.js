import React, {Component} from "react"
import { graphql,Link } from "gatsby"
import PropTypes from "prop-types"
import Layout from '../components/Layout'
import Particles from 'react-particles-js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'moment-timezone';
import RecentBlog from '../components/Blog/RecentBlog'
import Searchbox from '../components/Search/Searchbox'
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'
import Helmet from 'react-helmet'
import {
  FacebookShareCount,
  PinterestShareCount,
  VKShareCount,
  OKShareCount,
  RedditShareCount,
  TumblrShareCount,

  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  LineShareButton,
  WeiboShareButton,
  PocketShareButton,
  InstapaperShareButton,

  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  OKIcon,
  TelegramIcon,
  WhatsappIcon,
  RedditIcon,
  TumblrIcon,
  MailruIcon,
  EmailIcon,
  LivejournalIcon,
  ViberIcon,
  WorkplaceIcon,
  LineIcon,
  PocketIcon,
  InstapaperIcon,
} from 'react-share';


class Singleblog extends Component {
  render() {
    const blog = this.props.data.allWordpressPost
	
    const category = this.props.data.allWordpressCategory
    const shareUrl = this.props.location.href;
    const shareimage = this.props.location.origin+""+blog.edges[0].node.featured_media.localFile.childImageSharp.fixed.srcWebp;
    const title = "YupIT - "+blog.edges[0].node.title;
	const id = this.props.data.allWordpressPost.edges[0].node.wordpress_id;
	const previous = this.props.pageContext.previous;
	const next = this.props.pageContext.next;
	
	let disqusConfig = {
    url: "",
    identifier: id,
    title: title,
  }
    return (

        <Layout>
		<Helmet>
		<title>{blog.edges[0].node.title} | Yupit</title>
		<meta name="title" content={blog.edges[0].node.title}></meta>
		<meta name="description" content={blog.edges[0].node.yoast.metadesc}></meta>
		 <meta name="keywords" content={blog.edges[0].node.yoast.metakeywords}></meta>
		<meta property="og:type" content="website"></meta>
		<meta property="og:image" content={shareimage}/>
		<meta property="og:title" content={blog.edges[0].node.title}></meta>
		<meta property="og:description" content={blog.edges[0].node.yoast.opengraph_description}></meta>
		<meta property="twitter:card" content="summary_large_image"></meta>
		<meta property="twitter:title" content={blog.edges[0].node.yoast.title}></meta>
		<meta property="twitter:description" content={blog.edges[0].node.yoast.twitter_description}></meta>
		</Helmet>
        <span className="SpaceTop"></span>
           <section className="breadcumbs-section text-center">
              <div className="container">
                <h1 className="heading-main text-center text-white">Our Blog</h1>
                <ul className="nav  d-flex justify-content-center breadcumbs-list"> <li><Link to="/">Home</Link></li><li><Link to="/blog">Blog</Link></li><li>{blog.edges[0].node.title}</li></ul>
              </div>
            </section>
            <div className="particles-main">
                <Particles params={{"particles":{"number":{"value":8,"density":{"enable":false,"value_area":1583.5576706700122}},"color":{"value": ["#FF9C80", "#8DE8D6", "#FECEB2", "#D0EBC4"]},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":25.003542168473878,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":0,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"top-right","random":true,"straight":true,"out_mode":"bounce","bounce":false,"attract":{"enable":false,"rotateX":3583.8410441479223,"rotateY":1166.8319678621144}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":709.4594594594589,"size":177.36486486486473,"duration":0.3378378378378376,"opacity":0.7516891891891886,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}} />
            </div>
            <div className="container">
                <h2 className="heading-second">
                    
                </h2>
                <div className="row">
                    <div className="col-lg-8">                   
                               
                                  <div className="thumbnial mb-4">
                                      <div className="thumbnial-image">
                                          <img src={blog.edges[0].node.featured_media.localFile.childImageSharp.fixed.base64} className="img-fluid  w-100" alt=""/>
                                      </div>
									  
									  
                  <div className="pl-4 pt-4 pr-4 pb-2">
                        <p className="sub-heading text-center ">{blog.edges[0].node.date}</p>
                        <h1 className="heading-second mt-4 mb-4 text-center" dangerouslySetInnerHTML={{ __html: blog.edges[0].node.title}}></h1>
                        <div className="Demo__container">
										<div className="Demo__some-network">
                    <ul className="ShareAndLikeSection">
                        <li><i className="fa fa-heart-o  mr-2"></i>15</li>
                        <li className="shareListbutton"><i className="fa fa-share-alt mr-2"></i> Share
                        <ul className="shareList">
											<li>
												<FacebookShareButton
                        url={shareUrl}
                      
												quote={title}
												className="Demo__some-network__share-button">
													<FacebookIcon className="shareIconi"
													  size={30}
													  round  />
                            <span className="shareBtnLabel">Facebook</span>
                           
												</FacebookShareButton>
											  </li>
                          <li>
                            <TwitterShareButton
                              url={shareUrl}
                              title={title}
                              className="Demo__some-network__share-button">
                              <TwitterIcon
                                size={30}
                                round />
                              <span className="shareBtnLabel">Twitter</span>
                            </TwitterShareButton>
                          </li>
                          <li>
                          <PinterestShareButton
                          url={shareUrl}
                          media={shareimage}
                          windowWidth={1000}
                          windowHeight={730}
                          className="Demo__some-network__share-button">
                          <PinterestIcon size={30} round />
                          <span className="shareBtnLabel">Pinterest</span>
                          </PinterestShareButton>
                          </li>
                          <li>
                          <EmailShareButton
                          url={shareUrl}
                          subject={title}
                          body="body"
                          className="Demo__some-network__share-button">
                          <EmailIcon
                            size={30}
                            round />
                            <span className="shareBtnLabel">Email</span>
                          </EmailShareButton>
                          </li>
                          
                        </ul>

                        </li>
                    </ul>
										
									  
										  
										  
										  
									  </div>
                  </div>
                        <div className="wordpress-content" dangerouslySetInnerHTML={{ __html: blog.edges[0].node.content}}>
                    </div>
                  </div>
                 
              </div>
                <div className=" nav-controls   clearfix text-center    mb-4 pl-2 pr-2">
										{(previous != null) ? (<Link to={"blog/"+previous.node.slug+"/"} className="p-2 d-inline">
										   <span className="label-text "><i className="fa fa-angle-double-left mr-1"></i> Previous</span>
									
										</Link>) : (<a href="javascript:;" className="disabled d-inline p-2" disabled="disabled">
										   <span className="label-text  "><i className="fa fa-angle-double-left mr-1"></i> Previous</span>
										 
										</a>)}
 
                    |

                     
                    {(next != null) ? (<Link to={"blog/"+next.node.slug+"/"} className="d-inline  p-2">
										   <span className="label-text  ">Next  <i className="fa fa-angle-double-right ml-1"></i></span>
										</Link>) : (<a href="javascript:;" className="disabled d-inline p-2" disabled="disabled">
										   <span className="label-text  ">Next <i className="fa fa-angle-double-right ml-1"></i> </span>
										 
										</a>)}
                    
										
                  


									
										
                </div>
								  
								  
                             <div className="container bg-white mb-4 pb-4">
					  <Disqus config={disqusConfig} />
					  </div>
                         

                    </div>
                        <div className="col-lg-4">
                            <div className="sidebar">
                            <div className="sidebar-widget bg-light">
                                <Searchbox />
                            </div>
                            <div className="sidebar-widget bg-light">
                                <h4 className="sidebar-title">Categories</h4>
                                <ul className="Categary-list">
                              
                                    {category &&
												
                                        category.edges &&
                                        category.edges.map(
                                    propd => {
                                      return (
                                        <>
                                        {(propd.node.slug == "uncategorized")?(""):(<li><Link to={"category/"+propd.node.slug}>{propd.node.name}</Link></li>)}
                                        </>
                                       )
                                      }
                                    )}
                                </ul>
                            </div>
                            <div className="sidebar-widget bg-light">
                                <h4 className="sidebar-title">Recent Post</h4>
                                <RecentBlog></RecentBlog>
                            </div>
                           
                        </div>
                    </div>

                    
                </div>
            </div>
        </Layout>
    )
  }
}

Singleblog.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Singleblog

export const pageQuery = graphql`
  query($id: String!) {
    allWordpressPost(filter: {id: { eq: $id }}) {
		edges {
			next {
				id
				slug
				title
				categories {
				  slug
				}
			}	
			previous {
				id
				slug
				title
				categories {
				  slug
				}
			}
			node {
				id
				title
				content
				wordpress_id
				slug
                featured_media {
                    localFile {
					childImageSharp {
					  id
					  fixed(base64Width: 800) {
              base64
					  }
					}
				  }
                }
                date(formatString: "MMMM DD, YYYY")
				author {   
				  name
				  description
				  avatar_urls {
					wordpress_96
				  }
				}
				yoast {
				focuskw
				linkdex
				meta_robots_adv
				meta_robots_nofollow
				meta_robots_noindex
				metadesc
				metakeywords
				opengraph_description
				opengraph_image
				opengraph_title
				redirect
				title
				twitter_description
				twitter_image
			  }
				
			}
		}
    }
    allWordpressCategory {
      edges {
        node {
        id
        name
        slug
        }
      }
      }
    
	
	
  }
  
`