import { LightningElement } from 'lwc';
import GetSelectedTypeRecords from '@salesforce/apex/Accountprovider.GetSelectedTypeRecords';
import deleteSelectedRecords from '@salesforce/apex/Accountprovider.deleteSelectedRecords';

const columns = [
    { label: 'Name', fieldName: 'Name', editable: true },
    { label: 'Type', fieldName: 'Type', editable: true },
    { label: 'SLA', fieldName: 'SLA__c', editable: true }
];



export default class TableComponent extends LightningElement {

    SelectedAccType
    accList
    totalRecords
    showTableFlag = false

    
    selectedRowsCount
    selectedRecords
    columns = columns;
    draftValues=[];

    
    get accTypes() {
        return [
            { label: 'Prospect', value: 'Prospect' },
            { label: 'Other', value: 'Other' },
            
        ];
    }

    
    handleAccountTypeChange(event){
        this.SelectedAccType = event.detail.value;

        GetSelectedTypeRecords({AccountType : this.SelectedAccType})
        .then((result) =>{
            this.accList = result;
            this.totalRecords = result.length;
            
        })
        .catch((error) => {
            this.error = error
        });

       
    }

    selectedRecordsHandler(event){
        debugger;
        const selectedRows = event.detail.selectedRows;
        console.log('selected Records='+JSON.stringify(selectedRows));
        this.selectedRowsCount = event.detail.selectedRows.length;

        let recordsSets = new Set();
  
        // getting selected record id
        for (let i = 0; i < selectedRows.length; i++) {
            recordsSets.add(selectedRows[i].Id);
        }
  
        // coverting to array
        this.selectedRecords = Array.from(recordsSets);

    }

    deleteSelectedRecordsHandler(){
        deleteSelectedRecords({AccIdList : this.selectedRecords})
        .then((result) =>{
            this.result = result;
            this.getRemainingRecords();
        })
        .catch((error) =>{
            this.error = error;
        });

      }
  
      getRemainingRecords(){
        GetSelectedTypeRecords({AccountType : this.SelectedAccType})
        .then((result) =>{
            this.accList = result;
        })
        .catch((error) => {
            this.error = error
        });
    }

    }

