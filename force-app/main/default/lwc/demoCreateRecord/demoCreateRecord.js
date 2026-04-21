import { LightningElement } from 'lwc';
import {createRecord} from 'lightning/uiRecordApi';
import AccountObject from '@salesforce/schema/Account';
import NameField from '@salesforce/schema/Account.Name';
import AnnualRevenueField from '@salesforce/schema/Account.AnnualRevenue';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class DemoCreateRecord extends LightningElement {
    //syntax
    //createRecord(recordInput)
    //recordInput syntax
    //recordInput={
    //      apiNmae:objectApiName,
    //      fields:{
    //      }}
    accName;
    annualRevenue;
    handleChange(event){
        if(event.target.name==="accName"){
            this.accName = event.target.value;
        }else if(event.target.name==="annualRevenue"){
            this.annualRevenue = event.target.value;
        }
        console.log(this.accName, this.annualRevenue);
    }
    handleCreate(event){
        // const accFields = {};
        // accFields[NameField.fieldApiName] = this.accName;
        // accFields[AnnualRevenueField.fieldApiName] = this.annualRevenue;
        //the above method can also be used
        const recordInput={
            apiName : AccountObject.objectApiName,
            fields : {
                Name: this.accName,
                AnnualRevenue: this.annualRevenue
            }
        }
        createRecord(recordInput)
            .then(result => {
                console.log('Record created', result);
                this.dispatchEvent(new ShowToastEvent({
                    titie:'Success!',
                    message:'Account created with Id: ' + result.id,
                    variant:'success'
                }));
            })
            .catch(error => {
                console.log('Error creating record', error);
                this.dispatchEvent(new ShowToastEvent({
                    title:'Error!',
                    message:error.body.message,
                    variant:'error'
                }));
            });
    }
}