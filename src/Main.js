import React, { Component } from 'react';
import {Switch,Route,withRouter} from 'react-router-dom';
import Add from './Add';
import List from './List';
import Modify from './Modify';
import data from './input.json';

class Main extends React.Component{    
    constructor(props){
      super(props);              
      this.state = {elementList : [], elementTypes : data["elementTypes"], modifyElement : '',modifyElementindex : ''}; 
      this.addToListArray = this.addToListArray.bind(this); 
      this.selectionToModify = this.selectionToModify.bind(this);  
    }

    addToListArray(param1){
      var elementListl = this.state.elementList;
      if(this.state.modifyElementindex != ''){
        elementListl[this.state.modifyElementindex] = param1;
      }else{
        elementListl.push(param1);
      }
      this.setState({elementList:elementListl,modifyElementindex:''});        
    }

    selectionToModify(param1){  
      let element = this.state.elementList[param1];          
      this.setState({modifyElement:element,modifyElementindex :param1});  
      this.props.history.push('/ModifyElement');
    }

    render(){
      return (
        <div>
          <Switch>
            <Route exact path='/AddElement' render={() => <Add elementList={this.addToListArray} />} />
            <Route exact path='/ListElement' render={() => <List eventTypes = {this.state.elementTypes} elementList={this.state.elementList} selectedModifyElement = {this.selectionToModify} />}/>            
            <Route exact path='/ModifyElement' render={() => <Add elementList={this.addToListArray}  modifyElement = {this.state.modifyElement}/>}/>
          </Switch>        
        </div>
      );
    }
  }

  export default withRouter(Main);