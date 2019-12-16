import React,{Component} from "react"
import SimpleReactValidator from 'simple-react-validator';
import PropTypes from "prop-types"
import ReactModal from 'react-modal'
class ContactHelpMeBusiness extends Component{
	

    constructor(props) {
        super(props);
		this.validator = new SimpleReactValidator();
        this.state = {
          isModalOpen: false,
		  email: '',
		  query: '',
		  shown: "d-none",
		  shown_error: "d-none",
		  IsSubmit: false,
         
        }
	  this.submitForm = this.submitForm.bind(this);
	  this.email = this.email.bind(this);
	  this.query = this.query.bind(this);
		
		
		
      }
	  
	  email(e) {
		this.setState({
			email: e.target.value
		});
	}
	
	query(e) {
		this.setState({
			query: e.target.value
		});
	}
        handleModalOpen = () => {
            this.setState({ isModalOpen: true})
        
        }
      
        handleModalClose = event => {
        this.setState({ isModalOpen: false })
        }
    
       submitForm(){
		if(this.validator.allValid()) {
			var myarr = ["free", "downloads", "offers", "DA", "PA", "affordable price", "clients", "Some example", "services", "giveaways", "goal", "example", "test", "Marketing", "traffic", "offers","Bitcoin", "ervaringen", "review", "Capsules", "Amoxicillin", "blogger", "supplier", "SEO", "backlinks", "Digital", "Marketing", "link builder", "domain authority", "Off–Page",  "Title Tag Optimization", "Meta Tag Optimization", "keyword", "SERPs"];
			
			var flag = 0;
			for(let i = 0; i < myarr.length; i++){
				if(new RegExp('\\b'+ myarr[i] +'\\b','gi').test(this.state.query) == true){
					flag = 1;
				}
			}
			
			if(flag == 1){
			this.setState({shown_error: "d-block"});
				setTimeout(
					function() {
						this.setState({shown_error: "d-none"});
					}
				.bind(this),
					2000
				);
			}
			else{
				this.setState({IsSubmit: true});
				var request = new XMLHttpRequest();
			request.open('POST', 'https://script.google.com/macros/s/AKfycbwDxTaLEqjgVKGVcbiXhzPMq7sHtkkQr9-S9OJatYETlupOX4rx/exec', true);
			var self = this;
			
			request.onreadystatechange = function() {
				if(request.readyState == XMLHttpRequest.DONE) {
					self.setState({IsSubmit: false});
					self.setState({shown: "d-block"});
					self.validator.hideMessages();
					self.setState({email: ""});
					self.setState({query: ""});
					
					self.validator.hideMessages();
					setTimeout(
						function() {
							self.setState({shown: "d-none"});	
							self.setState({ isModalOpen: false })
						},3000);
				}	
			}
			
			
			var formData = new FormData();
		
			formData.append("form_name", "help_me");
			formData.append("email", this.state.email);
			formData.append("message", this.state.query);
			formData.append("form_name", "Ask the Expert");
			formData.append("url",  "asktheexpert"+window.location.pathname);
			request.send(formData);
			
			}
			
			
		}
		else{
			this.validator.showMessages();
			this.forceUpdate();
		}
	} 
        
        
        
      render (){
        
        return(
          <>
        
         <div className="row justify-content-end">
                      <div className="col-md-7 col-7">
                      <div onClick={() => this.handleModalOpen()} className="btn btn-default text-center btn-default-outline btn-block">Help Me</div>
                        
                      </div>
                    </div>
                        
          <ReactModal  
            isOpen={this.state.isModalOpen}
            onRequestClose={this.handleModalClose}
              className="modal d-block fade testimonial-view show"
          >
              <div className="modal-dialog modal-dialog-centered modal-md" role="document">
            <div className="modal-content ">
                <button type="button" className="close btn-default" onClick={this.handleModalClose} data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
          
              <div className="modal-body p-4">
                <div className="">
                  <h2 className="section-heading-2 font-weight-bold text-center p-2">Ask the Expert</h2>
                  <p className="label-text text-center">Got stuck! Fill up the form below incase you have any query. Our representative will get in touch with you soon.</p>
                  <div className="row">
                      <div className="col-md-12 mb-4">
                          <label className="">Email address*</label>
                          <input type="text" value={this.state.email} onChange={this.email}  placeholder="" className="form-control" required/>
						  {this.validator.message('Email', this.state.email, 'required|email')}
                      </div>
                      <div className="col-md-12 mb-4">
                          <label className="">Post your query here*</label>
                          <textarea type="text" value={this.state.query} onChange={this.query}   placeholder="" className="form-control" required></textarea>
						  {this.validator.message('Query', this.state.query, 'required')}
						   <p  className={"text-danger er-msg "+this.state.shown_error} >Invalid Message.</p>
                      </div>
                      <input  type="hidden" value="help_me" name="form_name"/>
                      <div className="col-md-12 mb-4 text-center">
                          <button disabled={this.state.IsSubmit} type="button" onClick={this.submitForm} className="btn btn-default">
                            { this.state.IsSubmit ? <div className="spinner-border text-light" role="status"><span className="sr-only">Loading...</span></div> : <span>Help Me!</span> }
                        </button>
                      </div>
					   <p  className={"text-success "+this.state.shown} >Thank you contacting us, our support team will get back to you as soon as possible.</p>
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
export default ContactHelpMeBusiness