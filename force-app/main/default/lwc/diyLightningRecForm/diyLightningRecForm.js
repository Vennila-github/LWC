import { LightningElement, api } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import CaseObject from '@salesforce/schema/Case';
import CaseNumber from '@salesforce/schema/Case.CaseNumber';
import CaseOrigin from '@salesforce/schema/Case.Origin';  
import CaseStatus from '@salesforce/schema/Case.Status';     
import CaseSubject from '@salesforce/schema/Case.Subject';  
export default class DiyLightningRecForm extends LightningElement {
    @api objectApiName = CaseObject;
    @api recordId
    fields = [              // add the same order from import
        CaseNumber,
        CaseOrigin,
        CaseStatus,
        CaseSubject
    ];
    handleSuccess(event){
        console.log(event.detail);
        const evt = new ShowToastEvent({
            title:"Case",
            message:"Case created"+event.detail.id,
            variant:"success"
        });
        console.log('show',evt);
        this.dispatchEvent(evt);
    };
    handleError(event){
        console.log(event.detail);
        const evt = new ShowToastEvent({
            title:"Case",
            message:"Case not created"+event.detail.message,
            variant:"error"
        });
        console.log('show',evt);
        this.dispatchEvent(evt);
    };
}