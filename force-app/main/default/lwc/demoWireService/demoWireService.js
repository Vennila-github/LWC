import { LightningElement,wire,api } from 'lwc';
import {getRecord, getFieldValue} from 'lightning/uiRecordApi';
import lName from '@salesforce/schema/Contact.LastName';
import email from '@salesforce/schema/Contact.Email';

export default class DemoWireService extends LightningElement {
    LastName;
    Email;
    @api recordId;
    //wire syntax
    //import {adapterId} from 'adapterModule';
    //@wire(adapterId,{adapterConfig})
    //function or property
    @wire(getRecord,{recordId: '$recordId', 
        fields: [lName,email]})

    //function
    contactDetailsFn({data,error}){
        console.log('fn');
        if(data){
            console.log('if')
            this.Email=data.fields.Email.value;
            this.LastName=data.fields.LastName.value;
            console.log(data.fields.Email.value);
            console.log(data.fields.LastName.value);
        }else if(error){
            console.log('error');
            console.log(error);
        }
    }
    //property
    @wire(getRecord,{recordId: '$recordId', 
        fields: [lName,email]})
    contactDetailsProperty;//property


    //getFieldValue syntax
    //getFieldValue(record:record,field:string)
    get emailFieldValue(){
        return getFieldValue(this.contactDetailsProperty.data,email)//utility function
    }
}