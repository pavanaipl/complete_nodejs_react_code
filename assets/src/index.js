import React, { Component } from 'react';
import '../App.css';
// import {connect} from 'react-redux';
import {BrowserRouter, Route, Switch,Link} from "react-router-dom"
import { Modal } from 'react-bootstrap';
import axios from 'axios';
import ReactDOM from 'react-dom';
import AddTrasactionForm from "./add_transaction_form"
import EditTrasactionForm from "./edit_transaction_form"
import ViewTrasactionDetails from "./view_transaction"

export default class App extends Component {
    constructor(props){
        super(props)
        this.user_information=this.user_information.bind(this);
        
        this.state={
            all_transaction:[],
            showModaltitle:false,
            data_items:{}
        }
    }
    


   componentDidMount() {

    axios.get(`http://localhost:1337/api/trade-information/get`)
            .then((res) => {
              
              console.log(res.data.data)
               this.setState({all_transaction:res.data.data})
            })
            .catch(err => {
                console.log(err);
            });
    
  }


user_information(items){

this.setState({showModaltitle:true, data_items:items})


}

delete_information(id){
  var values={}
  values["id"]=id
  console.log("coming")
 axios.post(`http://localhost:1337/api/trade-information/delete`,values)
            .then((res) => {
              
              console.log(res.data.data)
               this.setState({all_transaction:res.data.data})
            })
            .catch(err => {
                console.log(err);
            });


}


onClickHandler(){

}
    
  
  render() {

    return (
      <div className="App">
            
            <table style={{marginTop:50}} className="table table-hover table-striped">
            <tr>
                          <th style={{padding:20}}colSpan="3">ContactId</th>
                          <th >contract_status</th>
                          <th >portfolio</th>
                          <th >portfolio_group</th>
                          <th >counterparty</th>
                          <th >settlement_days</th>
                          <th >settlement_date</th>
                          <th >Actions</th>
</tr>
                          
                          <tbody>

                          {this.state.all_transaction.map((items,index) => (

                          <tr key={index}>
                            <td style={{textAlign:"center"}} colSpan="3">
                             {items.contract_id}
                            </td>
                            <td >
                             {items.contract_status}
                            </td>

                            <td >
                             {items.portfolio}
                            </td>

                            <td >
                             {items.portfolio_group}
                            </td>

                            <td >
                             {items.counterparty}
                            </td>

                            <td >
                             {items.settlement_days}
                            </td>

                            <td >
                             {items.settlement_date}
                            </td>

                            


                            <td>
                             <Link to={{ pathname: '/edit_transaction', state: { id:items} }}>
                            <button
                              type="button"
                              className="btn btn-xs btn-default"
                              onClick={(e) => this.user_information(items) }
                            >
                              Edit
                            </button>
                             
                             </Link>

                             <Link to={{ pathname: '/view_transaction', state: { id:items} }}>
                              
                            <button
                              type="button"
                              className="btn btn-xs btn-default"
                              
                            >
                              View
                            </button>
                            
                            </Link>

                            <button
                              type="button"
                              className="btn btn-xs btn-default"
                              onClick={(e) => this.delete_information(items.id) }
                            >
                              Delete
                            </button>

                            
                            </td>
                            
                            
                                 
                            
                          </tr>
                          ))}
                             
                          </tbody>

                          


                       </table> 

        <Link to="/add_transaction">
        <button onClick={this.onClickHandler.bind(this)}>Add Transaction</button>
        </Link>
       


      </div>
    );
  }
}


ReactDOM.render((
   
        <BrowserRouter>
          <div>
          
            <Switch>
            <Route path="/" component={App} exact/>
            <Route path="/add_transaction" component={AddTrasactionForm} />
            <Route path="/edit_transaction" component={EditTrasactionForm} />
            <Route path="/view_transaction" component={ViewTrasactionDetails} />
            
           
            </Switch>
            </div>
        </BrowserRouter>

   
        
     
), document.getElementById('root'))