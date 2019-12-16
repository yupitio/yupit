import React,{Component} from "react"
import SimpleReactValidator from 'simple-react-validator';
import PropTypes from "prop-types"
import { isMobileOnly, isAndroid, isIOS } from 'react-device-detect';
class ContactTextme extends Component{
	
	constructor(props) {
		super(props);
		this.validator = new SimpleReactValidator();
  
		this.state = {
          number: '',
		  shown: "d-none",
		  IsSubmit: false,
		  device: 'as',
		}
		
		if(isMobileOnly){
			if(isAndroid){
				this.state = {
          number: '',
		  shown: "d-none",
		  IsSubmit: false,
		  device: '1',
		}
				
				
			}
			else if(isIOS){
				this.state = {
          number: '',
		  shown: "d-none",
		  IsSubmit: false,
		  device: '2',
		}
				
			}
			else{
				this.state = {
          number: '',
		  shown: "d-none",
		  IsSubmit: false,
		  device: '3',
		}
				
			}	
		}
		else{
			this.state = {
          number: '',
		  shown: "d-none",
		  IsSubmit: false,
		  device: '3',
		}
				
		}
		
		
	  this.submitForm = this.submitForm.bind(this);
	  this.number = this.number.bind(this);
	  
	}
	
	
	number(e) {
		this.setState({
			number: e.target.value
		});
	}

	
	
	
	submitForm(){
		if(this.validator.allValid()) {
			this.setState({IsSubmit: true});	  
			var request = new XMLHttpRequest();
			request.open('POST', 'https://script.google.com/macros/s/AKfycbzDuiKh0AQC1XuoJSEwWbaP8ZGS_GHvUOl_Z4sKBNaiwWDnQxk/exec', true);
			
			var self = this;
			
			request.onreadystatechange = function() {
				if(request.readyState == XMLHttpRequest.DONE) {
					self.setState({IsSubmit: false});
					self.setState({shown: "d-block"});
					self.validator.hideMessages();
					self.setState({number: ""});
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
			formData.append("form_name", "Mobile");
			formData.append("number", this.state.number);
			formData.append("device", this.state.device);
			formData.append("url",  "Home"+window.location.pathname);
			request.send(formData);
		}else{	
			this.validator.showMessages();
			this.forceUpdate();
		}
	}
	
  render (){
    return(
      <>		
		
				<div className="input-group ">
                                            <input type="text" value={this.state.number} onChange={this.number} className="form-control" placeholder="Enter Mobile Number" />
                                            <div className="input-group-append">
                                                <button disabled={this.state.IsSubmit}  onClick={this.submitForm} className="btn btn-default rounded" type="button">{ this.state.IsSubmit ? <div className="spinner-border text-light" role="status"><span className="sr-only">Loading...</span></div> : <span>Text Me</span> }</button>
                                            </div>
                                        </div>			
							<input type="hidden" name="url" id="url" />
							<input  type="hidden" value="contactTextme" name="form_name"/>
							{this.validator.message('Mobile Number', this.state.number, 'required|numeric|min:9|max:13')}
							<p className="mb-3" ></p>
                       
						<p  className={"text-success "+this.state.shown} >YupiT download link has been sent to your mobile no.</p>
    </>
    )
  }
}

export default ContactTextme