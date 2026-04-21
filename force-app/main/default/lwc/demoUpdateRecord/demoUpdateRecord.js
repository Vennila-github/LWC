import { LightningElement,wire,api } from 'lwc';
import { updateRecord } from 'lightning/uiRecordApi';
import {getRecord} from 'lightning/uiRecordApi';
import {generateRecordInputForUpdate } from 'lightning/uiRecordApi';
import NameField from '@salesforce/schema/Account.Name';
import AnnualRevenueField from '@salesforce/schema/Account.AnnualRevenue';
import EmailField from '@salesforce/schema/Account.Email__c';

export default class DemoUpdateRecord extends LightningElement {
    //updateRecord function
    //syntax
    //updateRecord(recordInput)
    //recordInput=({
    //fields:{
    //recordId,
    //fieldApiName:field value}
    //})
   
    
    @api recordId;
    name;
    annRev;
    email;
    wiredData;

    //setCustomValidity()
    //inputFieldElement.setCustomValidity("error message");
    //reportValidity()-shows the error message in the UI
    //inputFieldElement.reportValidity()

    //fetchthe account record datea and populate on the input bozes
    @wire(getRecord,{recordId:'$recordId',fields:[NameField,AnnualRevenueField,EmailField]})
    accountRecord({data,error}){
        console.log(this.recordId);
        if(data){
            this.wiredData = data;
            console.log('if',data);
            this.name = data.fields.Name.value;
            this.annRev = data.fields.AnnualRevenue.value;
            this.email = data.fields.Email__c.value;
        }else if(error){
            console.log(error)
        }
    };
    updateRecordHandler(event){
        if (!this.validateFields()) {
            return;
        }
        //generateRecordInputForUpdate()-generates the recordInput
        const recInput = generateRecordInputForUpdate(this.wiredData);
        recInput.fields[NameField.fieldApiName] = this.name;
        recInput.fields[AnnualRevenueField.fieldApiName] = this.annRev;
        recInput.fields[EmailField.fieldApiName] = this.email;
        updateRecord(recInput)
        .then(result=>{
            console.log('Record Updated', result);
        })
        .catch(error=>{
            console.log('Error updating record', error);
        });
    }
    handleChange(event){
        //fetch the newly modified value
        let input=event.target;
        if(input.name==="Name"){
            this.name = input.value;
        }else if(input.name==="AnnualRevenue"){
            this.annRev = input.value;
        }else if (input.name==="Email"){
            // if(!input.value){//checking if its empty(its req field)
            //     input.setCustomValidity("Email isss required");//commented portiosnis for email only
               
            // }else{
                this.email = input.value;
            //     input.setCustomValidity("");
            // }
            //  input.reportValidity();
        }
    }
    validateFields(){
        const inputs = this.template.querySelectorAll('.validate');
        console.log(inputs);
        let isValid = true;

        inputs.forEach(input => {
            console.log(input.name, input.value);
            // Reset previous errors
            // Custom validation
            if (!input.value) {
                isValid = false;
                if (input.name === 'Name') {
                    input.setCustomValidity('Fill the Name field');
                } else if (input.name === 'AnnualRevenue') {
                    input.setCustomValidity('Fill the AnnualRevenue field');
                } else if (input.name === 'Email') {
                    input.setCustomValidity('Fill the Email field');
                }
            }
            input.reportValidity();
        });
        if (!isValid) {
            return;
        }   
        
    }
}