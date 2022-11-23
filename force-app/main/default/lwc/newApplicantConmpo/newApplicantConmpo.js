import { LightningElement } from 'lwc';
import createApplicantRecord from '@salesforce/apex/applicantProvider.createApplicantRecord';
export default class NewApplicantConmpo extends LightningElement {

        applicantObject = {'sobjectType' : 'Applicant__c'}

    createNewApplicantHandler(){

       this.applicantObject.First_Name__c = this.template.querySelector('lightning-input[data-formfield="applicantFirstName"]').value;
       this.applicantObject.Last_name__c = this.template.querySelector('lightning-input[data-formfield="applicantLastName"]').value;

       createApplicantRecord({objApplicant : this.applicantObject})
       .then((result) => {
         this.result = result;
         this.error = undefined;
     })
     .catch((error) => {
         this.error = error;
         this.result = undefined;
     });
   
    }

    get options() {
        return [
            { label: 'Male', value: 'Male' },
            { label: 'Female', value: 'Female' },
            { label: 'Transgender', value: 'Transgender' },
        ];
    }

    handleChange(event){
        
        this.applicantObject.Gender__c=event.detail.value;

    }

}