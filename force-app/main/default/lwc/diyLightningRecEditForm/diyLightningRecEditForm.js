import { LightningElement, api } from 'lwc';
import ContactObject from '@salesforce/schema/Contact';
import FName from '@salesforce/schema/Contact.FirstName';
import LName from '@salesforce/schema/Contact.LastName';
import LeadSource from '@salesforce/schema/Contact.LeadSource';
import Email from '@salesforce/schema/Contact.Email';
import Phone from '@salesforce/schema/Contact.Phone';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class DiyLightningRecEditForm extends LightningElement {
    objectApiName = ContactObject;
    @api recordId;
    leadSourceWeb = 'Web';
    LeadSourcePhone = 'Phone';
    fields = {
        FirstName: FName,
        LastName: LName,
        LeadSource: LeadSource,
        Email: Email,
        Phone: Phone
    };
    handleSubmit(event){
        console.log(this.refs.LeadSource.value);
        if(this.refs.LeadSource.value === this.leadSourceWeb && this.refs.Email.value == null){
            console.log('if web');
            event.preventDefault();
            
            const toastMsg = new ShowToastEvent({
                title:"Information",
                message:"Email should be given for LeadSource Web",
                variant : "info"
            });
            this.dispatchEvent(toastMsg);
        }
        if(this.refs.LeadSource.value === this.LeadSourcePhone && this.refs.Phone.value == null){
            event.preventDefault();
            const toastMsg = new ShowToastEvent({
                title:"Information",
                message:"Phone should be given for LeadSource Phone",
                variant : "info"
            });
            this.dispatchEvent(toastMsg);
        }else {
            this.refs.myForm.submit(event.detail.fields);
        }
    }
     handleSuccess(event) {
        this.showToast('Success', 'Record saved successfully', 'success');
    }

    handleError(event) {
        this.showToast('Error', event.detail.message, 'error');
    }
    handleClick(event){
        //programmatically revert the form values
        const inputFields=this.template.querySelectorAll('lightning-input-field');
        console.log(inputFields);
        if(inputFields.length>0){
            inputFields.forEach(field=>{
                field.reset();//individual fiels gets reset
            });
        }
    }
    showToast(title, message, variant) {
        this.dispatchEvent(
            new ShowToastEvent({
                title,
                message,
                variant
            })
        );
    }
}