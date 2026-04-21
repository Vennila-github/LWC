import { LightningElement, api } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
// import Opp_Obj from '@salesforce/schema/Opportunity';//ref for the opp
// import Name_Field from '@salesforce/schema/Opportunity.Name';
// import Amount_Field from '@salesforce/schema/Opportunity.Amount';
// import StageName_Field from '@salesforce/schema/Opportunity.StageName';     
// import CloseDate_Field from '@salesforce/schema/Opportunity.CloseDate';

export default class LightningRecForm extends LightningElement {
    @api objectApiName;
    @api recordId;
    // fields = [              // add the same order from import
    //         Name_Field,
    //         Amount_Field,
    //         StageName_Field,
    //         CloseDate_Field
    //     ];
        handleSuccess(event){
            console.log(event.detail);
            // const evt = new ShowToastEvent({
            //     title:"Opportunity",
            //     message:"Opp updated"+event.detail.id,
            //     variant:"success"
            // });
            // console.log('show',evt);
            // this.dispatchEvent(evt);
        }

}