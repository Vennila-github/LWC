import { LightningElement, api } from 'lwc';
import BloodDonor from '@salesforce/schema/Blood_Donor__c';
import Name from '@salesforce/schema/blood_Donor__c.Name';
import BloodGroup from '@salesforce/schema/Blood_Donor__c.Blood_Group__c';
import DOB from '@salesforce/schema/Blood_Donor__c.Date_of_Birth__c';
import Phone from '@salesforce/schema/Blood_Donor__c.Phone_Number__c';
import Email from '@salesforce/schema/Blood_Donor__c.Email__c';
import Eligible from '@salesforce/schema/Blood_Donor__c.Eligible_for_Blood_Donation__c';

export default class DiyLightningRecViewForm extends LightningElement {
    objectApiName = BloodDonor;
    @api recordId;
    name = Name;
    bloodGroup = BloodGroup;
    dob = DOB;
    phone = Phone;
    Email = Email;
    eligible = Eligible;
    fields = [Name, BloodGroup, DOB, Phone];
}