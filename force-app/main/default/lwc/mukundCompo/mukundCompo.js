import { LightningElement } from 'lwc';

export default class MukundCompo extends LightningElement {

recievedtext
    sendcontroller(){
        console.log('inside method');
        this.recievedtext = this.template.querySelector('lightning-input[data-formfield="entername"]').value;

    }
}