import React,{Component} from "react"
import SimpleReactValidator from 'simple-react-validator';
import PropTypes from "prop-types"
class ContactSubscribeBlog extends Component{
	
	constructor(props) {
		super(props);
		this.validator = new SimpleReactValidator();
  
		this.state = {
         
          email: '',
		  shown: "d-none",
       
        
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
		var request = new XMLHttpRequest();
		request.open('POST', 'https://script.google.com/macros/s/AKfycbwe7pPyrsVy4unlLIdaaECvVbJNued3enMZ1tLM893lYlnPn-dy/exec', true);
		
		var formData = new FormData();
		
		formData.append("first_name", "Friend");
		formData.append("last_name", "Friend");
		formData.append("form_name", "Newsletter");
		formData.append("email", this.state.email);
		formData.append("url",  "footer"+window.location.pathname);
		request.send(formData);
		
		this.setState({shown: "d-block"});
		
		this.setState({email: " "});
		setTimeout(
			function() {
				this.setState({shown: "d-none"});
				
			}
			.bind(this),
			3000
		);
		
		
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
     <input type="email" value={this.state.email} onChange={this.email} name="email" className="form-control " placeholder="Enter Email"/>
	 
	 {this.validator.message('Email', this.state.email, 'required|email')}
	 <p className="mb-3" ></p>
	 
	 <input  type="hidden" value="newsletter" name="form_name"/>
	<button onClick={this.submitForm} type="button" className="btn btn-default btn-block">I LOVE REWARDS</button> 
		
							
							<input type="hidden" name="url" id="url" />
							
							
                       
						<p  className={"text-success "+this.state.shown} >Thank you for subscribing to our newsletters!!</p>
    </>
    )
  }
}

export default ContactSubscribeBlog