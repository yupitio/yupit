import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const SocialMenu = () => (
    <StaticQuery
      query={graphql`
        query {
            allWordpressAcfSocial(sort: {fields: id, order: DESC}) {
                edges {
                  node {
                    acf {
                      class
                      link
                    }
                  }
                }
              }
          }
      `}
      render={data => (
               <ul className="social-menu">
                  {data &&
                  data.allWordpressAcfSocial &&
                  data.allWordpressAcfSocial.edges &&
                  data.allWordpressAcfSocial.edges.map(
                  prop => {
                      return (
                        <li className="">
                            <a href={prop.node.acf.link} target="_blank"><i className={'fa '+ prop.node.acf.class}></i></a>
                        </li>
                      )
                  }
                  )}
              </ul>
      )}
      />
  )
  
export default SocialMenu;
