import React from 'react'
import Layout from '../components/Layout'
import { Link, StaticQuery, graphql } from 'gatsby'
import Particles from 'react-particles-js';
import Helmet from 'react-helmet';

const NotFoundPage = () => (
  
  <Layout>
      <Helmet>
        <title>Yupit</title>
      </Helmet>
      <div className="particles-main">
          <Particles params={{"particles":{"number":{"value":8,"density":{"enable":false,"value_area":1583.5576706700122}},"color":{"value": ["#FF9C80", "#8DE8D6", "#FECEB2", "#D0EBC4"]},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":25.003542168473878,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":0,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"top-right","random":true,"straight":true,"out_mode":"bounce","bounce":false,"attract":{"enable":false,"rotateX":3583.8410441479223,"rotateY":1166.8319678621144}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":709.4594594594589,"size":177.36486486486473,"duration":0.3378378378378376,"opacity":0.7516891891891886,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}} />
      </div>
      <section className="error-404-page-section">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-8">
              <span className="text-404 mb-0">404</span>
              <h1 className="section-heading-2 font-weight-bold mb-2">Oops! Page Not Found</h1>
              <p className="label-text"> The page you are looking for was moved, removed, renamed or might never existed.</p>
              <Link to="/" className="btn btn-success mt-2 mb-2">Go Home</Link>  
            </div>
          </div>
        </div>
    </section>
  </Layout>

)

export default NotFoundPage