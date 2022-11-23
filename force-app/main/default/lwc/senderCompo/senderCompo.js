import { LightningElement } from 'lwc';
import pubSub from 'c/pubSub';

export default class SenderCompo extends LightningElement {

    accountName
    sendDataHandler(){
        console.log('i am a sender js method')
        this.accountName = this.template.querySelector('lightning-input[data-formfield="AccountName"]').value;
        pubSub.publish('sendDataEvent',this.accountName);
    }
}