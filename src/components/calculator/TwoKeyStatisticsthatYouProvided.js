import React , {useState } from 'react'
import ReactDOM from "react-dom";
import { Link, StaticQuery, graphql } from 'gatsby'
import TwoKeyStatisticsthatYouProvidedImg from "../../img/calculator/TwoKeyStatisticsthatYouProvidedMobile.png"



const TwoKeyStatisticsthatYouProvided = () => (
  <StaticQuery
    query={graphql`
    query {
        allWordpressAcfCalculatorpage {
          edges {
            node {
              acf {
                two_key_statistics_that_you_provided_heading
                two_key_statistics_that_you_provided_description
                two_key_statistics_that_you_provided_list {
                  statistic_name
                  statistic_value
                  statistics_description
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
       <section className="calculator-section-4">
          <div className="container">
            <div className="row justify-content-start">
           
              <div className="col-lg-6 col-md-8">
              {data &&
                            data.allWordpressAcfCalculatorpage &&
                            data.allWordpressAcfCalculatorpage.edges &&
                            data.allWordpressAcfCalculatorpage.edges.map(
                              prop => {
                                return (
                                <>
                  <h2 className="section-heading" dangerouslySetInnerHTML={{ __html: prop.node.acf.two_key_statistics_that_you_provided_heading}}></h2>
                  <div className="row">
                  {prop.node.acf.two_key_statistics_that_you_provided_list.map(
                              (prop1,i) =>{
                                return (
                                <>
                    <div className="col-md-6 border-right-50">
                      <h3 className="sub-heading d-flex justify-content-between"><span>{prop1.statistic_name}</span> <span className="section-heading-3 text-primary font-weight-bold ">{prop1.statistic_value}</span></h3>
                      <div className="label-text" dangerouslySetInnerHTML={{ __html: prop1.statistics_description}}></div>
                    </div>
                    </>)
                      }
                    )}
                    
                  </div>
                  <div className="label-text" dangerouslySetInnerHTML={{ __html: prop.node.acf.two_key_statistics_that_you_provided_description}}></div>
                  <div className="text-center">
                      <img src={TwoKeyStatisticsthatYouProvidedImg} className="img-fluid d-inline d-md-none"  alt="Calculate your revenue increase"/>
                  
                  
                  </div>
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
)

export default TwoKeyStatisticsthatYouProvided