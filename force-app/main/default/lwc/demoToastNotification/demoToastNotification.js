import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class DemoToastNotification extends LightningElement {
    handleSuccessClick(event){
        const myToast=new ShowToastEvent({
            title:'Success',
            message:'{2}Record created successfully{3}',
            variant:'success',
            messageData:[
                'Salesforce',
                {
                    url:'https://www.salesforce.com',
                    label:'clcik here'
                },
                'Account',
                {
                    url:'https://www.salesforce.com',
                    label:' clcik conthere'
                },

            ]
        });
        this.dispatchEvent(myToast);
    }
    handleErrorClick(){
        const myToast=new ShowToastEvent({
            title:'Error',
            message:'error creating an account',
            variant:'error',
            mode:'sticky'
        });
        this.dispatchEvent(myToast);
    }
    handleInfoClick(){
        const myToast=new ShowToastEvent({
            title:'Infor',
            message:'The org maintenance is due',
            variant:'info'
        });
        this.dispatchEvent(myToast);
    }
    handleWarnClick(){
        const myToast=new ShowToastEvent({
            title:'Warning',
            message:'the requested recordis accessibel',
            variant:'warning',
            mode : 'pester'
        });
        this.dispatchEvent(myToast);
    }
}