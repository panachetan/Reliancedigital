import { LightningElement } from 'lwc';
import createAccountRecord from '@salesforce/apex/Accountprovider.createAccountRecord';

export default class Day4Component extends LightningElement {

objAccount = {'sobjectType' : 'Account'}



savebuttonhandler(){
    this.objAccount.Name = this.template.querySelector('lightning-input[data-formfield="accountName"] ').value;
    this.objAccount.Type = this.template.querySelector('lightning-input[data-formfield="accountType"] ').value;
    
    createAccountRecord({objAcc : this.objAccount})
    .then((result) =>{
        this.result = result;
        this.error = undefined;
    })
    
    .catch((error)=>{
    this.error=this.error;
    this.result=undefined;

    })
    
}

}