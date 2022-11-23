import { LightningElement } from 'lwc';
import createAccountRecord from '@salesforce/apex/Accountprovider.createAccountRecord';
import searchAccount from '@salesforce/apex/Accountprovider.searchAccount';
import updateAccount from '@salesforce/apex/Accountprovider.updateAccount';
import deleteAccount from '@salesforce/apex/Accountprovider.deleteAccount';
import { ShowToastEvent } from 'lightning/platformShowToastEvent' ; 

export default class MyLWCComponent extends LightningElement {

objAccount = {'sobjectType' : 'Account'}
result;
showTableFlag = false
showSpinnerFlag = false

CreateAccountController(){
    console.log('inside js controller');

    this.objAccount.Name = this.template.querySelector('lightning-input[data-formfield="AccountName"]').value;
    this.objAccount.Type = this.template.querySelector('lightning-input[data-formfield="AccountType"]').value;

    createAccountRecord({objAcc : this.objAccount})
        .then((result) => {
            this.result = result;
            console.log('message says='+this.result)
            this.error = undefined;
        }) 
        .catch((error) => {
            this.error = error;
            this.result = undefined;
        });

    
}



SearchAccountController(){
    console.log('at seach controller');
    debugger
    this.showSpinnerFlag = true
    this.objAccount.Name = this.template.querySelector('lightning-input[data-formfield="AccountName"]').value;

    searchAccount({objacc : this.objAccount})
        .then((result) => {
            this.objAccount = result;
            this.showSpinnerFlag = false;
            this.showTableFlag = true;
            
        }) 
        .catch((error) => {
            this.error = error;
            showTableFlag = false
            
        });
}

UpdateAccountController(){
    console.log('at js controller');
    this.objAccount.Name = this.template.querySelector('lightning-input[data-formfield="AccountName"]').value;
    this.objAccount.Type = this.template.querySelector('lightning-input[data-formfield="AccountType"]').value;

    updateAccount({objAcc : this.objAccount})
    .then(result =>{
        this.objAccount = result;
    })
    .catch(error =>{
        console.log('error'+error);
    });
        
    
}

deleteAccountController(){
    console.log('at js controller');
    this.objAccount.Name = this.template.querySelector('lightning-input[data-formfield="AccountName"]').value;
    let text;
if (confirm("Do you really want to delete this record ?") == true) {

deleteAccount({ objAcc : this.objAccount})
    .then((result) => {
    this.objAccount = result;
    this.showSuccessToast();
})
.catch((error) => {
    this.error = error;
    this.result = undefined;
    console.log("Message = "+this.error);
});


} else {
text = "You canceled!";
}

}

showSuccessToast() {
    const evt = new ShowToastEvent({
        title: 'Message',
        message: this.result,
        variant: 'success',
        mode: 'dismissable'
    });
    this.dispatchEvent(evt);
}

}