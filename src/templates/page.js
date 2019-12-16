import React from 'react'
import PropTypes from 'prop-types'
import { Link, StaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Particles from 'react-particles-js';
import Helmet from 'react-helmet'

export const PageTemplate = ({ title, content }) => {
  return (
    <>
    
    <span className="SpaceTop"></span>
    <section className="breadcumbs-section text-center">
      <div className="container">
        <h1 className="heading-main text-center text-white" dangerouslySetInnerHTML={{ __html: title }}></h1>
        <ul className="nav  d-flex justify-content-center breadcumbs-list"> <li><Link to="/">Home</Link></li><li dangerouslySetInnerHTML={{ __html: title }}></li></ul>
      </div>
    </section>
    <div className="particles-main">
        <Particles params={{"particles":{"number":{"value":8,"density":{"enable":false,"value_area":1583.5576706700122}},"color":{"value": ["#FF9C80", "#8DE8D6", "#FECEB2", "#D0EBC4"]},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":25.003542168473878,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":0,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"top-right","random":true,"straight":true,"out_mode":"bounce","bounce":false,"attract":{"enable":false,"rotateX":3583.8410441479223,"rotateY":1166.8319678621144}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":709.4594594594589,"size":177.36486486486473,"duration":0.3378378378378376,"opacity":0.7516891891891886,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}} />
    </div>
    <section className="pt-4 pb-4">
      <div className="container">
        <div className="columns">
          <div className="">
            <div className="">
              <div
                className="wordpress-content"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}


const Page = ({ data }) => {
  const { wordpressPage: page } = data
  return (
    <>
     <Layout>
      <PageTemplate  title={page.title} content={page.content} />
    </Layout>
    </>
  
  )
}
Page.propTypes = {
  data: PropTypes.object.isRequired,
}


export default Page

export const pageQuery = graphql`
  query PageById($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
    }
  }
`


