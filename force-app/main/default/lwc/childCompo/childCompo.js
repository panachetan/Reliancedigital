import { api, LightningElement } from 'lwc';
const columns=[
    { label: 'Name', fieldName: 'Name', editable: true },
    { label: 'Account Name', fieldName: 'AccountName', editable: true }
]
export default class ChildCompo extends LightningElement {

    columns = columns;

    @api childData
    @api recievedEmployeeName
    @api recievedCarDetailsFromParent
    @api recieveObjectNameFromParent
    @api contactListRecievedFromParent 
    draftValues=[];              
}