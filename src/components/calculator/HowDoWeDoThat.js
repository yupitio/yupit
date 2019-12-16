import React , {useState } from 'react'
import ReactDOM from "react-dom";
import { Link, StaticQuery, graphql } from 'gatsby'
import Chart  from "react-google-charts";
class HowDoWeDoThatSection extends React.Component {
  render(){
    
    

    const HowDoWeDoThatText = this.props.data.allWordpressAcfCalculatorpage;
    return (
        <>
         <section className="calculator-section-2">
         
          <div className="container">
            <div className="row">
              <div className="col-md-6">
           
              {HowDoWeDoThatText && HowDoWeDoThatText && HowDoWeDoThatText.edges.map(
                              prop => {
                                return (<>
                              <h2 className="section-heading mb-2">{prop.node.acf.how_do_we_do_that_heading}</h2>
                  <div className="label-text" dangerouslySetInnerHTML={{ __html: prop.node.acf.how_do_we_do_that_description }}>
                      
                  </div>
                  </>
                  )
}
)}
              </div>
              <div className="col-md-6">
                <div className="polularTimeChart">
                    <div className="polularChart">
                      <h3 className="text-left justify-content-start d-flex"><span className="d-inline">Popular Time</span>  <div className="popoverDiv d-inline">
                          <span className="popoverIcon">?</span>
                            <div className="popoverContent">Based on visits to this place.</div>
                        </div>
                      </h3>
                      <ul className="chartList">
                        <li ><div className="chartBox chartBoxNone" ><span className="cartCoulmn" style={{'min-height': '0px'}}></span><span className="timezone"></span></div><div className="pupoverList"><span><i className="fa fa-group mr-2"></i>8 am:</span> Usaully as busy as it gets</div></li>
                        <li ><div className="chartBox chartBoxNone" ><span className="cartCoulmn" style={{'min-height': '0px'}}></span><span className="timezone"></span></div><div className="pupoverList"><span><i className="fa fa-group mr-2"></i>9 am:</span> Usaully as busy as it gets</div></li>
                        <li ><div className="chartBox" ><span className="cartCoulmn" style={{'min-height': '10px'}}></span><span className="timezone">9a</span></div><div className="pupoverList"><span><i className="fa fa-group mr-2"></i>10 am:</span> Usaully as busy as it gets</div></li>
                        <li ><div className="chartBox" ><span className="cartCoulmn" style={{'min-height': '40px'}}></span><span className="timezone"></span></div><div className="pupoverList"><span><i className="fa fa-group mr-2"></i>11 am:</span> Usaully as busy as it gets</div></li>
                        <li ><div className="chartBox" ><span className="cartCoulmn" style={{'min-height': '60px'}}></span><span className="timezone"></span></div><div className="pupoverList"><span><i className="fa fa-group mr-2"></i>12 pm:</span> Usaully as busy as it gets</div></li>
                        <li ><div className="chartBox" ><span className="cartCoulmn" style={{'min-height': '70px'}}></span><span className="timezone">12p</span></div><div className="pupoverList"><span><i className="fa fa-group mr-2"></i>1 pm:</span> Usaully as busy as it gets</div></li>
                        <li ><div className="chartBox" ><span className="cartCoulmn" style={{'min-height': '65px'}}></span><span className="timezone"></span></div><div className="pupoverList"><span><i className="fa fa-group mr-2"></i>2 pm:</span> Usaully as busy as it gets</div></li>
                        <li ><div className="chartBox" ><span className="cartCoulmn" style={{'min-height': '60px'}}></span><span className="timezone"></span></div><div className="pupoverList"><span><i className="fa fa-group mr-2"></i>3 pm:</span> Usaully as busy as it gets</div></li>
                        <li ><div className="chartBox" ><span className="cartCoulmn" style={{'min-height': '75px'}}></span><span className="timezone">3p</span></div><div className="pupoverList"><span><i className="fa fa-group mr-2"></i>4 pm:</span> Usaully as busy as it gets</div></li>
                        <li ><div className="chartBox" ><span className="cartCoulmn" style={{'min-height': '85px'}}></span><span className="timezone"></span></div><div className="pupoverList"><span><i className="fa fa-group mr-2"></i>5 pm:</span> Usaully as busy as it gets</div></li>
                        <li ><div className="chartBox" ><span className="cartCoulmn" style={{'min-height': '90px'}}></span><span className="timezone"></span></div><div className="pupoverList"><span><i className="fa fa-group mr-2"></i>6 pm:</span> Usaully as busy as it gets</div></li>
                        <li ><div className="chartBox" ><span className="cartCoulmn" style={{'min-height': '80px'}}></span><span className="timezone">6p</span></div><div className="pupoverList"><span><i className="fa fa-group mr-2"></i>7 pm:</span> Usaully as busy as it gets</div></li>
                        <li ><div className="chartBox" ><span className="cartCoulmn" style={{'min-height': '60px'}}></span><span className="timezone"></span></div><div className="pupoverList"><span><i className="fa fa-group mr-2"></i>8 pm:</span> Usaully as busy as it gets</div></li>
                        <li ><div className="chartBox" ><span className="cartCoulmn" style={{'min-height': '40px'}}></span><span className="timezone"></span></div><div className="pupoverList"><span><i className="fa fa-group mr-2"></i>9 pm:</span> Usaully as busy as it gets</div></li>
                        <li ><div className="chartBox" ><span className="cartCoulmn" style={{'min-height': '20px'}}></span><span className="timezone">9p</span></div><div className="pupoverList"><span><i className="fa fa-group mr-2"></i>10 pm:</span> Usaully as busy as it gets</div></li>
                        <li ><div className="chartBox" ><span className="cartCoulmn" style={{'min-height': '15px'}}></span><span className="timezone"></span></div><div className="pupoverList"><span><i className="fa fa-group mr-2"></i>11 pm:</span> Usaully as busy as it gets</div></li>
                        <li ><div className="chartBox chartBoxNone" ><span  className="cartCoulmn"style={{'min-height': '0px'}}></span><span className="timezone"></span></div><div className="pupoverList"><span><i className="fa fa-group mr-2"></i>12 am:</span> Usaully as busy as it gets</div></li>
                      </ul>
                    </div>
                </div>
              </div>
            </div>
          </div>
      </section>
        
        </>
    )
  }
}

















const HowDoWeDoThat = () => (
  <StaticQuery
    query={graphql`
      query {
          allWordpressAcfCalculatorpage {
            edges {
              node {
                acf {
                  how_do_we_do_that_heading
                  how_do_we_do_that_description
                }
              }
            }
          }
            
        }
    `}
 
     
     render={(data) => <HowDoWeDoThatSection data={data} />}
    
    />
)

export default HowDoWeDoThat