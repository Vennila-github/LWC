import { LightningElement,api } from 'lwc';
import ContactObject from '@salesforce/schema/Contact';
import acc from '@salesforce/schema/Contact.AccountId';
import LastName from '@salesforce/schema/Contact.LastName';
import Email from '@salesforce/schema/Contact.Email';
import Phone from '@salesforce/schema/Contact.Phone';
import Descript from '@salesforce/schema/Contact.Description';
import Titl from '@salesforce/schema/Contact.Title';
import Birthdate from '@salesforce/schema/Contact.Birthdate';
import Address from '@salesforce/schema/Contact.MailingAddress';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class DemoLightningRecEditForm extends LightningElement {
    @api recordId;
    objectApiName = ContactObject;
    acc = acc;
    lastName = LastName;
    email = Email;
    phone = Phone;
    desc = Descript;
    title = Titl;
    birthdate = Birthdate;
    address=Address;
    showAddress=false;
    fields={
            AccountId:acc,
            LastName:LastName, 
            Email:Email, 
            Phone:Phone,
            Description:Descript,
            Title:Titl,
            Birthdate:Birthdate,
            Address:Address
        }
    handleSubmit(event){
        //custom logic to handle the form submission
        //3 ways to fetch the value of the fields from the component
        //1.lwc:ref
        console.log("lwc:ref for Accountname",this.refs.AccountName.value);
        console.log("lwc:ref for Title",this.refs.Title.value);

        //2.Traditional method-this.template.queryselector
        console.log("This.queryselector",this.template.querySelector(".LastName").value);

        //3.Event object
        console.log('event.detail.fields',event.detail.fields);

        //Scenario 1- if Title->VicePresident then the account name should not be null
        if(this.refs.Title.value === "Vice President" && this.refs.AccountName.value == null){
            event.preventDefault();
            const toastMsg = new ShowToastEvent({//information message using Toastmessage
                title:"Informatin",
                message:"Acc shoul be there for Vice President",
                variant : "info"
            });
            this.dispatchEvent(toastMsg);
        }else{
            //you have to submit the form programmatically, manualy
            //description field with value as "VIPContact"
            event.detail.fields.Description="VIP Contact";
            this.refs.myForm.submit(event.detail.fields);
            const toastMsg = new ShowToastEvent({
                title:"Submitted",
                message:"Record successfully submitted",
                variant : "success"
            });
            this.dispatchEvent(toastMsg);
        }
    }
    handleSuccess(event){
        const toastMsg = new ShowToastEvent({
                title:"Submitted",
                message:"Record successfully submitted"+event.detail.id,
                variant : "success"
        });
        this.dispatchEvent(toastMsg);
    }
    handleError(event){
        const toastMsg = new ShowToastEvent({
                title:"Error Occured",
                message:"Record successfully submitted"+event.detail.error.message,
                variant : "error"
        });
        this.dispatchEvent(toastMsg);
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
    handleToggleAddress(event){
        console.log(event);
        this.showAddress=event.target.checked;
    }
}