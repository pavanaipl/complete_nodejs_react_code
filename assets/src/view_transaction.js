
//eslint-disable import/first
/* eslint-disable import/first */

import React, {Component} from 'react';
import {Form, Field} from 'simple-react-forms';

import axios, { post } from 'axios';
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
//eslint-disable import/first
import { Modal } from 'react-bootstrap';
//eslint-disable import/first
import Select from 'react-select';
//eslint-disable import/first

export default class ViewTrasactionDetails extends Component {


  constructor(props) {
        super(props);
        this.state = {
         
         
           
        };        
        
    }
// componentDidMount() {



// }
  

  

 
  render () {

   
    return (
    <div className="container-fluid custom_container" style={{height:100}}>
      <div className="col-md-12">

         <table style={{marginTop:50}} className="table table-hover table-striped">
           <thead>
                    <tr>
                          <th>ContactId</th>
                          <th >Contract Status</th>
                          <th >Portfolio</th>
                          <th >Portfolio Group</th>
                          <th >Counterparty</th>
                          <th >SecurityType</th>
                          <th >SecurityGroup</th>
                          <th >Dealer</th>
                          <th >TradeDate</th>
                          <th >Settlement Days</th>
                          <th >Settlement Date</th>
                          
                    </tr>
            </thead>



            <tbody>
             <tr> 
                 <td>{this.props.location.state.id.contract_id} </td>
                 <td>{this.props.location.state.id.contract_status} </td>
                 <td>{this.props.location.state.id.portfolio} </td> 
                 <td>{this.props.location.state.id.portfolio_group}</td>
                 <td>{this.props.location.state.id.counterparty}</td>
                 <td>{this.props.location.state.id.security_type}</td>
                 <td>{this.props.location.state.id.security_group}</td>
                 <td>{this.props.location.state.id.dealer}</td>
                 <td>{this.props.location.state.id.trade_date}</td>
                 <td>{this.props.location.state.id.settlement_days}</td>
                 <td>{this.props.location.state.id.settlement_date}</td>
             </tr>
            </tbody>
         </table>
      </div>
     </div>
           
    );
  }
}