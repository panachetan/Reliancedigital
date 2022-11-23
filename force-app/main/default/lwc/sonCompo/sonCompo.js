import { api, LightningElement } from 'lwc';

export default class SonCompo extends LightningElement {

    netsalary = 4000
    val

    @api
    sonjsmethod(){
        this.netsalary = 5000
    }

    @api
    resetsliderjsmethod(event){
        this.val=0
       // eval("$A.get('e.force:refreshView').fire();");
    }
}