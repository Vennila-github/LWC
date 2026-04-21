import { LightningElement,wire } from 'lwc';
import {getObjectInfo} from 'lightning/uiObjectInfoApi';
import AccountObject from '@salesforce/schema/Account';
export default class DemogetObjectInfo extends LightningElement {
    //syntax
    accountData={};
    @wire(getObjectInfo, {objectApiName:AccountObject})
    accountObjectInfo({data,error}){
        if(data){
            console.log('if');
            this.accountData=data;
            console.log('hi',this.accountData.childRelationships);
            console.log(data.defaultRecordTypeId);
        }else if(error){
            console.log('error',error);
        }
    }
}