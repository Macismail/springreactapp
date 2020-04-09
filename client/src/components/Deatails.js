import React, { Component } from 'react';
import axios from 'axios';
import SingleContact from './SingleContact';
import AddContact from './AddContact';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      contacts: []
     }
  }

  componentDidMount(){
    fetch('http://localhost:8080/api/contacts')
    .then(response => response.json())
    .then(data => this.setState({contacts: data}))
  }


  render() { 
    return (  
      <div className="row">
        <div className="col-md-6">
          <h1 className="text-center">Contact Details</h1>
          <div>
            {this.state.contacts.map((item)=> (
              <SingleContact key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div className="col-md-6">
          <h1 className="text-center">Contact Form</h1>
          <AddContact />
        </div>
      </div>
    );
  }
}
 
export default Details;