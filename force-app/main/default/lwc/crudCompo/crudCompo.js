import { LightningElement } from 'lwc';
import createAccountRecord from '@salesforce/apex/Accountprovider.createAccountRecord';

export default class CrudCompo extends LightningElement {

    accountObject = {'sobjectType' : 'Account'}
    

    createAccountHandler(){
        
        this.accountObject.Name = this.template.querySelector('lightning-input[data-formfield="accountName"]').value
        this.accountObject.Type = this.template.querySelector('lightning-input[data-formfield="accountType"]').value
        this.accountObject.Rating = this.template.querySelector('lightning-input[data-formfield="accountRating"]').value
        this.accountObject.SLA__c = this.template.querySelector('lightning-input[data-formfield="accountSLA"]').value
        
        createAccountRecord({objAcc : this.accountObject})
       .then((result) => {
         this.result = result;
         console.log('message created='+this.result)
         this.error = undefined;
     })
     .catch((error) => {
         this.error = error;
         this.result = undefined;

        });
    }

    searchAccountHandler(){


    }

    updateAccountHandler(){


    }

    deleteAccountHandler(){


    }

}