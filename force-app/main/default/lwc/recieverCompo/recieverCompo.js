import { LightningElement } from 'lwc';
import pubSub from 'c/pubSub';

export default class RecieverCompo extends LightningElement {
    recievedData

    connectedCallback(){
        this.recievedDataHandler()
    }

    recievedDataHandler(){
        pubSub.subscribe("sendDataEvent",(message) =>{
            this.recievedData = message
            console.log(this.recievedData)
        });
    }
}