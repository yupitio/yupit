import React, { Component } from "react"
import { Index } from "elasticlunr"
 import { Link, StaticQuery, graphql } from 'gatsby'
// Search component
export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
    }
	
  }
 
  render() {
    return (
      <>
       <div class="input-group search-box ">
                              
       <div class="input-group-prepend">
            <button class="btn btn-outline-secondary" type="button" id="button-addon1"><i className="fa fa-search"></i></button>
            
        </div>
        <input type="text" className="form-control" placeholder="Search Keyword" value={this.state.query} onChange={this.search}/>
        <div className="searchResult">
          <ul className="lisearch" >
            {this.state.results.map(page => (
              <li key={page.node.id}>
                <Link to={'/' + page.node.url.replace('http://admin.yupit.io', "blog")} dangerouslySetInnerHTML={{ __html: page.node.title}}></Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </>
    )
  }
  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex)
 
  search = evt => {
    const query = evt.target.value;
	this.setState({query: query});
	
	let filtered=this.props.searchIndex.filter((item)=>{
      return item.node.title.toLowerCase().indexOf(query.toLowerCase()) > -1
    });
    if (query === "") {
      filtered = [];
    }
    this.setState({
      filtered
    })
	
	console.log(filtered);
	this.setState({results: filtered});

  }
}