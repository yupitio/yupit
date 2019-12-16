import React,{Component} from "react"
import SimpleReactValidator from 'simple-react-validator';
import PropTypes from "prop-types"
class ContactEmailme extends Component{
	
	constructor(props) {
		super(props);
		this.validator = new SimpleReactValidator();
  
		this.state = {
         
          email: '',
		  shown: "d-none",
		  IsSubmit: false,
       
        
		}
	  this.submitForm = this.submitForm.bind(this);
	  this.email = this.email.bind(this);
	  
	}
	
	
	email(e) {
		this.setState({
			email: e.target.value
		});
	}

	
	
	
	submitForm(){
		if(this.validator.allValid()) {
			this.setState({IsSubmit: true});	  
			var request = new XMLHttpRequest();
			request.open('POST', 'https://script.google.com/macros/s/AKfycbxp04ByFaj-nCDJkqijBrvxGy4VBb3bUvAbbnv-MGTdgaJJjhg/exec', true);
			
			var self = this;
			
			request.onreadystatechange = function() {
				if(request.readyState == XMLHttpRequest.DONE) {
					self.setState({IsSubmit: false});
					self.setState({shown: "d-block"});
					self.validator.hideMessages();
					self.setState({email: ""});
					self.validator.hideMessages();
					setTimeout(
						function() {
							self.setState({shown: "d-none"});	
						},3000);
				}	
			}
			
			var formData = new FormData();
			formData.append("first_name", "Friend");
			formData.append("last_name", "Friend");
			formData.append("form_name", "Email Me");
			formData.append("url",  "Home"+window.location.pathname);
			formData.append("email", this.state.email);
			request.send(formData);
		}else{	
			this.validator.showMessages();
			this.forceUpdate();
		}
	}
	
  render (){
    return(
      <>
     
						<div className="input-group">
							<input type="text" className="form-control" value={this.state.email} onChange={this.email} name="email" placeholder="Enter Email Address" />
							<input  type="hidden" value="contactEmailme" name="form_name"/>
							<div className="input-group-append">
								<button disabled={this.state.IsSubmit}  onClick={this.submitForm} className="btn btn-default btn-default-outline rounded" type="button">{ this.state.IsSubmit ? <div className="spinner-border" role="status"><span className="sr-only">Loading...</span></div> : <span>Email Me</span> }</button>
							</div>
						</div>	
							{this.validator.message('Email', this.state.email, 'required|email')}
							<p className="mb-4" ></p>
                       
						<p  className={"text-success "+this.state.shown} >YupiT download link has been sent to your E-mail.</p>
    </>
    )
  }
}

export default ContactEmailme