import { LightningElement,wire } from 'lwc';
import {getObjectInfo,getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import industry from '@salesforce/schema/Account.Industry';
import Account from '@salesforce/schema/Account';
export default class DemogetPicklistValues extends LightningElement {
    
    recordTypeOptions=[];
    industryOptions=[];
    selectedRecordType;
    selectedIndustry;
    

    @wire(getObjectInfo,{objectApiName:Account})
    accObjectInfo({data,error}){
        if(data){
            const rtInfos = data.recordTypeInfos;
            this.recordTypeOptions = Object.keys(rtInfos)
                .filter(rtId => rtInfos[rtId].available)
                .map(rtId => ({
                    label: rtInfos[rtId].name,
                    value: rtId
                }));
        }else if(error){

        }
    }
    @wire (getPicklistValuesByRecordType ,
        {objectApiName:Account, recordTypeId:'$selectedRecordType'})
    picklistHandler({data,error}){
        console.log('👉 Wire fired');
        if(data){
            console.log('if');
            console.log('👉 Industry Field:',
            data.picklistFieldValues?.Industry);
            this.industryOptions = data.picklistFieldValues?.Industry?.values||[];
            console.log(this.industryOptions);
        }else if(error){
            console.error(error);
        }
    }
    handleRecordTypeChange(event) {
        this.selectedRecordType = event.detail.value;
        console.log('Selected RT:', this.selectedRecordTypeId);
    }

    // Handle Industry change
    handleIndustryChange(event) {
        this.selectedIndustry = event.detail.value;
    }
}