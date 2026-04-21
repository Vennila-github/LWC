import { LightningElement, wire } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi';
import BloodDonor from '@salesforce/schema/Blood_Donor__c';
import Id from '@salesforce/schema/Blood_Donor__c.Name';
import Name from '@salesforce/schema/Blood_Donor__c.Name__c';
import BloodGroup from '@salesforce/schema/Blood_Donor__c.Blood_Group__c';
import Eligible from '@salesforce/schema/Blood_Donor__c.Eligible_for_Blood_Donation__c';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class DiyWireService extends LightningElement {
    donorId;
    donorName;
    bloodGroup;
    eligible;
    @wire(getRecord,{recordId:'a01gK00000LNhOLQA1',
        fields :[Id, Name, BloodGroup, Eligible]})
    donorDetailsFunction({data,error}) {
        if(data){
            this.donorId = data.fields.Name.value;
            this.donorName = data.fields.Name__c.value;
            this.bloodGroup = data.fields.Blood_Group__c.value;
            this.eligible = data.fields.Eligible_for_Blood_Donation__c.value;
        }
    }
    handleClick(){
        if(this.eligible==true){
            const toastMsg = new ShowToastEvent({
                title: "Eligible Donor",
                message: "This donor is eligible for blood donation.",
                variant: "success"
            });
            this.dispatchEvent(toastMsg);
        }else{
            const toastMsg = new ShowToastEvent({
                title: "Not Eligible",
                message: "This donor is not eligible for blood donation.",
                variant:"error"
            });
            this.dispatchEvent(toastMsg);
        }
    }
}