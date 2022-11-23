import { LightningElement } from 'lwc';

export default class FatherCompo extends LightningElement {

    fatherJSHandler(){
        this.template.querySelector('c-son-compo').sonjsmethod();
    }

    fatherResetsliderJSHandler(){
        this.template.querySelector('c-son-compo').resetsliderjsmethod();
    }
}