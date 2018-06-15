import React, { Component } from 'react';
import Parser from 'html-react-parser';

class List extends React.Component{

    fetchSelectedElement(){
        console.log("inside fetch slected element");
        let id = document.querySelector('input[name="selectedElement"]:checked').value;
        console.log(id);
        //console.log(this.props.elementList[id]);        
        this.props.selectedModifyElement(id);
    }

    render(){
        console.log("List compoent Loaded");
        console.log(this.props.elementList);        
        var elementList = this.props.elementList;
        var row = "";
        var elementTypesList = this.props.eventTypes;
        console.log("element type list",elementTypesList);
        for(var i in elementList){
            row = row +
                    "<tr>"+
                    "<td><input type='radio' name='selectedElement' value='"+i+"'/></td>"+
                    "<td>"+elementTypesList[elementList[i].eventType]+"</td>"+
                    "<td>"+elementList[i].dipendant+"</td>"+
                    "<td>"+elementList[i].observazione+"</td>"+
                    "<td>"+elementList[i].descrizioneEvento+"</td>"+
                    "<td>"+elementList[i].soln+"</td>"+
                    "</tr>";
        }
        var modifyButton = "";
        if(row != ""){
            modifyButton = "<input type='button' name='Modify' value='Modify' onClick={this.fetchSelectedElement().bind(this)}/>";
        }
        return(            
            <div>
                <table>
                    <thead>
                        <tr> 
                            <th>Select</th>
                            <th>EventType</th>
                            <th>Dipendant</th>
                            <th>Observazione</th>
                            <th>DescrizioneEvento</th>
                            <th>Soln</th>
                        </tr>
                    </thead>
                    <tbody>
                    {Parser(row)}                       
                    </tbody>
                </table>               
                <input type='button' name='Modify' value='Modify' onClick={this.fetchSelectedElement.bind(this)}/>   
            </div>
        );
    }
}
// <input type="button" name="Modify" value="Modify" onClick={this.fetchSelectedElement.bind(this)} />         
export default List;