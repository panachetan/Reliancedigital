import { LightningElement, track } from 'lwc';
import getRelatedContactfromAccount from '@salesforce/apex/Accountprovider.getRelatedContactfromAccount';

export default class ParentCompo extends LightningElement {

    salary=200
    emplyeeName='chetan'
    car={
        "Make":"Honda",
        'Model':'City'
    }
     conList

    @track ObjAccount = {'sObjectType' : 'Account'}

    sendButtonHandler(){
        this.ObjAccount.Name = this.template.querySelector('lightning-input[data-formfield="AccName"]').value;

        getRelatedContactfromAccount({AccName : this.ObjAccount})
        .then((result) =>{
            this.conList = result;
            console.log('related contact='+JSON.stringify(this.conList));

        })
        .catch((error) =>{
            console.log('error message'+error);
        })
    }
}