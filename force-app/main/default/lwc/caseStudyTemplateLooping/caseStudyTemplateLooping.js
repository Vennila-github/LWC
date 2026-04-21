import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class CaseStudyTemplateLooping extends LightningElement {
    @track leads = [];
    leadName = '';
    leadSource= '';
    annualRevenue= '';
    email= '';
    displayLeads = false;
    handleLeadNameChange(event){
        this.leadName = event.target.value;
    }
    handleLeadSourceChange(event){
        this.leadSource = event.target.value;
    }
    handleAnnualRevenueChange(event){
        this.annualRevenue = event.target.value;
    }
    handleEmailChange(event){
        this.email = event.target.value;
    }
    showToast(title, message, variant) {
        const event = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant
        });
        this.dispatchEvent(event);
    }
    handleAdd(){
        if (
            !this.leadName.trim() ||
            !this.leadSource.trim() ||
            !this.annualRevenue.trim() ||
            !this.email.trim()
        ) {
            this.showToast('Error', 'Please fill all the fields before adding.', 'error');
            return;
        }
        const lead ={
            leadName : this.leadName,
            leadSource : this.leadSource,
            annualRevenue : this.annualRevenue,
            email : this.email
        };
        this.leads = [...this.leads,lead];
        console.log(JSON.stringify(this.leads));
        this.showToast('Success', 'Lead added successfully.', 'success');
        //this.handleClear();
    }
    handleClear(){
        this.leadName = [''];
        this.leadSource = [''];
        this.annualRevenue = [''];
        this.email = [''];
    }
    handleDisplay(){
        if (this.leads.length === 0) {
            this.showToast('Error', 'No leads available to display. Please add a lead first.', 'error');
            return;
        }
        this.displayLeads = true;
        console.log('Lead Name : '+this.leadName);
        console.log('Lead Source : '+this.leadSource);
        console.log('Annual Revenue : '+this.annualRevenue);
        console.log('Email : '+this.email);
    }
}