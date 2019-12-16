import React , {useState } from 'react'
import ReactDOM from "react-dom";
import { Link, StaticQuery, graphql } from 'gatsby'
import Slider from "react-slick";
import ReactModal from 'react-modal'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleReactValidator from 'simple-react-validator';


class WhitePaper extends React.Component {
  constructor(props) {
    super(props);
    
	
	this.validator = new SimpleReactValidator();
    // Declare State
    this.state = {
		restaurant_name: '',
		restaurant_add: '',
		first_name: '',
		mobile: '',
		email: '',
		IsSubmit: false,
		 shown: "d-none",
		 isModalOpen: false, 
    };
	
	this.submitForm = this.submitForm.bind(this);
	this.setRN = this.setRN.bind(this);
	this.setADD = this.setADD.bind(this);
	this.setFN = this.setFN.bind(this);
	this.setM = this.setM.bind(this);
	this.setE = this.setE.bind(this);
	
	
  }
	setRN(e) {
		this.setState({
			restaurant_name: e.target.value
		});	
	}
	setADD(e) {
		this.setState({
			restaurant_add: e.target.value
		});	
	}	
	setFN(e) {
		this.setState({
			first_name: e.target.value
		});
	}
	setM(e) {
		this.setState({
			mobile: e.target.value
		});
	}
	setE(e) {
		this.setState({
			email: e.target.value
		});
	}
	
	handleModalOpen = () => {
		this.setState({ isModalOpen: true})
	
	}
  
	handleModalClose = event => {
	this.setState({ isModalOpen: false })
	}

	submitForm() {
		if(this.validator.allValid()) {
			//document.getElementById('form').submit()
			this.setState({
				IsSubmit: true
			});
			
			var self = this;
			var request = new XMLHttpRequest();
			request.responseType = 'json';
			request.onreadystatechange = function() {
				if(request.readyState == XMLHttpRequest.DONE) {
					self.setState({IsSubmit: false});
					self.setState({restaurant_name: ''});
					self.setState({first_name: ''});
					self.setState({mobile: ''});
					self.setState({email: ''});
					self.setState({shown: "d-block"});
					self.setState({isModalOpen: false});
					self.validator.hideMessages();
					var path= "https://webapi.yupit.io/download.php"; 
					window.open(path);
					//var path= "https://angry-wescoff-3d0b1d.netlify.com/thankyou/"; 
					window.location.href = "thankyou";
					
					setTimeout(
						function() {
							self.setState({shown: "d-none"});
						},3000);
					
				}
			}
			request.open('POST', 'https://script.google.com/macros/s/AKfycbya658GefeXEAY1KdjsZow2TdjRMHtGjdg62AK0fp5HPTvzTXQ/exec', true);
			var formData = new FormData();
			formData.append("restaurant_name", this.state.restaurant_name);
			formData.append("restaurant_add", this.state.restaurant_add);
			formData.append("first_name", this.state.first_name);
			formData.append("mobile", this.state.mobile);
			formData.append("email", this.state.email);
			formData.append("form_name", "Whitepaper");
			formData.append("url",  "whitepaper"+window.location.pathname);
			
			request.send(formData);
		} else {
			
		
			
		this.validator.showMessages();
		this.forceUpdate();
	  }
	}
render() {
  return(
      <>
   
          
            
          <section className="imbusiness-section-7 whitepaper">
            <div className="container">

           
              <div className="row justify-content-end text-right">
                <div className="col-xl-5 col-lg-7 col-md-8">
                    <p className="sub-heading">70% of customers agree that technology speeds up service and increases order accuracy.</p>
                    <h2 className="section-heading">"The Restauranteur's  Guide to Online Ordering"</h2>
                    <p className="label-text">to learn more about implementing technology at your restaurant.</p>
                    <div onClick={() => this.handleModalOpen()} className="btn btn-success text-center">Read Whitepaper</div>
                 
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
            <button type="button" className="close btn-success" onClick={this.handleModalClose} data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
      
          <div className="modal-body p-4">
			<div>   
					<div className="">
						<h2 className="section-heading text-center p-2">Read whitepaper</h2>
					</div>
                    <div className="row">
                        <div className="col-md-12 mb-4">
                            <label className="">Restaurant Name*</label>
                            <input type="text" tabindex="1" value={this.state.restaurant_name} onChange={this.setRN} id="autocomplete" placeholder="" className="form-control"required/>
							{this.validator.message('Restaurant Name', this.state.restaurant_name, 'required')}
							
                        </div>
                       <div className="col-md-12 mb-4">
                            <label className="">Restaurant Address*</label>
                            <input type="text" tabindex="2" value={this.state.restaurant_add} onChange={this.setADD} id="autocomplete" placeholder="" className="form-control"required/>
							{this.validator.message('Restaurant Address', this.state.restaurant_add, 'required')}
							
                        </div>
                        <div className="col-md-6 mb-4">
                            <label className="">First Name*</label>
                            <input type="text" tabindex="3" value={this.state.first_name} onChange={this.setFN} placeholder="" className="form-control"required/>
							{this.validator.message('First Name', this.state.first_name, 'required|alpha_space')}
                        </div>
                        <div className="col-md-6 mb-4">
                            <label className="">Contact Number*</label>
                            <input type="text" tabindex="4" value={this.state.mobile} onChange={this.setM} placeholder="" className="form-control"required/>
							{this.validator.message('Contact Number', this.state.mobile, 'required|numeric|min:9|max:13')}
                        </div>
                        <div className="col-md-12 mb-4">
                            <label className="">Email*</label>
                            <input type="text" tabindex="5" value={this.state.email} onChange={this.setE} placeholder="" className="form-control"required/>
							{this.validator.message('Email', this.state.email, 'required|email')}
                        </div>
                        <div className="col-md-12  text-center">
                            <div className="row justify-content-center">
                                <div className="col-lg-5 col-md-6 ">
                                <button disabled={this.state.IsSubmit} type="button" onClick={this.submitForm} className="btn btn-success btn-block">
									{ this.state.IsSubmit ? <div className="spinner-border text-light" role="status"><span className="sr-only">Loading...</span></div> : <span>Download now</span> }
								</button>
                                </div>
                            </div>
                        </div>
						<div className="col-md-12 mb-4">
							<div className={"alert alert-success "+this.state.shown}  role="alert">
								Thank you for your interest.Your requested revenue report has been sent to your email!
							</div>
						</div>
					</div>
      </div>
          </div>
        
        </div>
      </div>
     
        
    
    
      </ReactModal>

   
      </>
      
)

}
}
     
        
    
export default WhitePaper