import React , {useState } from 'react'
import ReactDOM from "react-dom";
import { Link, StaticQuery, graphql } from 'gatsby'
import WhatAreThePotentialareasImg from "../../img/calculator/WhatAreThePotentialareasMobile.png"

const WhatAreThePotentialareas = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressAcfCalculatorpage {
          edges {
            node {
              acf {
                
                  what_are_the_potential_areas_heading
                  what_are_the_potential_areas_description
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
       <section className="calculator-section-3">
       
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-lg-6 col-md-7">
              {data &&
                        data.allWordpressAcfCalculatorpage &&
                        data.allWordpressAcfCalculatorpage.edges &&
                        data.allWordpressAcfCalculatorpage.edges.map(
                          prop => {
                            return (<>
                  <h2 className="section-heading mb-2" dangerouslySetInnerHTML={{ __html: prop.node.acf.what_are_the_potential_areas_heading }}></h2>
                  <div className="label-text" dangerouslySetInnerHTML={{ __html: prop.node.acf.what_are_the_potential_areas_description }}></div>
                  <div className="text-center">
                  <img src={WhatAreThePotentialareasImg} className="img-fluid d-inline d-md-none"  alt="Calculate your revenue increase"/>
                  
                  
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

export default WhatAreThePotentialareas