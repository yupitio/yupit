import React, { Component } from "react"
import ReactDOM from "react-dom";
import { Link, StaticQuery, graphql } from 'gatsby'
import ReactModal from 'react-modal'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


class SliderHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      testimonial_img: "",
      testimonial_name: "",
      testimonial_designation: "",
      testimonial_text: "",
    }
  }
	handleModalOpen = () => {
		this.setState({ isModalOpen: true})
	
	}
  
	handleModalClose = event => {
	this.setState({ isModalOpen: false })
	}

render() {

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    speed: 500,
    arrows: false,
    infinite: true,
    cssEase: 'ease-in-out',
    vertical:true,
    mobileFirst: true,
        responsive: [
           
            {
            breakpoint: 576,
                settings: {
                  vertical:false,
                }
            },
            {
            breakpoint: 400,
                settings: {
                  vertical:false,
                }
            }
        ]
  
  };

 


  const HomeMainSliderText = this.props.data.allWordpressWpSlider;
  return(
      <>
     
      <section className="home-section-1 mb-4">
        
            <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-8  col-sm-8">
                      <div className="slick-slider">
                        <div className="slider-content">
                            <Slider {...settings} >
                                  {HomeMainSliderText && HomeMainSliderText && HomeMainSliderText.edges.map(
                                    (prop,i) => {
                                      return (
                                        <>
                                          {(i <= 0)?( <h1 className="section-heading mb-3" dangerouslySetInnerHTML={{ __html: prop.node.title}}></h1>):(<h2 className="section-heading mb-3" dangerouslySetInnerHTML={{ __html: prop.node.title}}></h2>)}
                                        </>
                                      )
                                    }
                                  )}
                            </Slider>
                            <p className="label-text">Pick up tasty food from the best restaurant near you</p>
                            <div  onClick={() => this.handleModalOpen()} className="btn btn-default"><i className="fa fa-play"></i> Play Video</div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
          </section>
      

          <ReactModal  
        isOpen={this.state.isModalOpen}
        onRequestClose={this.handleModalClose}
          className="modal d-block fade testimonial-view show"
      >
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content ">
            <button type="button" className="close btn-default" onClick={this.handleModalClose} data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
      
          <div className="modal-body p-0">
          <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/pozK-668Ams?rel=0" allowfullscreen></iframe>
            </div>
              
          </div>
        
        </div>
      </div>
      </ReactModal>
      </>     
)
}
}




const HomeMainSlider = () => (
  <StaticQuery
    query={graphql`
      query {
          allWordpressWpSlider {
              edges {
                node {
                  title
                }
              }
            }
            
        }
    `}
    render={(data) => <SliderHome data={data}/>}
   
    />
    
)

export default HomeMainSlider