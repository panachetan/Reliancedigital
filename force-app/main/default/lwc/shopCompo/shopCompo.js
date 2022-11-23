import { LightningElement } from 'lwc';

export default class ShopCompo extends LightningElement {

    shopJSHandler(){
        const myEvent = new CustomEvent('shopevent',{detail : 'details from shop como'});
        this.dispatchEvent(myEvent);
    }

    closeButtonHandler(){
        const myevent = new CustomEvent('closebuttonevent');
        this.dispatchEvent(myevent);
    }
}