import React,{Component} from 'react'
import PropTypes from "prop-types"
import { Link, StaticQuery, graphql } from 'gatsby'
import Particles from 'react-particles-js';
import Layout from '../components/Layout'
import Helmet from 'react-helmet';
import Moment from 'react-moment';
import RecentBlog from '../components/Blog/RecentBlog'
import Searchbox from '../components/Search/Searchbox'
import ContactSubscribeBlog from '../components/Contact/ContactSubscribeBlog'


class demopage extends Component {
  render() {
    const blog = this.props.data.allWordpressPost
    const category = this.props.data.allWordpressCategory
	
	
   
   
    return (
		<Layout>
			<Helmet>
				<title>YupiT: Blog for the Tasty recipes and restaurant secrets</title>
				<meta name="title" content="YupiT: Blog for the Tasty recipes and restaurant secrets"></meta>
				<meta property="og:title" content="YupiT: Blog for the Tasty recipes and restaurant secrets"></meta>
				<meta property="twitter:title" content="YupiT: Blog for the Tasty recipes and restaurant secrets"></meta>
				
				
				<meta name="description" content="Get latest updates about the new recipes and other secrets of the restaurant. Read YupiT blog and join Newsletter today."></meta>
				<meta property="og:description" content="Get latest updates about the new recipes and other secrets of the restaurant. Read YupiT blog and join Newsletter today."></meta>
				<meta property="twitter:description" content="Get latest updates about the new recipes and other secrets of the restaurant. Read YupiT blog and join Newsletter today."></meta>
				
				<meta property="og:type" content="website"></meta>
				<meta property="twitter:card" content="summary_large_image"></meta>
            </Helmet>	
			<span className="SpaceTop"></span>
			<div className="particles-main">
                <Particles params={{"particles":{"number":{"value":8,"density":{"enable":false,"value_area":1583.5576706700122}},"color":{"value": ["#FF9C80", "#8DE8D6", "#FECEB2", "#D0EBC4"]},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":25.003542168473878,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":0,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"top-right","random":true,"straight":true,"out_mode":"bounce","bounce":false,"attract":{"enable":false,"rotateX":3583.8410441479223,"rotateY":1166.8319678621144}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":709.4594594594589,"size":177.36486486486473,"duration":0.3378378378378376,"opacity":0.7516891891891886,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}} />
            </div>
			<section className="breadcumbs-section text-center">
              <div className="container">
                <h1 className="heading-main text-center text-white">Our Blog</h1>
                <ul className="nav  d-flex justify-content-center breadcumbs-list"> <li><Link to="/">Home</Link></li><li>Blog</li></ul>
              </div>
            </section>
			<div className="container">
               <div className="row">
                    <div className="col-md-8">
                    {blog &&
                          
                          blog.edges &&
                          blog.edges.map(
                            prop => {
                              return (
                               
                                  <div className="thumbnial mb-4">
                                      <div className="thumbnial-image">

                                          <img src={prop.node.featured_media.localFile.childImageSharp.fixed.base64} className="img-fluid  w-100" alt=""/>
                                        <p className="date btn-default"><span><Moment format="DD">{prop.node.date}</Moment></span><Moment format="MMM">
												{prop.node.date}
											</Moment>
                                        </p>
                                      </div>
                                      <div className="bg-light pl-4 pt-4 pr-4 pb-2">
                                          <Link to={"blog/"+prop.node.slug} className="thumbnial-title mt-4">{prop.node.title}</Link>
                                          <p className="label-text mb-2" dangerouslySetInnerHTML={{ __html: (prop.node.acf.short_description).substring(0, 150)+('...')}}></p>
                                          <div className="d-flex justify-content-between">
                                              <p className="date-and-author ">{prop.node.date} | By {prop.node.author.name}</p>
                                              <ul className="nav ">
                                                <li className="nav-item ">
                                                  <Link to={"blog/"+prop.node.slug} className="nav-link p-2"><i className="fa fa-heart-o"></i></Link>
                                                </li>
                                                <li className="nav-item">
                                                  <Link to={"blog/"+prop.node.slug} className="nav-link p-2"><i className="fa fa-share-alt"></i></Link>
                                                </li>
                                              </ul>
                                          </div>
                                      </div>
                                  </div>
                            
                              )
                            }
                      )}

					<div className="clear-fix justify-content-between row m-2">
			
					{(this.props.pageContext.previousPagePath != "") ? (<Link className="btn btn-default"  to={this.props.pageContext.previousPagePath}>Previous</Link>) : (<Link className="btn btn-primary invisible"  to={this.props.pageContext.previousPagePath}>Previous</Link>)}
					
					
					{(this.props.pageContext.nextPagePath != "") ? (<Link className="btn btn-default" to={this.props.pageContext.nextPagePath}>Next</Link>) : (<Link className="btn btn-primary invisible" to={this.props.pageContext.nextPagePath}>Next</Link>)}
					
					
					
				</div>

                    </div>
                        <div className="col-md-4">
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
                            <div className="sidebar-widget bg-light">
                                <h4 className="sidebar-title">Newsletter</h4>
                                <p className="label-text text-dark">Join Newsletter And Never Miss A Thing!</p>
                                <ContactSubscribeBlog></ContactSubscribeBlog>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
		</Layout>
    )
  }
}

demopage.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default demopage

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
     allWordpressPost(skip: $skip, limit: $limit) {
    edges {
				   node {
                acf {
                  short_description
                }
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