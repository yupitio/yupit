import React , {useState } from 'react'
import ReactDOM from "react-dom";
import { Link, StaticQuery, graphql } from 'gatsby'
import ReactModal from 'react-modal'
import {  DirectLink, Element , Events, animateScroll, scrollSpy, scroller } from 'react-scroll'

class CalculatorSliderSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    
    }
  }
	handleModalOpen = () => {
		this.setState({ isModalOpen: true})
	
	}
  
	handleModalClose = event => {
	this.setState({ isModalOpen: false })
	}
	
	gotodiv = event => {
		scroller.scrollTo('calculator-section-5', {
				duration: 2000,
				delay: 100,
				offset : -35,
				smooth: 'easeInOutQuart'
			  });
	}
	

render() {
  

 


  const CalculatorMainSliderText = this.props.data.allWordpressAcfCalculatorpage;
  return(
      <>
        {CalculatorMainSliderText && CalculatorMainSliderText && CalculatorMainSliderText.edges.map(
          prop => {
            return (
              <>
                  <section className="calculator-section-1 mb-4" >
                        <div className="container">
                            <div className="row">
                              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-8">
                                  <div className="slick-slider-1">
                                    <div className="slider-content">
                                            <h1 className="section-heading mb-2">{prop.node.acf.calculator_page_section_1_heading}</h1>
                                        <div className="label-text mt-4" dangerouslySetInnerHTML={{ __html: prop.node.acf.calculator_page_section_1_description}}></div>
                                        <div className="row">
                                          <div className="col-xl-6 col-lg-8 col-md-8 col-8">
                                            <button onClick={this.gotodiv} className="btn btn-default btn-block CalculateNowBtn">Calculate Now</button>
                                          </div>
                                        </div>
                                    </div>
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
                <iframe className="embed-responsive-item" src="https://youtu.be/pozK-668Ams?rel=0" allowfullscreen></iframe>
            </div>
              
          </div>
        
        </div>
      </div>
     
        
    
    
      </ReactModal>
      </>
      
)

}
}




const CalculatorSlider = () => (
  <StaticQuery
    query={graphql`
      query {
          allWordpressAcfCalculatorpage {
            edges {
              node {
                acf {
                  calculator_page_section_1_description
                  calculator_page_section_1_heading
                }
              }
            }
          } 
        }
    `}
    render={(data) => <CalculatorSliderSection data={data} />}
  
    />
)

export default CalculatorSlider