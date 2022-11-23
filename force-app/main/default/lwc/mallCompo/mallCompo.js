import { LightningElement } from 'lwc';

export default class MallCompo extends LightningElement {
    
    recievedDatafromShop
    showPopupModalFlag = false;

    mallJScontroller(event){
        console.log('parent js method called afterevent handle');
        this.recievedDatafromShop = event.detail;
    }

    showPopupHandler(){
        this.showPopupModalFlag = true
    }
    
    closePopupHandler(){
        this.showPopupModalFlag = false
    }
}