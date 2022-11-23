import { LightningElement } from 'lwc';

export default class RegistrationForm extends LightningElement {

firstName //variable should be always in camel case
lastName
gender 
dob
showname(){
    var inputFields=this.template.querySelectorAll("lightning-input");
    inputFields.forEach(element=>{
        if(element.name=='firstName'){
          this.firstName = element.value;
        }
  
        if(element.name=='lastName'){
          this.lastName = element.value;
        }

        if(element.name=='gender'){
            this.gender = element.value;
        }

        if(element.name=='dob'){
            this.dob = element.value;
        }
    });
  
}


}