
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
      <div className="col-md-6">

         <table style={{marginTop:50}} className="table table-hover table-striped">
            <tbody>
             <tr><td style ={{marginRight:30}}> ContractId : {this.props.location.state.id.contract_id} </td></tr>
             <tr><td>ContractStatus : {this.props.location.state.id.contract_status} </td></tr>
             <tr><td> Portfolio : {this.props.location.state.id.portfolio} </td> </tr>
             <tr><td> PortfolioGroup : {this.props.location.state.id.portfolio_group}</td></tr>
             <tr><td> Counterparty : {this.props.location.state.id.counterparty}</td></tr>
             <tr><td> SecurityType : {this.props.location.state.id.security_type}</td></tr>
             <tr><td> SecurityGroup : {this.props.location.state.id.security_group}</td></tr>
             <tr><td> Dealer : {this.props.location.state.id.dealer}</td></tr>
             <tr><td> TradeDate : {this.props.location.state.id.trade_date}</td></tr>
             <tr><td>  SettlementDays : {this.props.location.state.id.settlement_days}</td></tr>
             <tr><td> SettlementDate : {this.props.location.state.id.settlement_date}</td></tr>
            </tbody>
         </table>
      </div>
     </div>
           
    );
  }
}