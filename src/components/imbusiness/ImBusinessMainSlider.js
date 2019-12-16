import React , {useState } from 'react'
import ReactDOM from "react-dom";
import { Link, StaticQuery, graphql } from 'gatsby'
import Slider from "react-slick";
import ReactModal from 'react-modal'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class ImBusinessMainSliderSection extends React.Component {
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

 


  const ImBusinessMainSliderText = this.props.data.allWordpressWpImbusinessmain;
  return(
      <>
      {ImBusinessMainSliderText && ImBusinessMainSliderText && ImBusinessMainSliderText.edges.map(
                                    prop => {
                                      return (
                                        <>
      <section className="imbusiness-section-1 mb-4" >
            <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8 col-md-8   text-center">
                      <div className="slick-slider">
                        <div className="slider-content">
                            
                                     
                              <Slider {...settings} >
                              {prop.node.acf.sub_heading.map(
                                (prop1,i) =>{
                                  return (
                                  <>
                                    {(i <= 0)?( <h1 className="section-heading mb-3" dangerouslySetInnerHTML={{ __html: prop1.sub_heading_title}}></h1>):(<h2 className="section-heading mb-3" dangerouslySetInnerHTML={{ __html: prop1.sub_heading_title}}></h2>)}
                                  </>
                                  )  
                              }
                              )}
                                </Slider>
                           
                         </div>
                      </div>
                      <div className="label-text mb-4" dangerouslySetInnerHTML={{ __html: prop.node.acf.short_description}}></div>
                      <div className="text-center">
                        <div onClick={() => this.handleModalOpen()} className="play-button-group  d-none d-sm-none  d-md-block"><span className="btn btn-success"><i className="fa fa-play"></i></span> <span className="btn-text">Check out our quick introduction</span></div>
                        <div  onClick={() => this.handleModalOpen()} className="btn btn-success  d-inline d-sm-inline  d-md-none mb-4"><i className="fa fa-play"></i> Play Video</div>
                      </div>
                    </div>
                   
                </div>
            </div>

          </section>
          </>
                                      )
                                    }
                                  )}
      

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
          {ImBusinessMainSliderText && ImBusinessMainSliderText && ImBusinessMainSliderText.edges.map(
                                    prop2 => {
                                      return (
                                        <>
                <iframe className="embed-responsive-item" src={prop2.node.acf.youtube_video_link+"?rel=0"} allowfullscreen></iframe>
                </>
                )
                                    }
                                  )}
            </div>
          </div>
        </div>
      </div>
      </ReactModal>
      
      </>
      
)

}
}




const ImBusinessMainSlider = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpImbusinessmain {
          edges {
            node {
              acf {
                youtube_video_link
                short_description
                
                sub_heading {
                  sub_heading_title
                }
              }
            }
          }
        }
            
        }
    `}
    render={(data) => <ImBusinessMainSliderSection data={data} />}
  
    />
)

export default ImBusinessMainSlider