import { LightningElement } from 'lwc';
import Opp from '@salesforce/schema/Opportunity'
import Name from '@salesforce/schema/Opportunity.Name';
import Amount from '@salesforce/schema/Opportunity.Amount';
import CloseDate from '@salesforce/schema/Opportunity.CloseDate';
import ExpectedRevenue from '@salesforce/schema/Opportunity.ExpectedRevenue';
import StageName from '@salesforce/schema/Opportunity.StageName';
export default class DemoLightningRecViewForm extends LightningElement {
    objectApiName=Opp;
    recordId;
    name=Name;
    amount=Amount;
    closeDate=CloseDate;
    expectedRevenue=ExpectedRevenue;
    stageName=StageName;
}