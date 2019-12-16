import React,{Component} from "react"
import SimpleReactValidator from 'simple-react-validator';
import PropTypes from "prop-types"
class ContactSubscribe extends Component{
	
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

	
	
	
	submitForm() {
	  if (this.validator.allValid()) {
		this.setState({IsSubmit: true});  
		var request = new XMLHttpRequest();
		request.open('POST', 'https://script.google.com/macros/s/AKfycbyzDP1FScOmqlSUyda0LXtp0Jn8pstec63PDTnH2o_pgi7cUq9V/exec', true);
		
		var formData = new FormData();
		var self = this;
		
		request.onreadystatechange = function() {
			if(request.readyState == XMLHttpRequest.DONE) {
				self.setState({shown: "d-block"});
				self.setState({IsSubmit: false});
				self.validator.hideMessages();
				self.setState({email: ""});
				self.validator.hideMessages();
				setTimeout(
					function() {
						self.setState({shown: "d-none"});
					},3000);
				}	
			}
		formData.append("first_name", "Friend");
		formData.append("last_name", "Friend");
		formData.append("form_name", "Subscribe");
		formData.append("email", this.state.email);
		formData.append("url",  "footer"+window.location.pathname);
		request.send(formData);
		
		
		
		
	  } else {
		this.validator.showMessages();
		// rerender to show messages for the first time
		// you can use the autoForceUpdate option to do this automatically`
		this.forceUpdate();
	  }
	}
	
  render (){
    return(
      <>
     
							
		<div className="input-group">
                                <input type="text" value={this.state.email} onChange={this.email} className="form-control" placeholder="Enter Email Address" />
                                
	 								<input  type="hidden" value="subscribe" name="form_name"/>
								<div className="input-group-append">
                                    <button className="btn btn-default rounded" disabled={this.state.IsSubmit} onClick={this.submitForm} type="button">
									{ this.state.IsSubmit ? <div className="spinner-border text-light" role="status"><span className="sr-only">Loading...</span></div> : <span>I Love Rewards</span> }
									</button>
                                </div>
                            </div>					
							
							<input type="hidden" name="url" id="url" />
							{this.validator.message('Email', this.state.email, 'required|email')}
							
                       
						<p  className={"text-success "+this.state.shown} >Thank you for subscribing to our newsletters!!</p>
    </>
    )
  }
}

export default ContactSubscribe