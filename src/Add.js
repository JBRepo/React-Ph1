import React, { Component } from 'react';


class Add extends React.Component{
    constructor(props){
        super(props);           
    }

    getCheckedBoxes(chkboxName) {
        var checkboxes = document.getElementsByName(chkboxName);
        var checkboxesChecked = [];       
        for (var i=0; i<checkboxes.length; i++) {         
           if (checkboxes[i].checked) {
              checkboxesChecked.push(checkboxes[i].value);
           }
        }   
        console.log("checkboxs :" ,checkboxesChecked);     
        return checkboxesChecked.length > 0 ? checkboxesChecked : null;
      }

    getValues(){
        console.log("inside getvALUES");        
        /*var eventType = document.getElementById("eventType").value;
        console.log(eventType);
        var dipendant = document.getElementById("dipendant").value;
        console.log(dipendant);
        var osservazione = document.getElementById("osservazione").value;
        console.log(osservazione);
        var descrizioneEvento = document.getElementById("descrizioneEvento").value;
        console.log(descrizioneEvento);
        var soln = document.getElementById("soln").value;       
        console.log(soln);  */
        var elementJson = {"eventType":document.getElementById("eventType").value,
                           "dipendant":document.getElementById("dipendant").value,
                           "observazione":document.querySelector('input[name="osservazione"]:checked').value,
                           "descrizioneEvento":document.getElementById("descrizioneEvento").value,
                           "soln":this.getCheckedBoxes('soln')};
        console.log(elementJson);
        this.props.elementList(elementJson);    
        alert("Element Successfully added!!!");     
    }

    render(){
        let defaultElement = {};
        var defaultElementSol = [];
        if(this.props.modifyElement !== undefined){
            defaultElement = this.props.modifyElement
            defaultElementSol = defaultElement.soln;                        
        }
        console.log('def element->',defaultElement);
        
        
        console.log('def element->',defaultElementSol);
        console.log("In Render Add Component");
        return (
            <div>
                <table width="75%">
                <tbody>
                 <tr>
                    <td> Type of Event </td>
                    <td>
                        <select id = "eventType" name = "eventType" defaultValue ={defaultElement!==undefined? defaultElement.eventType : 1}>                             
                            <option value="1" >Anomalia </option>
                            <option value="2" >Perdita Operativa </option>
                            <option value="3" >Reclamo </option>
                            <option value="21" >Segnalazione Compliance </option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td> Dipendente Segnalante </td>
                    <td> <input  id="dipendant" name="dipendant" defaultValue={defaultElement!==undefined ? defaultElement.dipendant :''}/> </td>
                </tr>
                <tr>
                    <td> Under observation </td>
                    <td>
                        <input type="radio" id="osservazione" name="osservazione" value="S" defaultChecked = {defaultElement!== undefined && defaultElement.observazione == 'S'? true : false}/> Yes <br></br>
                        <input type="radio" id="osservazione" name="osservazione" value="N" defaultChecked = {defaultElement!== undefined && defaultElement.observazione == 'N'? true : false }/> No
                    </td>
                </tr>
                <tr>
                    <td> Description</td>
                    <td><textarea id = "descrizioneEvento" name="descrizioneEvento" rows="5" cols="80" defaultValue={defaultElement!==undefined ? defaultElement.descrizioneEvento :''}></textarea></td>
                </tr>
                <tr>
                    <td>Solution</td>
                    <td>
                        <input type="checkbox" id = "soln"  name="soln" value="workaround" defaultChecked={defaultElementSol!== undefined && defaultElementSol.indexOf('workaround') > -1 ? true : false} />Workaround<br></br>
                        <input type="checkbox" id = "soln" name="soln" value="caution" defaultChecked={defaultElementSol!== undefined && defaultElementSol.indexOf('caution') > -1 ? true : false}/>Precaution <br></br>
                        <input type="checkbox" id = "soln" name="soln" value="permanent" defaultChecked={defaultElementSol!== undefined && defaultElementSol.indexOf('permanent') > -1 ? true : false}/>Permanent Solution 
                    </td>
                </tr>
                <tr>
                    <td><input type="button" name="Add" value={this.props.modifyElement !==undefined ? 'Modify' : 'Add'} onClick={this.getValues.bind(this)} /> </td>
                </tr>
                </tbody>
                </table>
            </div>
        );
    }
}


export default Add;