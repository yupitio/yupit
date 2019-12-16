import React , {useState,Component } from 'react'
import ReactDOM from "react-dom";
import { Link, StaticQuery, graphql } from 'gatsby'
import CalculateyourrevenueincreaseImg from "../../img/calculator/CalculateYourRevenueIncrease.png"
import Script from 'react-load-script';
import SimpleReactValidator from 'simple-react-validator';
import axios from 'axios';

class CalculateYourRevenueIncrease extends Component {
  // Define Constructor
  constructor(props) {
    super(props);
	this.validator = new SimpleReactValidator();
    // Declare State
    this.state = {
		restaurant_name: '',
		restaurant_o_value: '',
		restaurant_d_capacity: '',
		first_name: '',
		mobile: '',
		email: '',
		query: '',
		IsSubmit: false,
		 shown: "d-none",
		 shown_error: "d-none",
		 error_msg: "",
		 error: "d-none",
    };
	
	this.submitForm = this.submitForm.bind(this);
	this.setRN = this.setRN.bind(this);
	this.setROV = this.setROV.bind(this);
	this.setRDC = this.setRDC.bind(this);
	this.setFN = this.setFN.bind(this);
	this.setM = this.setM.bind(this);
	this.setE = this.setE.bind(this);
	  
  }
  
	
	setRN(e) {
		this.setState({
			restaurant_name: e.target.value
		});	
	}
	setROV(e) {
		this.setState({
			restaurant_o_value: e.target.value
		});
	}
	setRDC(e) {
		this.setState({
			restaurant_d_capacity: e.target.value
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
  
  

  handleScriptLoad = () => {
    // https://medium.com/@hamzaqaisrani/using-the-google-maps-places-autocomplete-javascript-api-in-a-react-project-5742bab4abc9
    const options = {
     
    };
    this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete'),
      options,
    );
    this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
  }
  
	handlePlaceSelect = () => {
		this.setState({
			restaurant_name: document.getElementById('autocomplete').value
		});	
		
		
		
		
		const addressObject = this.autocomplete.getPlace();
		const addressData = JSON.stringify(addressObject);
		const address = addressObject.address_components;
		
		if(address){
			this.setState({ query: addressData,});
		}
	}
	submitForm() {
		if(this.validator.allValid()) {
			//document.getElementById('form').submit()
			
			if(this.state.query == ''){
				this.setState({
					shown_error: "d-block"
				});
				var self = this;
				setTimeout(
						function() {
							self.setState({shown_error: "d-none"});
						},3000);
				
				return false;
			}
			
			
			this.setState({
				IsSubmit: true
			});
			
			var formData = new FormData();
			formData.append("restaurant_name", this.state.restaurant_name);
			formData.append("restaurant_o_value", this.state.restaurant_o_value);
			formData.append("restaurant_d_capacity", this.state.restaurant_d_capacity);
			formData.append("first_name", this.state.first_name);
			formData.append("mobile", this.state.mobile);
			formData.append("email", this.state.email);
			formData.append("restaurantdata", this.state.query);
			
			
			axios({
			method: 'post',
			url: 'https://webapi.yupit.io/calculator/ajax_popular_times_data.php',
			data: formData
			
			})
			.then((response) => {
				
				console.log(response.data.status);
				if(response.data.status == 'fail'){
					this.setState({IsSubmit: false});
					this.setState({error_msg: response.data.msg});
					this.setState({error: "d-block"});
					var self = this;
					setTimeout(
						function() {
							self.setState({error: "d-none"});
						},4000);	
				}
				else{
					this.setState({IsSubmit: false});
					this.setState({restaurant_name: ''});
					this.setState({restaurant_o_value: ''});
					this.setState({restaurant_d_capacity: ''});
					this.setState({first_name: ''});
					this.setState({mobile: ''});
					this.setState({email: ''});
					this.setState({query: ''});
					this.setState({shown: "d-block"});
					this.validator.hideMessages();
					var self = this;
					setTimeout(
						function() {
							self.setState({shown: "d-none"});
						},3000);
					window.location.href = "/thankyou";	
				}
				
			})
			
			
			
			
			
			
			
			
		} else {
			this.validator.showMessages();
		this.forceUpdate();
	  }
	}
  
  
  
  
  

  render() {
    return (
      <div>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyCSO9pwe63cDkwZaY15Az4N99bUvgTH1M8&libraries=places"
          onLoad={this.handleScriptLoad}
        />
		<StaticQuery
    query={graphql`
      query {
        allWordpressAcfCalculatorpage {
          edges {
            node {
              acf {
                calculate_your_revenue_increase_heading
                calculate_your_revenue_increase_description
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
       <section className="calculator-section-5">
          <div className="container">
            <span className="CalculateNowFrom customScrollHide"></span>
			<div className="row justify-content-start">
				
              <div className="col-lg-6 col-md-8">
              {data &&
                            data.allWordpressAcfCalculatorpage &&
                            data.allWordpressAcfCalculatorpage.edges &&
                            data.allWordpressAcfCalculatorpage.edges.map(
                              prop => {
                                return (
                                <>
                     <h2 className="section-heading-3 font-weight-bold" dangerouslySetInnerHTML={{ __html: prop.node.acf.calculate_your_revenue_increase_heading }}></h2>
                    <div className="label-text" dangerouslySetInnerHTML={{ __html: prop.node.acf.calculate_your_revenue_increase_description }}></div>
                    
					
                    <div className="row">
                        <div className="col-md-12 mb-4">
                            <label className="">Restaurant Name &amp; Address*</label>
                            <input type="text" value={this.state.restaurant_name} onChange={this.setRN} id="autocomplete" placeholder="" className="form-control"required/>
							{this.validator.message('Restaurant name', this.state.restaurant_name, 'required')}
							<textarea className="d-none" value={this.state.query}  />
							<div className={"srv-validation-message "+this.state.shown_error}  role="alert">
								Please select the details from the drop-down
							</div>
							
                        </div>
                        <div className="col-md-6 mb-4">
                            <label className="">Average Order Value*</label>
                            <input type="text" value={this.state.restaurant_o_value} onChange={this.setROV} placeholder="" className="form-control"required/>
							{this.validator.message('Average order value', this.state.restaurant_o_value, 'required|numeric|min:1|max:20')}
                        </div>
                        <div className="col-md-6 mb-4">
                            <label className="">Busiest Day Capacity*</label>
                            <input type="text" value={this.state.restaurant_d_capacity} onChange={this.setRDC} placeholder="" className="form-control"required/>
							{this.validator.message('Busiest day capacity', this.state.restaurant_d_capacity, 'required|numeric|min:1|max:100')}
                        </div>
                        <div className="col-md-6 mb-4">
                            <label className="">First Name*</label>
                            <input type="text" value={this.state.first_name} onChange={this.setFN} placeholder="" className="form-control"required/>
							{this.validator.message('First Name', this.state.first_name, 'required|alpha_space')}
                        </div>
                        <div className="col-md-6 mb-4">
                            <label className="">Contact Number*</label>
                            <input type="text" value={this.state.mobile} onChange={this.setM} placeholder="" className="form-control"required/>
							{this.validator.message('Contact Number', this.state.mobile, 'required|numeric|min:9|max:13')}
                        </div>
                        <div className="col-md-12 mb-4">
                            <label className="">Email*</label>
                            <input type="text" value={this.state.email} onChange={this.setE} placeholder="" className="form-control"required/>
							{this.validator.message('Email', this.state.email, 'required|email')}
                        </div>
                        <div className="col-md-12">
                            <div className="row justify-content-center">
                                <div className="col-md-8">
                                <button disabled={this.state.IsSubmit} type="button" onClick={this.submitForm} className="btn btn-default btn-block">
									{ this.state.IsSubmit ? <div className="spinner-border text-light" role="status"><span className="sr-only">Loading...</span></div> : <span>Send me pdf</span> }
								</button>
                                </div>
                            </div>
                        </div>
						<div className="col-md-12 mb-4 mt-2 justify-content-center">
							<p  className={"text-danger text-center "+this.state.error} >{this.state.error_msg}</p>
                        </div>
                      
                        
                    </div>
						
                    
                    <img src={CalculateyourrevenueincreaseImg} className="img-fluid d-flex d-md-none"  alt="Calculate your revenue increase"/>
                  
                
                  </>
                  )
}
)}
     
              </div>
              
            </div>
          </div>
      </section>
        
      </>
    )
    }
    />
        
				
      </div>
    );
  }
}

export default CalculateYourRevenueIncrease;